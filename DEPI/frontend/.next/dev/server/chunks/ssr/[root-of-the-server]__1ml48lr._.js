module.exports = [
"[project]/lib/chat-export.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportThreadSummaryAsPdf",
    ()=>exportThreadSummaryAsPdf,
    "exportVisitNotes",
    ()=>exportVisitNotes
]);
function escapeHtml(value) {
    return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function unique(items) {
    return [
        ...new Set(items.filter(Boolean))
    ];
}
function getAssistantResponses(thread) {
    return thread.messages.filter((message)=>message.role === "assistant" && message.data).map((message)=>message.data);
}
function buildSummary(thread) {
    const responses = getAssistantResponses(thread);
    const latest = responses.at(-1);
    return {
        latest,
        symptoms: unique(responses.flatMap((response)=>response.symptoms)),
        conditions: unique(responses.flatMap((response)=>response.suspected_conditions)),
        foodsToEat: unique(responses.flatMap((response)=>response.recommendations.foods_to_eat)),
        foodsToAvoid: unique(responses.flatMap((response)=>response.recommendations.foods_to_avoid)),
        exercises: unique(responses.flatMap((response)=>response.recommendations.exercises_recommended)),
        doctors: unique(responses.flatMap((response)=>response.doctors.map((doctor)=>`${doctor.name} — ${doctor.specialty}`)))
    };
}
function downloadTextFile(filename, content) {
    const blob = new Blob([
        content
    ], {
        type: "text/plain;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
}
function slugify(title) {
    return title.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "chat";
}
function exportVisitNotes(thread) {
    const summary = buildSummary(thread);
    const patientMessages = thread.messages.filter((message)=>message.role === "user").map((message)=>`- ${message.content}`);
    const content = [
        `MedCortex Visit Notes`,
        `Conversation: ${thread.title}`,
        `Updated: ${new Date(thread.updatedAt).toLocaleString()}`,
        "",
        "Patient concerns",
        patientMessages.length > 0 ? patientMessages.join("\n") : "- No patient notes recorded.",
        "",
        "Symptoms mentioned",
        summary.symptoms.length > 0 ? summary.symptoms.map((item)=>`- ${item}`).join("\n") : "- None",
        "",
        "Flagged conditions",
        summary.conditions.length > 0 ? summary.conditions.map((item)=>`- ${item}`).join("\n") : "- None",
        "",
        "Recommended foods",
        summary.foodsToEat.length > 0 ? summary.foodsToEat.map((item)=>`- ${item}`).join("\n") : "- None",
        "",
        "Foods to avoid",
        summary.foodsToAvoid.length > 0 ? summary.foodsToAvoid.map((item)=>`- ${item}`).join("\n") : "- None",
        "",
        "Recommended exercise",
        summary.exercises.length > 0 ? summary.exercises.map((item)=>`- ${item}`).join("\n") : "- None",
        "",
        "Rest recommendation",
        summary.latest?.recommendations.rest_recommendation || "None",
        "",
        "Suggested doctors or clinics",
        summary.doctors.length > 0 ? summary.doctors.map((item)=>`- ${item}`).join("\n") : "- None",
        "",
        "Clinical response",
        summary.latest?.answer || "No AI response available."
    ].join("\n");
    downloadTextFile(`${slugify(thread.title)}-visit-notes.txt`, content);
}
function exportThreadSummaryAsPdf(thread) {
    const summary = buildSummary(thread);
    const windowRef = window.open("", "_blank", "noopener,noreferrer");
    if (!windowRef) {
        exportVisitNotes(thread);
        return;
    }
    const renderList = (items)=>items.length > 0 ? `<ul>${items.map((item)=>`<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "<p>None recorded.</p>";
    const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(thread.title)} - MedCortex Summary</title>
        <style>
          body { font-family: Arial, sans-serif; color: #18181b; margin: 40px; line-height: 1.55; }
          h1, h2 { margin-bottom: 8px; }
          h1 { font-size: 28px; }
          h2 { font-size: 16px; color: #6f4ef2; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 28px; }
          .meta { color: #71717a; margin-bottom: 24px; }
          .card { border: 1px solid #e9e4f7; border-radius: 18px; padding: 18px; margin-top: 12px; }
          ul { margin: 8px 0 0 18px; padding: 0; }
          p { margin: 8px 0; }
        </style>
      </head>
      <body>
        <h1>${escapeHtml(thread.title)}</h1>
        <p class="meta">Exported ${escapeHtml(new Date(thread.updatedAt).toLocaleString())}</p>
        <div class="card">
          <h2>Symptoms</h2>
          ${renderList(summary.symptoms)}
          <h2>Flagged Conditions</h2>
          ${renderList(summary.conditions)}
          <h2>Foods To Eat</h2>
          ${renderList(summary.foodsToEat)}
          <h2>Foods To Avoid</h2>
          ${renderList(summary.foodsToAvoid)}
          <h2>Recommended Exercise</h2>
          ${renderList(summary.exercises)}
          <h2>Suggested Doctors or Clinics</h2>
          ${renderList(summary.doctors)}
          <h2>Clinical Summary</h2>
          <p>${escapeHtml(summary.latest?.answer || "No AI response available.")}</p>
        </div>
      </body>
    </html>
  `;
    windowRef.document.open();
    windowRef.document.write(html);
    windowRef.document.close();
    windowRef.focus();
    windowRef.print();
}
}),
"[project]/lib/chat-storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearChatState",
    ()=>clearChatState,
    "loadChatState",
    ()=>loadChatState,
    "saveChatState",
    ()=>saveChatState
]);
const STORAGE_KEY_PREFIX = "medcortex_chat_v1_user_";
function storageKey(userId) {
    return `${STORAGE_KEY_PREFIX}${userId}`;
}
function saveChatState(userId, threads, activeThreadId) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const persistedThreads = undefined;
    const serialized = undefined;
}
function loadChatState(userId) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const raw = undefined;
}
function clearChatState(userId) {
    if (userId !== undefined) {
        localStorage.removeItem(storageKey(userId));
    } else {
        // Fallback: clear all keys belonging to any user (e.g. on logout when user id is not available)
        const keysToRemove = [];
        for(let i = 0; i < localStorage.length; i++){
            const k = localStorage.key(i);
            if (k?.startsWith(STORAGE_KEY_PREFIX)) keysToRemove.push(k);
        }
        keysToRemove.forEach((k)=>localStorage.removeItem(k));
    }
}
}),
"[project]/lib/session.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSession",
    ()=>clearSession,
    "firstNameFromUser",
    ()=>firstNameFromUser,
    "getStoredUser",
    ()=>getStoredUser,
    "persistSession",
    ()=>persistSession
]);
const USER_KEY = "medcortex_user";
function persistSession(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}
function getStoredUser() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const raw = undefined;
}
function clearSession() {
    localStorage.removeItem("token");
    localStorage.removeItem(USER_KEY);
}
function firstNameFromUser(user) {
    if (!user?.name?.trim()) return "there";
    return user.name.trim().split(/\s+/)[0] ?? "there";
}
}),
"[project]/components/chat/MessageBubble.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageBubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function MessageBubble({ message }) {
    const isUser = message.role === "user";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-end gap-2.5 ${isUser ? "justify-end" : "justify-start"}`,
        children: [
            !isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4eeff] text-sm text-[#6f4ef2] shadow-sm",
                children: "✦"
            }, void 0, false, {
                fileName: "[project]/components/chat/MessageBubble.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${isUser ? "rounded-br-sm bg-[#0d0d0d] text-white" : "rounded-bl-sm border border-[#ebebef] bg-white text-[#1a1a1a] shadow-sm"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormattedText, {
                        text: message.content,
                        variant: isUser ? "user" : "assistant"
                    }, void 0, false, {
                        fileName: "[project]/components/chat/MessageBubble.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `mt-1.5 text-xs opacity-50 ${isUser ? "text-right text-white" : "text-[#6b6b76]"}`,
                        children: message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit"
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/chat/MessageBubble.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/MessageBubble.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eaeaf0] text-sm",
                children: "👤"
            }, void 0, false, {
                fileName: "[project]/components/chat/MessageBubble.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/MessageBubble.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function FormattedText({ text, variant }) {
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: parts.map((part, i)=>{
            if (part.startsWith("**") && part.endsWith("**")) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: variant === "user" ? "font-semibold text-white" : "font-semibold text-[#111]",
                    children: part.slice(2, -2)
                }, i, false, {
                    fileName: "[project]/components/chat/MessageBubble.tsx",
                    lineNumber: 58,
                    columnNumber: 13
                }, this);
            }
            if (part.startsWith("*") && part.endsWith("*")) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                    className: variant === "user" ? "italic text-white/90" : "italic text-[#5c5c66]",
                    children: part.slice(1, -1)
                }, i, false, {
                    fileName: "[project]/components/chat/MessageBubble.tsx",
                    lineNumber: 70,
                    columnNumber: 13
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: variant === "user" ? "text-white" : "text-[#1a1a1a]",
                children: part
            }, i, false, {
                fileName: "[project]/components/chat/MessageBubble.tsx",
                lineNumber: 79,
                columnNumber: 11
            }, this);
        })
    }, void 0, false);
}
}),
"[project]/hooks/useSpeechToText.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpeechToText",
    ()=>useSpeechToText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useSpeechToText({ onTranscript, onError }) {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const mediaRecorder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mimeTypeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("audio/webm");
    const transcribe = async (audioBlob, mimeType)=>{
        try {
            const extension = mimeType.includes("ogg") ? "ogg" : "webm";
            const file = new File([
                audioBlob
            ], `recording.${extension}`, {
                type: mimeType
            });
            const formData = new FormData();
            formData.append("file", file);
            const response = await fetch("/api/transcribe", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (!response.ok || !data.text) {
                throw new Error(data.error || "Transcription failed");
            }
            onTranscript(data.text);
            setStatus("idle");
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unable to transcribe your recording.";
            onError(message);
            setStatus("idle");
        }
    };
    const startRecording = async ()=>{
        if (("TURBOPACK compile-time value", "undefined") === "undefined" || !navigator.mediaDevices?.getUserMedia) {
            onError("Your browser does not support audio recording.");
            return;
        }
        //TURBOPACK unreachable
        ;
    };
    const stopRecording = ()=>{
        if (status === "recording" && mediaRecorder.current) {
            mediaRecorder.current.stop();
        }
    };
    return {
        status,
        startRecording,
        stopRecording
    };
}
}),
"[project]/components/chat/VoiceButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VoiceButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSpeechToText$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useSpeechToText.ts [app-ssr] (ecmascript)");
"use client";
;
;
function MicrophoneIcon({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: className,
        "aria-hidden": "true",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z M19 10v2a7 7 0 0 1-14 0v-2 M12 19v3 M8 22h8"
        }, void 0, false, {
            fileName: "[project]/components/chat/VoiceButton.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chat/VoiceButton.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function StopIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: "h-5 w-5",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "4",
            y: "4",
            width: "16",
            height: "16",
            rx: "2",
            fill: "white"
        }, void 0, false, {
            fileName: "[project]/components/chat/VoiceButton.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chat/VoiceButton.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function VoiceButton({ onTranscript, onError, disabled = false }) {
    const { status, startRecording, stopRecording } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSpeechToText$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpeechToText"])({
        onTranscript,
        onError
    });
    const isDisabled = disabled || status === "processing";
    const handleClick = ()=>{
        if (status === "recording") {
            stopRecording();
            return;
        }
        void startRecording();
    };
    let title = "Start recording";
    let className = "relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 outline-none focus:ring-2 focus:ring-[#6f4ef2]/50 text-[#6f4ef2]";
    let content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MicrophoneIcon, {
        className: "h-5 w-5"
    }, void 0, false, {
        fileName: "[project]/components/chat/VoiceButton.tsx",
        lineNumber: 59,
        columnNumber: 17
    }, this);
    if (status === "requesting") {
        title = "Requesting microphone access...";
        className += " opacity-50 cursor-not-allowed";
    } else if (status === "recording") {
        title = "Stop recording";
        className += " bg-[#ef4444] text-white animate-pulse";
        content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StopIcon, {}, void 0, false, {
            fileName: "[project]/components/chat/VoiceButton.tsx",
            lineNumber: 67,
            columnNumber: 15
        }, this);
    } else if (status === "processing") {
        title = "Transcribing...";
        className += " cursor-not-allowed text-[#6f4ef2]/70";
        content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/components/chat/VoiceButton.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: handleClick,
        disabled: isDisabled,
        title: title,
        "aria-label": title,
        className: className,
        children: content
    }, void 0, false, {
        fileName: "[project]/components/chat/VoiceButton.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/services/chat.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendMessage",
    ()=>sendMessage,
    "uploadFile",
    ()=>uploadFile
]);
// frontend/services/chat.ts
// ─────────────────────────────────────────────────────────────────────────────
// MedCortex Chat Service
// Handles all API calls to the FastAPI /chat endpoint
// ─────────────────────────────────────────────────────────────────────────────
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
async function sendMessage(message, unified_context) {
    const token = localStorage.getItem("token");
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE}/chat`, {
        message,
        unified_context
    }, {
        headers: {
            "Content-Type": "application/json",
            ...token ? {
                Authorization: `Bearer ${token}`
            } : {}
        }
    });
    return response.data;
}
async function uploadFile(file) {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("file", file);
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE}/upload`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            ...token ? {
                Authorization: `Bearer ${token}`
            } : {}
        }
    });
    return response.data;
}
}),
"[project]/components/chat/FileUpload.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/chat.ts [app-ssr] (ecmascript)");
// frontend/components/chat/FileUpload.tsx
"use client";
;
;
;
function FileUpload({ onUploadSuccess, disabled }) {
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleFileChange = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        try {
            setIsUploading(true);
            setError(null);
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadFile"])(file);
            if (data.status === "success" && data.unified_context) {
                onUploadSuccess(data.unified_context);
            }
        } catch (err) {
            setError(err.response?.data?.detail || "Failed to upload and process document");
        } finally{
            setIsUploading(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                ref: fileInputRef,
                onChange: handleFileChange,
                className: "hidden",
                disabled: disabled || isUploading,
                accept: "image/*,application/pdf"
            }, void 0, false, {
                fileName: "[project]/components/chat/FileUpload.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>fileInputRef.current?.click(),
                disabled: disabled || isUploading,
                className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${isUploading ? "animate-pulse bg-[#e0d6ff] text-[#6f4ef2]" : "bg-transparent text-[#6f4ef2] hover:bg-[#f4efff]"} disabled:cursor-not-allowed disabled:opacity-50`,
                "aria-label": "Upload document or image",
                title: "Upload Medical Document",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    className: "h-5 w-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M12 4.5v15m7.5-7.5h-15"
                    }, void 0, false, {
                        fileName: "[project]/components/chat/FileUpload.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/chat/FileUpload.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/FileUpload.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-12 left-0 w-48 rounded bg-red-100 p-2 text-xs text-red-600 shadow",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/chat/FileUpload.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/FileUpload.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/chat/InputBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InputBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$VoiceButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/VoiceButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/FileUpload.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function getDocumentLabel(context) {
    const classification = context?.classification || context?.document_type || context?.modality;
    if (typeof classification === "string" && classification.trim()) {
        return classification;
    }
    return "Medical document";
}
function getDocumentTitle(context) {
    const filename = context?.filename;
    const title = context?.document_information?.title;
    if (typeof title === "string" && title.trim()) return title;
    if (typeof filename === "string" && filename.trim()) return filename;
    return "Uploaded document";
}
function buildDocumentSummary(context) {
    const findingCount = Array.isArray(context?.clinical_findings) ? context.clinical_findings.length : 0;
    const medCount = Array.isArray(context?.medications) ? context.medications.length : 0;
    const labCount = Array.isArray(context?.lab_values) ? context.lab_values.length : 0;
    const warningCount = Array.isArray(context?.warnings) ? context.warnings.length : 0;
    const parts = [];
    if (findingCount > 0) parts.push(`${findingCount} finding${findingCount === 1 ? "" : "s"}`);
    if (medCount > 0) parts.push(`${medCount} medication${medCount === 1 ? "" : "s"}`);
    if (labCount > 0) parts.push(`${labCount} lab value${labCount === 1 ? "" : "s"}`);
    if (warningCount > 0) parts.push(`${warningCount} warning${warningCount === 1 ? "" : "s"}`);
    if (parts.length === 0) {
        return "Ready for follow-up questions.";
    }
    return `Detected ${parts.join(" • ")}.`;
}
function buildSuggestedPrompts(context) {
    const classification = String(context?.classification || context?.document_type || "").toLowerCase();
    const prompts = [
        "Summarize this document for me.",
        "What should I pay attention to?"
    ];
    if (classification.includes("prescription")) {
        prompts.unshift("What medications and doses are listed?");
        prompts.push("Are there any safety warnings or interactions?");
    } else if (classification.includes("lab")) {
        prompts.unshift("Which lab results are abnormal?");
        prompts.push("Explain these results in simple terms.");
    } else {
        prompts.unshift("Tell me the key findings from this document.");
    }
    return prompts.slice(0, 4);
}
function InputBar({ onSend, disabled }) {
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [voiceError, setVoiceError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadedContext, setUploadedContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = textareaRef.current;
        if (el) {
            el.style.height = "auto";
            el.style.height = `${Math.min(el.scrollHeight, 140)}px`;
        }
    }, [
        text
    ]);
    const handleSend = ()=>{
        if (!text.trim() && !uploadedContext || disabled) return;
        const fallbackPrompt = "Summarize this uploaded medical document and highlight anything important.";
        onSend(text.trim() || fallbackPrompt, uploadedContext);
        setText("");
        setVoiceError(null);
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }
    };
    const handleTranscript = (transcript)=>{
        setText((prev)=>prev ? `${prev} ${transcript}` : transcript);
        setVoiceError(null);
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    const handleInput = ()=>{
        const el = textareaRef.current;
        if (el) {
            el.style.height = "auto";
            el.style.height = `${Math.min(el.scrollHeight, 140)}px`;
        }
    };
    const handleUploadSuccess = (context)=>{
        setUploadedContext(context);
        setVoiceError(null);
        textareaRef.current?.focus();
    };
    const suggestedPrompts = uploadedContext ? buildSuggestedPrompts(uploadedContext) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-full max-w-3xl space-y-2",
        children: [
            uploadedContext && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-[#e8e1fb] bg-gradient-to-br from-[#faf7ff] via-white to-[#f6f1ff] px-4 py-3 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-bold uppercase tracking-[0.22em] text-[#7b7b88]",
                                        children: "Document ready"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/InputBar.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 truncate text-sm font-semibold text-[#111]",
                                        children: getDocumentTitle(uploadedContext)
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/InputBar.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-[#5f5f69]",
                                        children: [
                                            getDocumentLabel(uploadedContext),
                                            " · ",
                                            buildDocumentSummary(uploadedContext)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chat/InputBar.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/InputBar.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setUploadedContext(null),
                                className: "rounded-full px-2 py-1 text-[#7b7b88] transition hover:bg-white hover:text-[#111]",
                                "aria-label": "Clear uploaded document",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/InputBar.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/InputBar.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex flex-wrap gap-2",
                        children: suggestedPrompts.map((prompt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setText(prompt);
                                    textareaRef.current?.focus();
                                },
                                className: "rounded-full border border-[#e4d9ff] bg-white px-3 py-1.5 text-xs font-medium text-[#5d42d4] transition hover:border-[#cdb8ff] hover:bg-[#f8f4ff]",
                                children: prompt
                            }, prompt, false, {
                                fileName: "[project]/components/chat/InputBar.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/chat/InputBar.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-xs text-[#8f8f95]",
                        children: "Ask a follow-up while this document stays attached, or clear it to start a new topic."
                    }, void 0, false, {
                        fileName: "[project]/components/chat/InputBar.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/InputBar.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end gap-2 rounded-2xl border border-[#e4e4ea] bg-[#fafafa] px-4 py-3 shadow-sm transition focus-within:border-[#c5a6ff] focus-within:ring-2 focus-within:ring-[#c5a6ff]/25",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onUploadSuccess: handleUploadSuccess,
                        disabled: disabled
                    }, void 0, false, {
                        fileName: "[project]/components/chat/InputBar.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$VoiceButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onTranscript: handleTranscript,
                        onError: (message)=>setVoiceError(message),
                        disabled: disabled
                    }, void 0, false, {
                        fileName: "[project]/components/chat/InputBar.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ref: textareaRef,
                        value: text,
                        onChange: (e)=>setText(e.target.value),
                        onKeyDown: handleKeyDown,
                        onInput: handleInput,
                        disabled: disabled,
                        placeholder: uploadedContext ? "Ask about this document…" : "Ask me anything…",
                        rows: 1,
                        className: "max-h-36 min-h-[44px] flex-1 resize-none bg-transparent text-sm leading-relaxed text-[#111] outline-none placeholder:text-[#a8a8b0] disabled:opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/components/chat/InputBar.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleSend,
                        disabled: !text.trim() && !uploadedContext || disabled,
                        className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6f4ef2] text-base font-bold text-white shadow-md transition hover:bg-[#5d42d4] disabled:cursor-not-allowed disabled:opacity-35",
                        "aria-label": "Send message",
                        children: "↑"
                    }, void 0, false, {
                        fileName: "[project]/components/chat/InputBar.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/InputBar.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            voiceError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 px-1 text-xs text-red-500",
                children: voiceError
            }, void 0, false, {
                fileName: "[project]/components/chat/InputBar.tsx",
                lineNumber: 203,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-xs text-[#8f8f95]",
                children: "MedCortex is for educational purposes only — not a substitute for professional medical advice."
            }, void 0, false, {
                fileName: "[project]/components/chat/InputBar.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/InputBar.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
}),
"[project]/hooks/useDoctorRecommendations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveDoctorRecommendationState",
    ()=>resolveDoctorRecommendationState,
    "useDoctorRecommendations",
    ()=>useDoctorRecommendations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function mapPrimaryDoctors(doctors = []) {
    return doctors.map((doctor)=>({
            name: doctor.name,
            address: doctor.address || "Address not available",
            rating: null,
            reviewCount: 0,
            phone: doctor.phone || null,
            mapsUrl: null,
            source: "primary",
            sourceLabel: doctor.source || "Primary recommendation API",
            specialty: doctor.specialty,
            isOpen: null
        }));
}
function dedupeDoctors(doctors) {
    const seen = new Set();
    return doctors.filter((doctor)=>{
        const key = `${doctor.name.toLowerCase()}|${doctor.address.toLowerCase()}`;
        if (seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });
}
function resolveDoctorRecommendationState(primary, places) {
    if (primary.length > 0 || places.length > 0) {
        const ordered = places.length > 0 ? [
            ...places,
            ...primary
        ] : [
            ...primary,
            ...places
        ];
        return {
            doctors: dedupeDoctors(ordered).slice(0, 10),
            source: places.length > 0 ? "places" : "primary",
            error: null
        };
    }
    return {
        doctors: [],
        source: null,
        error: "No doctors found nearby. Try searching manually."
    };
}
function useDoctorRecommendations({ referral, coordinates, primaryDoctors = [] }) {
    const [doctors, setDoctors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!referral) {
            return;
        }
        let cancelled = false;
        const loadDoctors = async ()=>{
            setLoading(true);
            setDoctors([]);
            setSource(null);
            setError(null);
            const primaryPromise = Promise.resolve(mapPrimaryDoctors(primaryDoctors));
            const placesPromise = coordinates ? fetch("/api/doctors/places", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    specialist: referral.specialist,
                    lat: coordinates.lat,
                    lng: coordinates.lng,
                    reason: referral.reason
                })
            }).then(async (response)=>{
                const payload = await response.json();
                if (!response.ok) {
                    throw new Error(payload.error || "Places search failed");
                }
                return (payload.doctors ?? []).map((doctor)=>({
                        ...doctor,
                        source: "places",
                        sourceLabel: "Google Maps",
                        specialty: referral.specialist
                    }));
            }) : Promise.resolve([]);
            const [primaryResult, placesResult] = await Promise.allSettled([
                primaryPromise,
                placesPromise
            ]);
            if (cancelled) {
                return;
            }
            const primary = primaryResult.status === "fulfilled" ? primaryResult.value : [];
            const places = placesResult.status === "fulfilled" ? placesResult.value : [];
            const resolved = resolveDoctorRecommendationState(primary, places);
            setDoctors(resolved.doctors);
            setSource(resolved.source);
            setError(resolved.error);
            setLoading(false);
        };
        void loadDoctors();
        return ()=>{
            cancelled = true;
        };
    }, [
        coordinates,
        primaryDoctors,
        referral
    ]);
    if (!referral) {
        return {
            doctors: [],
            source: null,
            loading: false,
            error: null
        };
    }
    return {
        doctors,
        source,
        loading,
        error
    };
}
}),
"[project]/lib/extractDoctorReferral.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractDoctorReferral",
    ()=>extractDoctorReferral
]);
const REFERRAL_BLOCK_REGEX = /\[DOCTOR_REFERRAL\]([\s\S]*?)\[\/DOCTOR_REFERRAL\]/;
function extractDoctorReferral(text) {
    const match = text.match(REFERRAL_BLOCK_REGEX);
    if (!match) {
        return {
            referral: null,
            cleanText: text
        };
    }
    try {
        const parsed = JSON.parse(match[1].trim());
        if (typeof parsed.specialist !== "string" || typeof parsed.urgency !== "string" || typeof parsed.reason !== "string" || ![
            "routine",
            "soon",
            "urgent"
        ].includes(parsed.urgency)) {
            return {
                referral: null,
                cleanText: text
            };
        }
        const cleanText = text.replace(REFERRAL_BLOCK_REGEX, "").trim();
        return {
            referral: {
                specialist: parsed.specialist,
                urgency: parsed.urgency,
                reason: parsed.reason
            },
            cleanText
        };
    } catch  {
        return {
            referral: null,
            cleanText: text
        };
    }
}
}),
"[project]/components/chat/ResponseCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResponseCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDoctorRecommendations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDoctorRecommendations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$extractDoctorReferral$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/extractDoctorReferral.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const EGYPT_LOCATION_REGEX = /\b(egypt|cairo|giza|alexandria|alexandrie|dakahlia|mansoura|tanta|zagazig|aswan|luxor|sohag|minya|assiut|faiyum|fayoum|ismailia|port said|suez|beni suef|qena|damietta|monufia|menoufia|beheira|kafr el-sheikh|kafr el sheikh|gharbia|sharqia)\b/i;
function buildMapsUrl(name, address) {
    const query = [
        name,
        address
    ].filter(Boolean).join(", ");
    return query ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}` : null;
}
function isEgyptDoctor(address, sourceText) {
    return /egypt/i.test(sourceText) || EGYPT_LOCATION_REGEX.test(address);
}
function mapApiDoctorToDisplay(doctor) {
    const egyptDoctor = isEgyptDoctor(doctor.address, doctor.source);
    return {
        name: doctor.name,
        specialty: doctor.specialty,
        address: doctor.address,
        phone: doctor.phone || null,
        mapsUrl: buildMapsUrl(doctor.name, doctor.address),
        rating: null,
        reviewCount: 0,
        badgeLabel: egyptDoctor ? "Egypt doctor/clinic" : "Foreign doctor",
        badgeTone: egyptDoctor ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-sky-200 bg-sky-50 text-sky-700",
        sourceText: doctor.source,
        reference: doctor.npi ? `Ref: ${doctor.npi.slice(-6)}` : null
    };
}
function mapRecommendedDoctorToDisplay(doctor) {
    const egyptDoctor = doctor.source === "places" || isEgyptDoctor(doctor.address, doctor.sourceLabel);
    return {
        name: doctor.name,
        specialty: doctor.specialty || "Doctor",
        address: doctor.address,
        phone: doctor.phone || null,
        mapsUrl: doctor.mapsUrl ?? buildMapsUrl(doctor.name, doctor.address),
        rating: doctor.rating,
        reviewCount: doctor.reviewCount,
        badgeLabel: egyptDoctor ? "Egypt doctor/clinic" : "Foreign doctor",
        badgeTone: egyptDoctor ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-sky-200 bg-sky-50 text-sky-700",
        sourceText: doctor.source === "places" ? "Google Maps nearby search" : doctor.sourceLabel,
        reference: null
    };
}
function ResponseCard({ data, referral = null, coordinates = null }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("diagnosis");
    const { cleanText: displayAnswer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$extractDoctorReferral$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractDoctorReferral"])(data.answer);
    const doctorState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDoctorRecommendations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDoctorRecommendations"])({
        referral,
        coordinates,
        primaryDoctors: data.doctors
    });
    const doctorsForDisplay = referral ? doctorState.doctors.map(mapRecommendedDoctorToDisplay) : data.doctors.map(mapApiDoctorToDisplay);
    const tabs = [
        {
            key: "diagnosis",
            label: "Diagnosis",
            emoji: "🩺"
        },
        {
            key: "lifestyle",
            label: "Lifestyle",
            emoji: "🥗"
        },
        {
            key: "doctors",
            label: "Doctors",
            emoji: "👨‍⚕️"
        },
        {
            key: "sources",
            label: "Sources",
            emoji: "📚"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full overflow-hidden rounded-2xl border border-[#ebebef] bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex border-b border-[#ebebef] bg-[#fafafa]",
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActiveTab(tab.key),
                        className: `flex-1 py-3 text-sm font-semibold transition ${activeTab === tab.key ? "border-b-2 border-[#6f4ef2] bg-white text-[#6f4ef2]" : "text-[#6b6b76] hover:text-[#111]"}`,
                        children: [
                            tab.emoji,
                            " ",
                            tab.label
                        ]
                    }, tab.key, true, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/chat/ResponseCard.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    activeTab === "diagnosis" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            displayAnswer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-xs font-bold uppercase tracking-widest text-[#7b7b88]",
                                        children: "Clinical response"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ClinicalAnswer, {
                                        text: displayAnswer
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this),
                            data.suspected_conditions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-xs font-bold uppercase tracking-widest text-[#6f4ef2]",
                                        children: "Suspected conditions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: data.suspected_conditions.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-[#e4d9ff] bg-[#f4eeff] px-3 py-1 text-sm font-medium text-[#5d42d4]",
                                                children: c
                                            }, i, false, {
                                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                                lineNumber: 142,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this),
                            data.symptoms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-xs font-bold uppercase tracking-widest text-[#7b7b88]",
                                        children: "Detected symptoms"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: data.symptoms.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-[#ebebef] bg-[#fafafa] px-3 py-1 text-sm text-[#3a3a42]",
                                                children: s
                                            }, i, false, {
                                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                                lineNumber: 160,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "border-t border-[#ebebef] pt-3 text-xs text-[#8f8f95]",
                                children: "For educational purposes only. Not a substitute for professional medical advice."
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    activeTab === "lifestyle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-4 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RecommendationSection, {
                                title: "Foods to Eat",
                                emoji: "✅",
                                tone: "green",
                                items: data.recommendations.foods_to_eat
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RecommendationSection, {
                                title: "Foods to Avoid",
                                emoji: "❌",
                                tone: "rose",
                                items: data.recommendations.foods_to_avoid
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RecommendationSection, {
                                title: "Drinks to Have",
                                emoji: "💧",
                                tone: "sky",
                                items: data.recommendations.drinks_to_have
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RecommendationSection, {
                                title: "Drinks to Avoid",
                                emoji: "🚫",
                                tone: "amber",
                                items: data.recommendations.drinks_to_avoid
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RecommendationSection, {
                                title: "Exercise — Do",
                                emoji: "🏃",
                                tone: "violet",
                                items: data.recommendations.exercises_recommended
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RecommendationSection, {
                                title: "Exercise — Avoid",
                                emoji: "🛑",
                                tone: "rose",
                                items: data.recommendations.exercises_to_avoid
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this),
                            data.recommendations.rest_recommendation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-[#ebebef] bg-[#fafafa] p-4 md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-1 text-xs font-bold uppercase tracking-widest text-[#6f4ef2]",
                                        children: "Rest recommendation"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[#1a1a1a]",
                                        children: data.recommendations.rest_recommendation
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    activeTab === "doctors" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: referral && doctorState.loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-pulse rounded-xl border border-[#ebebef] bg-[#fafafa] p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 w-40 rounded bg-[#ececf2]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 201,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 h-3 w-64 rounded bg-[#ececf2]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 202,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 200,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 199,
                            columnNumber: 15
                        }, this) : doctorsForDisplay.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "py-6 text-center text-sm text-[#8f8f95]",
                            children: referral && doctorState.error ? doctorState.error : "No doctor results available for the detected conditions."
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 206,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                referral && coordinates && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-[#8f8f95]",
                                    children: "Nearby Google Maps results are shown first using your current location, with additional registry matches listed after them when available."
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ResponseCard.tsx",
                                    lineNumber: 214,
                                    columnNumber: 19
                                }, this),
                                doctorsForDisplay.map((doc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DoctorCard, {
                                        doctor: doc
                                    }, i, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 218,
                                        columnNumber: 52
                                    }, this))
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    activeTab === "sources" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: data.sources.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "py-6 text-center text-sm text-[#8f8f95]",
                            children: "No sources available."
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 227,
                            columnNumber: 15
                        }, this) : data.sources.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SourceBadge, {
                                source: s
                            }, i, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 229,
                                columnNumber: 42
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/ResponseCard.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/ResponseCard.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
function ClinicalAnswer({ text }) {
    const blocks = text.split(/\n{2,}/).map((block)=>block.trim()).filter(Boolean).filter((block)=>!block.includes("[DOCTOR_REFERRAL]"));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-none space-y-4 text-sm leading-relaxed text-[#1a1a1a]",
        children: blocks.map((block, blockIndex)=>{
            if (/^-{3,}$/.test(block)) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "border-[#ebebef]"
                }, blockIndex, false, {
                    fileName: "[project]/components/chat/ResponseCard.tsx",
                    lineNumber: 249,
                    columnNumber: 18
                }, this);
            }
            const lines = block.split("\n").map((line)=>line.trim()).filter(Boolean);
            const table = parseMarkdownTable(lines);
            if (table) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MarkdownTable, {
                    table: table
                }, blockIndex, false, {
                    fileName: "[project]/components/chat/ResponseCard.tsx",
                    lineNumber: 255,
                    columnNumber: 18
                }, this);
            }
            const bulletLines = lines.filter((line)=>/^[-*]\s+/.test(line));
            const headingLine = lines[0] ?? "";
            const markdownHeading = headingLine.match(/^(#{1,3})\s+(.+)$/);
            const headingLike = lines.length === 1 && /^(?:[A-Z][A-Z\s&/:-]{4,}|[^.?!:]{2,60}:)$/.test(headingLine);
            if (bulletLines.length > 0 && bulletLines.length === lines.length) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2",
                    children: bulletLines.map((line, lineIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6f4ef2]"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ResponseCard.tsx",
                                    lineNumber: 270,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: renderInlineMarkdown(line.replace(/^[-*]\s+/, ""))
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ResponseCard.tsx",
                                    lineNumber: 271,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, lineIndex, true, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 269,
                            columnNumber: 17
                        }, this))
                }, blockIndex, false, {
                    fileName: "[project]/components/chat/ResponseCard.tsx",
                    lineNumber: 267,
                    columnNumber: 13
                }, this);
            }
            if (markdownHeading) {
                const level = markdownHeading[1].length;
                const headingText = markdownHeading[2];
                const headingClass = level === 1 ? "text-[22px] font-semibold tracking-tight text-[#111]" : level === 2 ? "text-[15px] font-semibold tracking-tight text-[#111]" : "text-xs font-bold uppercase tracking-widest text-[#7b7b88]";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: headingClass,
                            children: renderInlineMarkdown(headingText)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 289,
                            columnNumber: 15
                        }, this),
                        lines.slice(1).map((line, lineIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: renderInlineMarkdown(line)
                            }, lineIndex, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 291,
                                columnNumber: 17
                            }, this))
                    ]
                }, blockIndex, true, {
                    fileName: "[project]/components/chat/ResponseCard.tsx",
                    lineNumber: 288,
                    columnNumber: 13
                }, this);
            }
            if (headingLike && lines[0]) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-bold uppercase tracking-widest text-[#7b7b88]",
                    children: renderInlineMarkdown(lines[0])
                }, blockIndex, false, {
                    fileName: "[project]/components/chat/ResponseCard.tsx",
                    lineNumber: 299,
                    columnNumber: 13
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: lines.map((line, lineIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: renderInlineMarkdown(line)
                    }, lineIndex, false, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 308,
                        columnNumber: 15
                    }, this))
            }, blockIndex, false, {
                fileName: "[project]/components/chat/ResponseCard.tsx",
                lineNumber: 306,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/chat/ResponseCard.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, this);
}
function renderInlineMarkdown(text) {
    const nodes = [];
    const boldPattern = /\*\*(.+?)\*\*/g;
    let cursor = 0;
    let match;
    while((match = boldPattern.exec(text)) !== null){
        const [fullMatch, boldText] = match;
        if (match.index > cursor) {
            nodes.push(text.slice(cursor, match.index));
        }
        nodes.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: boldText
        }, `${match.index}-${fullMatch}`, false, {
            fileName: "[project]/components/chat/ResponseCard.tsx",
            lineNumber: 328,
            columnNumber: 16
        }, this));
        cursor = match.index + fullMatch.length;
    }
    if (cursor < text.length) {
        nodes.push(text.slice(cursor));
    }
    return nodes.length > 0 ? nodes : text;
}
function parseMarkdownTable(lines) {
    if (lines.length < 2) return null;
    if (!lines.every((line)=>line.startsWith("|") && line.endsWith("|"))) return null;
    const normalized = lines.map((line)=>line.slice(1, -1).split("|").map((cell)=>cell.trim()));
    if (normalized.length < 2) return null;
    const [headers, separator, ...rows] = normalized;
    if (!separator.every((cell)=>/^:?-{3,}:?$/.test(cell))) return null;
    if (!headers.length || !rows.length) return null;
    return {
        headers,
        rows
    };
}
function MarkdownTable({ table }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border border-[#ebebef] bg-white shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "min-w-full border-collapse text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "bg-[#fafafa]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: table.headers.map((header, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border-b border-[#ebebef] px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-[#7b7b88]",
                                    children: renderInlineMarkdown(header)
                                }, i, false, {
                                    fileName: "[project]/components/chat/ResponseCard.tsx",
                                    lineNumber: 371,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 369,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 368,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: table.rows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "odd:bg-white even:bg-[#fcfcfd]",
                                children: table.headers.map((_, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border-b border-[#f1f1f4] px-4 py-3 align-top text-[#1a1a1a]",
                                        children: renderInlineMarkdown(row[colIndex] ?? "")
                                    }, colIndex, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 384,
                                        columnNumber: 19
                                    }, this))
                            }, rowIndex, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 382,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 380,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/ResponseCard.tsx",
                lineNumber: 367,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/chat/ResponseCard.tsx",
            lineNumber: 366,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chat/ResponseCard.tsx",
        lineNumber: 365,
        columnNumber: 5
    }, this);
}
const toneClass = {
    green: "border-emerald-200 bg-emerald-50 text-emerald-900",
    rose: "border-rose-200 bg-rose-50 text-rose-900",
    sky: "border-sky-200 bg-sky-50 text-sky-900",
    amber: "border-amber-200 bg-amber-50 text-amber-900",
    violet: "border-violet-200 bg-violet-50 text-violet-900"
};
function RecommendationSection({ title, emoji, tone, items }) {
    if (!items?.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-xl border p-4 ${toneClass[tone]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-2 text-xs font-bold uppercase tracking-widest opacity-80",
                children: [
                    emoji,
                    " ",
                    title
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/ResponseCard.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-1",
                children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-start gap-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 text-xs opacity-60",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 427,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 428,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 426,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/chat/ResponseCard.tsx",
                lineNumber: 424,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/ResponseCard.tsx",
        lineNumber: 420,
        columnNumber: 5
    }, this);
}
function DoctorCard({ doctor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-[#ebebef] bg-[#fafafa] p-4 transition hover:border-[#d9c5ff]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-[#111]",
                            children: doctor.name
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 441,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[#6f4ef2]",
                            children: doctor.specialty
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-[#6b6b76]",
                            children: doctor.address
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this),
                        doctor.phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-[#6b6b76]",
                            children: doctor.phone
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 444,
                            columnNumber: 27
                        }, this) : null,
                        doctor.rating !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-[#6b6b76]",
                            children: [
                                "⭐ ",
                                doctor.rating.toFixed(1),
                                " (",
                                doctor.reviewCount,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 446,
                            columnNumber: 13
                        }, this) : null,
                        doctor.mapsUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: doctor.mapsUrl,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "mt-2 inline-block text-xs font-medium text-[#6f4ef2] hover:underline",
                            children: "View on Maps"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 451,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/ResponseCard.tsx",
                    lineNumber: 440,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "shrink-0 text-right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `rounded-full border px-2 py-1 text-xs font-medium ${doctor.badgeTone}`,
                            children: doctor.badgeLabel
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 462,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-[#8f8f95]",
                            children: doctor.sourceText
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 465,
                            columnNumber: 11
                        }, this),
                        doctor.reference ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-[11px] text-[#b09adf]",
                            children: doctor.reference
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 467,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/ResponseCard.tsx",
                    lineNumber: 461,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/chat/ResponseCard.tsx",
            lineNumber: 439,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chat/ResponseCard.tsx",
        lineNumber: 438,
        columnNumber: 5
    }, this);
}
function SourceBadge({ source }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 rounded-xl border border-[#ebebef] bg-[#fafafa] p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-lg",
                children: "📘"
            }, void 0, false, {
                fileName: "[project]/components/chat/ResponseCard.tsx",
                lineNumber: 478,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-[#111]",
                        children: source.book
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 480,
                        columnNumber: 9
                    }, this),
                    source.section && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-[#6b6b76]",
                        children: source.section
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 481,
                        columnNumber: 28
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/ResponseCard.tsx",
                lineNumber: 479,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/ResponseCard.tsx",
        lineNumber: 477,
        columnNumber: 5
    }, this);
}
}),
"[project]/hooks/useUserLocation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserLocation",
    ()=>useUserLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useUserLocation() {
    const [coordinates, setCoordinates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [locationAvailable, setLocationAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
    }, []);
    return {
        coordinates,
        locationAvailable
    };
}
}),
"[project]/components/chat/ChatBox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$MessageBubble$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/MessageBubble.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$InputBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/InputBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ResponseCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/ResponseCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/chat.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useUserLocation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$extractDoctorReferral$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/extractDoctorReferral.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function ChatBox({ threadId, threadTitle, messages, firstName, onCommitMessages, onFirstUserMessageTitle, onExportPdf, onExportVisitNotes }) {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { coordinates } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserLocation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages,
        isLoading,
        threadId
    ]);
    const handleSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (text, context)=>{
        if (!text.trim() && !context || isLoading) return;
        setError(null);
        const wasEmpty = messages.length === 0;
        if (wasEmpty) {
            onFirstUserMessageTitle(threadId, text.trim() || "Document Upload");
        }
        const userMsg = {
            id: crypto.randomUUID(),
            role: "user",
            content: text.trim() || "Analyzed medical document.",
            timestamp: new Date()
        };
        const withUser = [
            ...messages,
            userMsg
        ];
        onCommitMessages(threadId, withUser);
        setIsLoading(true);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendMessage"])(text.trim() || "Analyzed medical document.", context);
            const { referral, cleanText } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$extractDoctorReferral$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractDoctorReferral"])(response.answer);
            const assistantMsg = {
                id: crypto.randomUUID(),
                role: "assistant",
                content: cleanText,
                data: {
                    ...response,
                    answer: cleanText
                },
                doctorReferral: referral,
                timestamp: new Date()
            };
            onCommitMessages(threadId, [
                ...withUser,
                assistantMsg
            ]);
        } catch (err) {
            const message = err?.response?.data?.detail ?? "Something went wrong. Please try again.";
            setError(message);
        // Keep the user message visible so they can edit and retry.
        } finally{
            setIsLoading(false);
        }
    }, [
        isLoading,
        messages,
        onCommitMessages,
        onFirstUserMessageTitle,
        threadId
    ]);
    const empty = messages.length === 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full min-h-0 flex-col bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex shrink-0 items-center justify-between gap-3 border-b border-[#ebebef] px-5 py-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-[#f4eeff] text-sm text-[#6f4ef2]",
                                children: "✦"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ChatBox.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block truncate text-lg font-medium tracking-tight text-[#111]",
                                        children: messages.length > 0 ? threadTitle : "MedCortex"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ChatBox.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    messages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[#8f8f95]",
                                        children: "Conversation exports ready"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ChatBox.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ChatBox.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/ChatBox.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    messages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onExportVisitNotes,
                                className: "inline-flex items-center gap-2 rounded-xl border border-[#e8e1fb] bg-[#faf7ff] px-3 py-2 text-xs font-medium text-[#6f4ef2] transition hover:bg-[#f4eeff]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "h-4 w-4",
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ChatBox.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    "Visit Notes"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ChatBox.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onExportPdf,
                                className: "inline-flex items-center gap-2 rounded-xl border border-[#ebebef] bg-white px-3 py-2 text-xs font-medium text-[#3a3a42] transition hover:border-[#d8cdf6] hover:text-[#6f4ef2]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "h-4 w-4",
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ChatBox.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    "Export PDF"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ChatBox.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/ChatBox.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/ChatBox.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative min-h-0 flex-1 overflow-y-auto",
                children: empty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-[calc(100%-1rem)] flex-col items-center justify-center px-6 pb-32 pt-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_35%_30%,#faf5ff_0%,#e9dfff_28%,#d9c5ff_52%,#c5a6ff_72%,rgba(197,166,255,0.15)_100%)] shadow-[0_20px_60px_rgba(111,78,242,0.22)]",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatBox.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-lg font-medium text-[#6f4ef2]",
                            children: [
                                "Hello, ",
                                firstName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat/ChatBox.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-1 text-center text-3xl font-semibold tracking-tight text-[#111] sm:text-4xl",
                            children: "How are you feeling today?"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatBox.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 max-w-md text-center text-sm text-[#6b6b76]",
                            children: "Describe your symptoms or health questions below. Your conversations are saved in History so you can pick them up anytime."
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatBox.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/ChatBox.tsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5 px-4 py-6 md:px-8",
                    children: [
                        messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AssistantMessageGroup, {
                                message: msg,
                                coordinates: coordinates
                            }, msg.id, false, {
                                fileName: "[project]/components/chat/ChatBox.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this)),
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4eeff] text-sm text-[#6f4ef2]",
                                    children: "✦"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatBox.tsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 rounded-2xl border border-[#ebebef] bg-[#fafafa] px-4 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 animate-bounce rounded-full bg-[#ae84ff] [animation-delay:0ms]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/ChatBox.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 animate-bounce rounded-full bg-[#ae84ff] [animation-delay:150ms]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/ChatBox.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 animate-bounce rounded-full bg-[#ae84ff] [animation-delay:300ms]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/ChatBox.tsx",
                                            lineNumber: 168,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 text-xs text-[#8f8f95]",
                                            children: "Analysing…"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/ChatBox.tsx",
                                            lineNumber: 169,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/chat/ChatBox.tsx",
                                    lineNumber: 165,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat/ChatBox.tsx",
                            lineNumber: 161,
                            columnNumber: 15
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatBox.tsx",
                            lineNumber: 175,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: bottomRef
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatBox.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/ChatBox.tsx",
                    lineNumber: 155,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatBox.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 border-t border-[#ebebef] bg-white px-4 pb-4 pt-3 md:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$InputBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onSend: handleSend,
                    disabled: isLoading
                }, void 0, false, {
                    fileName: "[project]/components/chat/ChatBox.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatBox.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/ChatBox.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
function AssistantMessageGroup({ message, coordinates }) {
    if (message.role !== "assistant") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$MessageBubble$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            message: message
        }, void 0, false, {
            fileName: "[project]/components/chat/ChatBox.tsx",
            lineNumber: 200,
            columnNumber: 12
        }, this);
    }
    if (message.data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:ml-11",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ResponseCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                data: message.data,
                referral: message.doctorReferral ?? null,
                coordinates: coordinates
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatBox.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/chat/ChatBox.tsx",
            lineNumber: 205,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$MessageBubble$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        message: message
    }, void 0, false, {
        fileName: "[project]/components/chat/ChatBox.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/chat/Dashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-ssr] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.js [app-ssr] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
"use client";
;
;
;
// ─────────────────────────────────────────────────────────────────────────────
// Analytics helpers
// ─────────────────────────────────────────────────────────────────────────────
function frequencyMap(items) {
    const map = {};
    items.forEach((item)=>{
        const key = item.trim();
        if (key) map[key] = (map[key] ?? 0) + 1;
    });
    return map;
}
function unique(items) {
    return [
        ...new Set(items.filter(Boolean))
    ];
}
function topEntries(freq, n) {
    return Object.entries(freq).sort((a, b)=>b[1] - a[1]).slice(0, n);
}
function useAnalytics(threads, referenceTime) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const DAY_MS = 86_400_000;
        const WINDOW = 30;
        const allSymptoms = [];
        const allConditions = [];
        const allFoods = [];
        const allFoodsAvoid = [];
        const allExercises = [];
        const allRest = [];
        const activityByDay = new Array(WINDOW).fill(0);
        for (const thread of threads){
            for (const msg of thread.messages){
                const ts = new Date(msg.timestamp).getTime();
                const daysAgo = Math.floor((referenceTime - ts) / DAY_MS);
                if (msg.role === "user") {
                    if (daysAgo >= 0 && daysAgo < WINDOW) {
                        activityByDay[WINDOW - 1 - daysAgo]++;
                    }
                }
                if (msg.role === "assistant" && msg.data) {
                    allSymptoms.push(...msg.data.symptoms);
                    allConditions.push(...msg.data.suspected_conditions);
                    allFoods.push(...msg.data.recommendations.foods_to_eat);
                    allFoodsAvoid.push(...msg.data.recommendations.foods_to_avoid);
                    allExercises.push(...msg.data.recommendations.exercises_recommended);
                    if (msg.data.recommendations.rest_recommendation) {
                        allRest.push(msg.data.recommendations.rest_recommendation);
                    }
                }
            }
        }
        const symptomFreq = frequencyMap(allSymptoms);
        const conditionFreq = frequencyMap(allConditions);
        const foodFreq = frequencyMap(allFoods);
        const exerciseFreq = frequencyMap(allExercises);
        const topSymptoms = topEntries(symptomFreq, 10);
        const topConditions = topEntries(conditionFreq, 20);
        const topFoods = topEntries(foodFreq, 6).map(([f])=>f);
        const topExercises = topEntries(exerciseFreq, 5).map(([e])=>e);
        const totalSessions = threads.filter((t)=>t.messages.length > 0).length;
        const uniqueSymptoms = Object.keys(symptomFreq).length;
        const uniqueConditions = Object.keys(conditionFreq).length;
        const daysActive = activityByDay.filter((d)=>d > 0).length;
        const recentThreads = [
            ...threads
        ].filter((t)=>t.messages.length > 0).sort((a, b)=>b.updatedAt - a.updatedAt).slice(0, 5).map((t)=>{
            const topCond = t.messages.filter((m)=>m.role === "assistant" && m.data).flatMap((m)=>m.data.suspected_conditions).at(0) ?? null;
            return {
                ...t,
                topCond
            };
        });
        const latestRest = allRest.at(-1) ?? null;
        return {
            topSymptoms,
            topConditions,
            activityByDay,
            totalSessions,
            uniqueSymptoms,
            uniqueConditions,
            daysActive,
            topFoods,
            topExercises,
            latestRest,
            recentThreads
        };
    }, [
        referenceTime,
        threads
    ]);
}
// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────
function StatCard({ icon: Icon, label, value, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 rounded-2xl border border-[#ebebef] bg-white p-4 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${color}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "h-5 w-5",
                    strokeWidth: 2
                }, void 0, false, {
                    fileName: "[project]/components/chat/Dashboard.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/Dashboard.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl font-bold text-[#111]",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-[#8f8f95]",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/Dashboard.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/Dashboard.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
// ── Horizontal bar chart (pure SVG) ──────────────────────────────────────────
function SymptomBarChart({ data }) {
    if (data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
            text: "No symptoms recorded yet. Start a chat to see your data."
        }, void 0, false, {
            fileName: "[project]/components/chat/Dashboard.tsx",
            lineNumber: 168,
            columnNumber: 7
        }, this);
    }
    const max = data[0][1];
    const BAR_H = 24;
    const GAP = 10;
    const LABEL_W = 160;
    const BAR_AREA = 200;
    const TOTAL_W = LABEL_W + BAR_AREA + 40;
    const height = data.length * (BAR_H + GAP) - GAP + 4;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${TOTAL_W} ${height}`,
        className: "w-full overflow-visible",
        "aria-label": "Symptom frequency chart",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "barGrad",
                    x1: "0",
                    x2: "1",
                    y1: "0",
                    y2: "0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: "#ae84ff"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/Dashboard.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: "#6f4ef2"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/Dashboard.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/Dashboard.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/Dashboard.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            data.map(([symptom, count], i)=>{
                const y = i * (BAR_H + GAP);
                const barW = Math.max(8, count / max * BAR_AREA);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: LABEL_W - 8,
                            y: y + BAR_H / 2 + 5,
                            textAnchor: "end",
                            fontSize: 12,
                            fill: "#3a3a42",
                            className: "font-sans",
                            children: symptom.length > 22 ? symptom.slice(0, 21) + "…" : symptom
                        }, void 0, false, {
                            fileName: "[project]/components/chat/Dashboard.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: LABEL_W,
                            y: y,
                            width: barW,
                            height: BAR_H,
                            rx: 6,
                            fill: "url(#barGrad)",
                            opacity: 0.85 - i * 0.06
                        }, void 0, false, {
                            fileName: "[project]/components/chat/Dashboard.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: LABEL_W + barW + 6,
                            y: y + BAR_H / 2 + 5,
                            fontSize: 11,
                            fill: "#8f8f95",
                            children: [
                                count,
                                "×"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat/Dashboard.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this)
                    ]
                }, symptom, true, {
                    fileName: "[project]/components/chat/Dashboard.tsx",
                    lineNumber: 196,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/Dashboard.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
// ── Activity sparkline ────────────────────────────────────────────────────────
function ActivitySparkline({ data, referenceTime }) {
    const max = Math.max(...data, 1);
    const W = 560;
    const H = 72;
    const PAD = 8;
    const pts = data.map((v, i)=>{
        const x = PAD + i / (data.length - 1) * (W - PAD * 2);
        const y = H - PAD - v / max * (H - PAD * 2 - 4);
        return [
            x,
            y
        ];
    });
    const lineD = pts.map((p, i)=>`${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ");
    const areaD = lineD + ` L${pts[pts.length - 1][0]},${H - PAD} L${pts[0][0]},${H - PAD} Z`;
    // Week labels (every 7 days)
    const weekLabels = [
        0,
        7,
        14,
        21,
        27
    ].map((i)=>{
        const d = new Date(referenceTime - (29 - i) * 86_400_000);
        return {
            x: PAD + i / 29 * (W - PAD * 2),
            label: d.toLocaleDateString("en", {
                month: "short",
                day: "numeric"
            })
        };
    });
    const hasData = data.some((d)=>d > 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: !hasData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            text: "No activity in the last 30 days."
        }, void 0, false, {
            fileName: "[project]/components/chat/Dashboard.tsx",
            lineNumber: 269,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: `0 0 ${W} ${H + 20}`,
            className: "w-full",
            "aria-label": "Daily activity over the last 30 days",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "areaGrad",
                        x1: "0",
                        x2: "0",
                        y1: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#ae84ff",
                                stopOpacity: 0.35
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 278,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#ae84ff",
                                stopOpacity: 0.0
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 279,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 277,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/chat/Dashboard.tsx",
                    lineNumber: 276,
                    columnNumber: 11
                }, this),
                [
                    0,
                    0.5,
                    1
                ].map((frac)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: PAD,
                        x2: W - PAD,
                        y1: H - PAD - frac * (H - PAD * 2 - 4),
                        y2: H - PAD - frac * (H - PAD * 2 - 4),
                        stroke: "#ebebef",
                        strokeWidth: 1
                    }, frac, false, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 284,
                        columnNumber: 13
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: areaD,
                    fill: "url(#areaGrad)"
                }, void 0, false, {
                    fileName: "[project]/components/chat/Dashboard.tsx",
                    lineNumber: 295,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: lineD,
                    fill: "none",
                    stroke: "#6f4ef2",
                    strokeWidth: 2.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/chat/Dashboard.tsx",
                    lineNumber: 297,
                    columnNumber: 11
                }, this),
                pts.map((p, i)=>data[i] > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: p[0],
                        cy: p[1],
                        r: 3.5,
                        fill: "white",
                        stroke: "#6f4ef2",
                        strokeWidth: 2
                    }, i, false, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 308,
                        columnNumber: 15
                    }, this) : null),
                weekLabels.map((wl)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: wl.x,
                        y: H + 18,
                        textAnchor: "middle",
                        fontSize: 10,
                        fill: "#a0a0aa",
                        children: wl.label
                    }, wl.label, false, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 321,
                        columnNumber: 13
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/components/chat/Dashboard.tsx",
            lineNumber: 271,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chat/Dashboard.tsx",
        lineNumber: 267,
        columnNumber: 5
    }, this);
}
// ── Condition tag cloud ───────────────────────────────────────────────────────
function ConditionCloud({ data }) {
    if (data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
            text: "No conditions detected yet."
        }, void 0, false, {
            fileName: "[project]/components/chat/Dashboard.tsx",
            lineNumber: 342,
            columnNumber: 7
        }, this);
    }
    const max = data[0][1];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-2",
        children: data.map(([cond, count])=>{
            const weight = count / max;
            const size = 11 + Math.round(weight * 10);
            const opacity = 0.55 + weight * 0.45;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: size,
                    opacity
                },
                className: "rounded-full border border-[#d9c5ff] bg-[#f4eeff] px-3 py-1 font-medium text-[#5d42d4]",
                children: [
                    cond,
                    count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-1 text-[10px] text-[#ae84ff]",
                        children: [
                            "×",
                            count
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 360,
                        columnNumber: 15
                    }, this)
                ]
            }, cond, true, {
                fileName: "[project]/components/chat/Dashboard.tsx",
                lineNumber: 353,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/chat/Dashboard.tsx",
        lineNumber: 347,
        columnNumber: 5
    }, this);
}
// ── Empty state ───────────────────────────────────────────────────────────────
function EmptyState({ icon: Icon, text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center gap-2 py-8 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "h-8 w-8 text-[#d9c5ff]",
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/components/chat/Dashboard.tsx",
                lineNumber: 379,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-xs text-sm text-[#8f8f95]",
                children: text
            }, void 0, false, {
                fileName: "[project]/components/chat/Dashboard.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/Dashboard.tsx",
        lineNumber: 378,
        columnNumber: 5
    }, this);
}
// ── Activity level pill ───────────────────────────────────────────────────────
const activityColor = {
    low: "bg-amber-100 text-amber-700 border-amber-200",
    medium: "bg-sky-100 text-sky-700 border-sky-200",
    high: "bg-emerald-100 text-emerald-700 border-emerald-200"
};
function Pill({ label, subtle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `rounded-full border px-3 py-1 text-sm font-medium ${subtle ? "border-[#e4d9ff] bg-[#f4eeff] text-[#5d42d4]" : "border-[#ebebef] bg-[#fafafa] text-[#3a3a42]"}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/components/chat/Dashboard.tsx",
        lineNumber: 394,
        columnNumber: 5
    }, this);
}
function buildTimelineEntries(threads) {
    const sorted = [
        ...threads
    ].filter((thread)=>thread.messages.length > 0).sort((a, b)=>a.updatedAt - b.updatedAt);
    const entries = [];
    let previousSymptoms = new Set();
    let previousConditions = new Set();
    let previousRecommendations = new Set();
    for (const thread of sorted){
        const assistantResponses = thread.messages.filter((message)=>message.role === "assistant" && message.data);
        const latest = assistantResponses.at(-1)?.data;
        if (!latest) continue;
        const symptoms = unique(latest.symptoms);
        const conditions = unique(latest.suspected_conditions);
        const recommendationHighlights = unique([
            ...latest.recommendations.foods_to_eat,
            ...latest.recommendations.exercises_recommended,
            latest.recommendations.rest_recommendation
        ]);
        const symptomSet = new Set(symptoms);
        const conditionSet = new Set(conditions);
        const recommendationSet = new Set(recommendationHighlights);
        entries.push({
            id: thread.id,
            title: thread.title,
            updatedAt: thread.updatedAt,
            symptoms,
            conditions,
            recommendationHighlights,
            newSymptoms: symptoms.filter((item)=>!previousSymptoms.has(item)),
            newConditions: conditions.filter((item)=>!previousConditions.has(item)),
            newRecommendations: recommendationHighlights.filter((item)=>!previousRecommendations.has(item)),
            summary: latest.answer
        });
        previousSymptoms = symptomSet;
        previousConditions = conditionSet;
        previousRecommendations = recommendationSet;
    }
    return entries.reverse();
}
function Dashboard({ user, threads }) {
    const [referenceTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>Date.now());
    const analytics = useAnalytics(threads, referenceTime);
    const timelineEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildTimelineEntries(threads), [
        threads
    ]);
    const avatarLetter = (user?.name?.trim()?.[0] ?? user?.email?.[0] ?? "?").toUpperCase();
    const allergiesList = user?.allergies?.split(",").map((s)=>s.trim()).filter(Boolean) ?? [];
    const conditionsList = user?.conditions?.split(",").map((s)=>s.trim()).filter(Boolean) ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full overflow-y-auto bg-[#fafafa]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden border-b border-[#ebebef] bg-white px-6 py-8 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-30",
                        style: {
                            background: "radial-gradient(circle, #c5a6ff 0%, #a07be0 40%, transparent 70%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 501,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c5a6ff] to-[#6f4ef2] text-3xl font-bold text-white shadow-[0_8px_24px_rgba(111,78,242,0.35)]",
                                children: avatarLetter
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 511,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl font-semibold tracking-tight text-[#111]",
                                                children: [
                                                    user?.name?.trim() || "Your",
                                                    " — Health Dashboard"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 516,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-[#e4d9ff] bg-[#f4eeff] px-2.5 py-0.5 text-xs font-semibold text-[#6f4ef2]",
                                                children: "✦ MedCortex"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 519,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 515,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-sm text-[#8f8f95]",
                                        children: user?.email
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 523,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap gap-2",
                                        children: [
                                            user?.age && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-[#ebebef] bg-[#fafafa] px-3 py-1 text-xs text-[#3a3a42]",
                                                children: [
                                                    "Age ",
                                                    user.age
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 526,
                                                columnNumber: 17
                                            }, this),
                                            user?.gender && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-[#ebebef] bg-[#fafafa] px-3 py-1 text-xs capitalize text-[#3a3a42]",
                                                children: user.gender
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 531,
                                                columnNumber: 17
                                            }, this),
                                            user?.activity_level && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `rounded-full border px-3 py-1 text-xs font-medium capitalize ${activityColor[user.activity_level] ?? "border-[#ebebef] bg-[#fafafa] text-[#3a3a42]"}`,
                                                children: [
                                                    user.activity_level,
                                                    " activity"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 536,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 524,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 514,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 509,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/Dashboard.tsx",
                lineNumber: 499,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 py-6 md:px-8 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3 md:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                                label: "Chat Sessions",
                                value: analytics.totalSessions,
                                color: "bg-[#f4eeff] text-[#6f4ef2]"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 553,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                                label: "Unique Symptoms",
                                value: analytics.uniqueSymptoms,
                                color: "bg-rose-50 text-rose-500"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 559,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
                                label: "Conditions Flagged",
                                value: analytics.uniqueConditions,
                                color: "bg-sky-50 text-sky-500"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 565,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                                label: "Days Active",
                                value: analytics.daysActive,
                                color: "bg-emerald-50 text-emerald-500"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 571,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 552,
                        columnNumber: 9
                    }, this),
                    (allergiesList.length > 0 || conditionsList.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-[#ebebef] bg-white p-5 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#6f4ef2]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "h-4 w-4",
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 583,
                                        columnNumber: 15
                                    }, this),
                                    "Health Profile"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 582,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    allergiesList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-1.5 text-xs font-medium uppercase tracking-wider text-[#8f8f95]",
                                                children: "Allergies"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 589,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: allergiesList.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                                        label: a,
                                                        subtle: true
                                                    }, a, false, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 592,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 588,
                                        columnNumber: 17
                                    }, this),
                                    conditionsList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-1.5 text-xs font-medium uppercase tracking-wider text-[#8f8f95]",
                                                children: "Known Conditions"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 601,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: conditionsList.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                                        label: c
                                                    }, c, false, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 606,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 604,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 600,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 586,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 581,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-3 rounded-2xl border border-[#ebebef] bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#6f4ef2]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                className: "h-4 w-4",
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 620,
                                                columnNumber: 15
                                            }, this),
                                            "Top Reported Symptoms"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 619,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SymptomBarChart, {
                                        data: analytics.topSymptoms
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 623,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 618,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2 rounded-2xl border border-[#ebebef] bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#6f4ef2]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
                                                className: "h-4 w-4",
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 629,
                                                columnNumber: 15
                                            }, this),
                                            "Suspected Conditions"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 628,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ConditionCloud, {
                                        data: analytics.topConditions
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 632,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 627,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 616,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-[#ebebef] bg-white p-5 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#6f4ef2]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                className: "h-4 w-4",
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 640,
                                                columnNumber: 15
                                            }, this),
                                            "Activity — Last 30 Days"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 639,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[#8f8f95]",
                                        children: "messages sent per day"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 643,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 638,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivitySparkline, {
                                data: analytics.activityByDay,
                                referenceTime: referenceTime
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 645,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 637,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-[#ebebef] bg-white p-5 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5 flex items-center justify-between gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#6f4ef2]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "h-4 w-4",
                                                    strokeWidth: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/Dashboard.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 17
                                                }, this),
                                                "Patient Timeline"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/chat/Dashboard.tsx",
                                            lineNumber: 651,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-[#8f8f95]",
                                            children: "Session-by-session changes in symptoms, flagged conditions, and recommendations."
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/Dashboard.tsx",
                                            lineNumber: 655,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/chat/Dashboard.tsx",
                                    lineNumber: 650,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 649,
                                columnNumber: 11
                            }, this),
                            timelineEntries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                                text: "No clinical timeline yet. Start a few conversations and your progression will appear here."
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 661,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: timelineEntries.slice(0, 6).map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex w-6 flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1 h-3 w-3 rounded-full bg-[#a98cff]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 21
                                                    }, this),
                                                    index < timelineEntries.slice(0, 6).length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-2 h-full w-px bg-[#e9e2fb]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 672,
                                                        columnNumber: 23
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 669,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1 rounded-2xl border border-[#f0ebfa] bg-[#fcfbff] p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-3 md:flex-row md:items-start md:justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "truncate text-sm font-semibold text-[#111]",
                                                                        children: entry.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                                        lineNumber: 678,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-[#8f8f95]",
                                                                        children: new Date(entry.updatedAt).toLocaleDateString("en", {
                                                                            month: "short",
                                                                            day: "numeric",
                                                                            year: "numeric"
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                                        lineNumber: 679,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                                lineNumber: 677,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: [
                                                                    entry.newSymptoms.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700",
                                                                        children: [
                                                                            entry.newSymptoms.length,
                                                                            " new symptom",
                                                                            entry.newSymptoms.length !== 1 && "s"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                                        lineNumber: 689,
                                                                        columnNumber: 27
                                                                    }, this) : null,
                                                                    entry.newConditions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700",
                                                                        children: [
                                                                            entry.newConditions.length,
                                                                            " new condition flag"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                                        lineNumber: 694,
                                                                        columnNumber: 27
                                                                    }, this) : null,
                                                                    entry.newRecommendations.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700",
                                                                        children: "care plan updated"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                                        lineNumber: 699,
                                                                        columnNumber: 27
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                                lineNumber: 687,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 676,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 text-sm leading-relaxed text-[#4a4654]",
                                                        children: entry.summary
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 705,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 grid gap-3 md:grid-cols-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#9c90b8]",
                                                                        children: "Symptoms"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                                        lineNumber: 710,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2",
                                                                        children: entry.symptoms.slice(0, 4).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                                                                label: item
                                                                            }, item, false, {
                                                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                                                lineNumber: 715,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                                        lineNumber: 713,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                                lineNumber: 709,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#9c90b8]",
                                                                        children: "Conditions"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                                        lineNumber: 720,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2",
                                                                        children: entry.conditions.slice(0, 4).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                                                                label: item,
                                                                                subtle: true
                                                                            }, item, false, {
                                                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                                                lineNumber: 725,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                                        lineNumber: 723,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                                lineNumber: 719,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#9c90b8]",
                                                                        children: "Recommendation changes"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                                        lineNumber: 730,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2",
                                                                        children: [
                                                                            entry.newRecommendations.slice(0, 3).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700",
                                                                                    children: item
                                                                                }, item, false, {
                                                                                    fileName: "[project]/components/chat/Dashboard.tsx",
                                                                                    lineNumber: 735,
                                                                                    columnNumber: 29
                                                                                }, this)),
                                                                            entry.newRecommendations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs text-[#a8a0b8]",
                                                                                children: "No major change noted."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                                                lineNumber: 743,
                                                                                columnNumber: 29
                                                                            }, this) : null
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                                        lineNumber: 733,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                                lineNumber: 729,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 675,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, entry.id, true, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 668,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 666,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 648,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-[#ebebef] bg-white p-5 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#6f4ef2]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: "h-4 w-4",
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 758,
                                        columnNumber: 13
                                    }, this),
                                    "Wellness Recommendations (aggregated)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 757,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-emerald-200 bg-emerald-50 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                        className: "h-3.5 w-3.5",
                                                        strokeWidth: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 765,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Recommended Foods"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 764,
                                                columnNumber: 15
                                            }, this),
                                            analytics.topFoods.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-1",
                                                children: analytics.topFoods.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start gap-1.5 text-sm text-emerald-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 text-xs opacity-60",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                                lineNumber: 775,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: f
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                                lineNumber: 776,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, f, true, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 771,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 769,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-emerald-600 opacity-70",
                                                children: "No data yet — start chatting!"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 781,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 763,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-violet-200 bg-violet-50 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-violet-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                        className: "h-3.5 w-3.5",
                                                        strokeWidth: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 790,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Recommended Exercises"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 789,
                                                columnNumber: 15
                                            }, this),
                                            analytics.topExercises.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-1",
                                                children: analytics.topExercises.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start gap-1.5 text-sm text-violet-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 text-xs opacity-60",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                                lineNumber: 800,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: e
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                                lineNumber: 801,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, e, true, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 796,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 794,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-violet-600 opacity-70",
                                                children: "No exercise recommendations yet."
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 806,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 788,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-sky-200 bg-sky-50 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-sky-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                        className: "h-3.5 w-3.5",
                                                        strokeWidth: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 815,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Rest Recommendation"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 814,
                                                columnNumber: 15
                                            }, this),
                                            analytics.latestRest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm leading-relaxed text-sky-800",
                                                children: analytics.latestRest
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 819,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-sky-600 opacity-70",
                                                children: "No rest recommendations yet."
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 823,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 813,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 761,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 756,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-[#ebebef] bg-white p-5 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#6f4ef2]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                        className: "h-4 w-4",
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 834,
                                        columnNumber: 13
                                    }, this),
                                    "Recent Chat Sessions"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 833,
                                columnNumber: 11
                            }, this),
                            analytics.recentThreads.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                                text: "No sessions yet. Start a conversation to track your health journey."
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 838,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-[#ebebef]",
                                children: analytics.recentThreads.map((t)=>{
                                    const date = new Date(t.updatedAt).toLocaleDateString("en", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric"
                                    });
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "truncate text-sm font-medium text-[#111]",
                                                        children: t.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 23
                                                    }, this),
                                                    t.topCond && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-0.5 truncate text-xs text-[#8f8f95]",
                                                        children: t.topCond
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 860,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 855,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "shrink-0 text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-[#a8a8b0]",
                                                        children: date
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 866,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-[#c5a6ff]",
                                                        children: [
                                                            t.messages.length,
                                                            " msg",
                                                            t.messages.length !== 1 && "s"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 867,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 865,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, t.id, true, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 851,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 843,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 832,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pb-4 text-center text-[11px] text-[#b4b4bc]",
                        children: "MedCortex Dashboard — for informational purposes only. Not a substitute for professional medical advice."
                    }, void 0, false, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 879,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/Dashboard.tsx",
                lineNumber: 550,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/Dashboard.tsx",
        lineNumber: 497,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/chat/ChatWorkspace.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left-close.js [app-ssr] (ecmascript) <export default as PanelLeftClose>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-ssr] (ecmascript) <export default as PanelLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chat$2d$export$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/chat-export.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chat$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/chat-storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/ChatBox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$Dashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/Dashboard.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const DRAFT_THREAD_ID = "__draft__";
const DRAFT_THREAD = {
    id: DRAFT_THREAD_ID,
    title: "New chat",
    messages: [],
    updatedAt: 0
};
function newThread() {
    const id = crypto.randomUUID();
    return {
        id,
        title: "New chat",
        messages: [],
        updatedAt: Date.now(),
        pinned: false
    };
}
function createDraftThread() {
    return {
        ...DRAFT_THREAD
    };
}
function getRealThreads(threads) {
    return threads.filter((thread)=>thread.id !== DRAFT_THREAD_ID);
}
function getInitialWorkspaceState() {
    return {
        user: null,
        threads: [
            createDraftThread()
        ],
        activeThreadId: DRAFT_THREAD_ID
    };
}
function groupThreadsByRecency(threads) {
    const now = new Date();
    const startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const startYesterday = startToday - 86400000;
    const startWeek = startToday - 7 * 86400000;
    const sorted = [
        ...threads
    ].sort((a, b)=>b.updatedAt - a.updatedAt);
    const today = [];
    const yesterday = [];
    const week = [];
    const older = [];
    for (const t of sorted){
        if (t.id === DRAFT_THREAD_ID) continue;
        if (t.updatedAt >= startToday) today.push(t);
        else if (t.updatedAt >= startYesterday) yesterday.push(t);
        else if (t.updatedAt >= startWeek) week.push(t);
        else older.push(t);
    }
    const groups = [];
    if (today.length) groups.push({
        label: "Today",
        items: today
    });
    if (yesterday.length) groups.push({
        label: "Yesterday",
        items: yesterday
    });
    if (week.length) groups.push({
        label: "7 days",
        items: week
    });
    if (older.length) groups.push({
        label: "Older",
        items: older
    });
    return groups;
}
function sortPinnedThreads(threads) {
    return [
        ...threads
    ].filter((thread)=>thread.pinned).sort((a, b)=>b.updatedAt - a.updatedAt);
}
function ChatWorkspace() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const skipSaveOnce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const draftThreadIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [initialWorkspaceState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getInitialWorkspaceState);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialWorkspaceState.user);
    const [threads, setThreads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialWorkspaceState.threads);
    const [activeThreadId, setActiveThreadId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialWorkspaceState.activeThreadId);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [menuThreadId, setMenuThreadId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("chat");
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredUser"])();
        if (!storedUser) {
            return;
        }
        const saved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chat$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadChatState"])(storedUser.id);
        const timeoutId = window.setTimeout(()=>{
            setUser(storedUser);
            setThreads([
                createDraftThread(),
                ...(saved?.threads ?? []).filter((t)=>t.messages.length > 0)
            ]);
            setActiveThreadId(DRAFT_THREAD_ID);
        }, 0);
        return ()=>window.clearTimeout(timeoutId);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (skipSaveOnce.current) {
            skipSaveOnce.current = false;
            return;
        }
        if (user) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chat$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatState"])(user.id, getRealThreads(threads), activeThreadId);
        }
    }, [
        threads,
        activeThreadId,
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!menuThreadId) return;
        const close = ()=>setMenuThreadId(null);
        document.addEventListener("pointerdown", close);
        return ()=>document.removeEventListener("pointerdown", close);
    }, [
        menuThreadId
    ]);
    const activeThread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (activeThreadId === DRAFT_THREAD_ID) {
            return threads.find((thread)=>thread.id === DRAFT_THREAD_ID) ?? createDraftThread();
        }
        return threads.find((thread)=>thread.id === activeThreadId) ?? null;
    }, [
        threads,
        activeThreadId
    ]);
    const filteredThreads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const q = search.trim().toLowerCase();
        const list = getRealThreads(threads);
        if (!q) return list;
        return list.filter((t)=>t.title.toLowerCase().includes(q));
    }, [
        threads,
        search
    ]);
    const pinnedThreads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>sortPinnedThreads(filteredThreads), [
        filteredThreads
    ]);
    const grouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>groupThreadsByRecency(filteredThreads.filter((thread)=>!thread.pinned)), [
        filteredThreads
    ]);
    const realThreadCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getRealThreads(threads).length, [
        threads
    ]);
    const handleNewChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        draftThreadIdRef.current = null;
        setThreads((prev)=>[
                createDraftThread(),
                ...getRealThreads(prev)
            ]);
        setActiveThreadId(DRAFT_THREAD_ID);
        setSearch("");
        setView("chat");
    }, []);
    const handleSelectThread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setActiveThreadId(id);
        setView("chat");
    }, []);
    const commitMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((threadId, messages)=>{
        const resolvedThreadId = threadId === DRAFT_THREAD_ID ? draftThreadIdRef.current ?? DRAFT_THREAD_ID : threadId;
        setThreads((prev)=>{
            const timestamp = Date.now();
            const realThreads = getRealThreads(prev);
            const existingIndex = realThreads.findIndex((thread)=>thread.id === resolvedThreadId);
            if (existingIndex >= 0) {
                const nextThreads = [
                    ...realThreads
                ];
                nextThreads[existingIndex] = {
                    ...nextThreads[existingIndex],
                    messages,
                    updatedAt: timestamp
                };
                return [
                    createDraftThread(),
                    ...nextThreads
                ];
            }
            if (messages.length === 0) {
                return [
                    createDraftThread(),
                    ...realThreads
                ];
            }
            const fallbackTitle = messages[0]?.content.trim().slice(0, 56) || "New chat";
            return [
                createDraftThread(),
                {
                    id: resolvedThreadId,
                    title: fallbackTitle,
                    messages,
                    updatedAt: timestamp,
                    pinned: false
                },
                ...realThreads
            ];
        });
    }, []);
    const setThreadTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((threadId, title)=>{
        const trimmed = title.trim().slice(0, 56) || "New chat";
        if (threadId === DRAFT_THREAD_ID) {
            const createdThread = newThread();
            draftThreadIdRef.current = createdThread.id;
            setActiveThreadId(createdThread.id);
            setThreads((prev)=>[
                    createDraftThread(),
                    {
                        ...createdThread,
                        title: trimmed
                    },
                    ...getRealThreads(prev)
                ]);
            return;
        }
        setThreads((prev)=>[
                createDraftThread(),
                ...getRealThreads(prev).map((thread)=>thread.id === threadId ? {
                        ...thread,
                        title: trimmed,
                        updatedAt: Date.now()
                    } : thread)
            ]);
    }, []);
    const renameThread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        const thread = getRealThreads(threads).find((item)=>item.id === id);
        if (!thread) return;
        const nextTitle = window.prompt("Rename this conversation", thread.title)?.trim();
        if (!nextTitle) return;
        setThreads((prev)=>[
                createDraftThread(),
                ...getRealThreads(prev).map((item)=>item.id === id ? {
                        ...item,
                        title: nextTitle.slice(0, 56),
                        updatedAt: item.updatedAt
                    } : item)
            ]);
        setMenuThreadId(null);
    }, [
        threads
    ]);
    const togglePinThread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setThreads((prev)=>[
                createDraftThread(),
                ...getRealThreads(prev).map((item)=>item.id === id ? {
                        ...item,
                        pinned: !item.pinned
                    } : item)
            ]);
        setMenuThreadId(null);
    }, []);
    const deleteThread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setMenuThreadId(null);
        setThreads((prev)=>{
            const filtered = getRealThreads(prev).filter((thread)=>thread.id !== id);
            setActiveThreadId((currentId)=>currentId === id ? DRAFT_THREAD_ID : currentId);
            return [
                createDraftThread(),
                ...filtered
            ];
        });
    }, []);
    const handleLogout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearSession"])();
        router.push("/login");
    }, [
        router
    ]);
    const handleExportPdf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (activeThread && activeThread.messages.length > 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chat$2d$export$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportThreadSummaryAsPdf"])(activeThread);
        }
    }, [
        activeThread
    ]);
    const handleExportVisitNotes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (activeThread && activeThread.messages.length > 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chat$2d$export$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportVisitNotes"])(activeThread);
        }
    }, [
        activeThread
    ]);
    const firstName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firstNameFromUser"])(user);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex relative h-screen flex-col overflow-hidden bg-[#fafafa] text-[#1a1a1a] md:flex-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `flex max-h-[38vh] shrink-0 flex-col border-b border-[#ebebef] bg-[#f3f3f4] transition-all duration-300 overflow-hidden md:max-h-none md:h-full md:border-b-0 md:border-r ${isSidebarOpen ? "w-full md:w-[260px] p-4" : "hidden md:flex md:w-[68px] py-4 px-2"}`,
                children: !isSidebarOpen ? // --- MINI SIDEBAR (COLLAPSED STATE) ---
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full w-full flex-col items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setIsSidebarOpen(true),
                            className: "flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-xl text-[#8f8f95] hover:bg-[#e4e4ea] hover:text-[#111] transition-colors",
                            title: "Open sidebar",
                            "aria-label": "Open sidebar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__["PanelLeft"], {
                                className: "h-5 w-5 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                lineNumber: 294,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                handleNewChat();
                                setIsSidebarOpen(true);
                            },
                            className: "flex flex-col h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-[#0d0d0d] text-white hover:bg-[#222] transition-colors mt-2",
                            title: "New chat",
                            "aria-label": "New chat",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-4 w-4 pointer-events-none mb-1",
                                    strokeWidth: 2.5
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-medium leading-none pointer-events-none text-center px-1 text-white",
                                    children: "New chat"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                            lineNumber: 297,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setView("dashboard");
                                setIsSidebarOpen(true);
                            },
                            className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors mt-2 ${view === "dashboard" ? "bg-[#f4eeff] text-[#6f4ef2]" : "text-[#8f8f95] hover:bg-[#e4e4ea] hover:text-[#111]"}`,
                            title: "Dashboard",
                            "aria-label": "Dashboard",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                className: "h-5 w-5 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                lineNumber: 322,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setIsSidebarOpen(true),
                            className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#8f8f95] hover:bg-[#e4e4ea] hover:text-[#111] transition-colors",
                            title: "Search and Recent Chats",
                            "aria-label": "Search and Recent Chats",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "h-5 w-5 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                lineNumber: 332,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                            lineNumber: 325,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleLogout,
                            className: "mt-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:opacity-80 transition-opacity",
                            title: "Log out",
                            "aria-label": "Log out",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0d0d0d] text-sm font-semibold text-white pointer-events-none",
                                children: (user?.name?.trim()?.[0] ?? user?.email?.[0] ?? "?").toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                lineNumber: 342,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                            lineNumber: 335,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                    lineNumber: 286,
                    columnNumber: 11
                }, this) : // --- FULL SIDEBAR (OPEN STATE) ---
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full w-full flex-col min-w-[228px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-5 flex items-center justify-between gap-2 px-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f4eeff] text-sm text-[#6f4ef2]",
                                            children: "✦"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                            lineNumber: 352,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[1.65rem] font-medium tracking-tight text-[#111]",
                                            children: "MedCortex"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                            lineNumber: 355,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 351,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsSidebarOpen(false),
                                    className: "flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-xl text-[#8f8f95] hover:bg-[#e4e4ea] hover:text-[#111] transition-colors z-50",
                                    title: "Close sidebar",
                                    "aria-label": "Close sidebar",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__["PanelLeftClose"], {
                                        className: "h-5 w-5 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                        lineNumber: 364,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 357,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                            lineNumber: 350,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setView("dashboard"),
                            className: `mb-2 flex h-11 w-full shrink-0 items-center gap-2.5 rounded-xl px-3.5 text-sm font-medium transition ${view === "dashboard" ? "bg-[#f4eeff] text-[#6f4ef2] shadow-inner" : "text-[#3a3a42] hover:bg-white/80 hover:text-[#6f4ef2]"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                    className: "h-4 w-4 shrink-0",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate",
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-auto rounded-full bg-[#6f4ef2] px-1.5 py-0.5 text-[10px] font-semibold text-white leading-none shrink-0",
                                    children: "NEW"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 379,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                            lineNumber: 369,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleNewChat,
                            className: "mb-3 flex h-11 w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0d0d0d] text-sm font-medium text-white transition hover:bg-[#222]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-4 w-4 shrink-0 pointer-events-none text-white",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 389,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pointer-events-none text-white",
                                    children: "New chat"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 390,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                            lineNumber: 384,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mb-4 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8f8f95]"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "search",
                                    value: search,
                                    onChange: (e)=>setSearch(e.target.value),
                                    placeholder: "Search",
                                    className: "w-full rounded-lg border border-[#e4e4ea] bg-[#fafafb] py-2.5 pl-9 pr-3 text-sm text-[#1a1a1a] placeholder:text-[#b4b4bc] outline-none transition focus:border-[#c5a6ff] focus:ring-1 focus:ring-[#c5a6ff]/40",
                                    "aria-label": "Search chat history"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 395,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                            lineNumber: 393,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-h-0 flex-1 overflow-y-auto w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-[#8f8f95]",
                                    children: "History"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 406,
                                    columnNumber: 15
                                }, this),
                                pinnedThreads.length === 0 && grouped.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "px-2 text-sm text-[#8f8f95]",
                                    children: search.trim() && realThreadCount > 0 ? "No chats match your search." : "No chats yet. Start with New chat."
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 410,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        pinnedThreads.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-1.5 px-2 text-[11px] font-medium uppercase tracking-wide text-[#a8a8b0]",
                                                    children: "Pinned"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-0.5 w-full",
                                                    children: pinnedThreads.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `group relative flex items-center gap-0.5 rounded-lg pl-2.5 pr-1 transition ${t.id === activeThreadId ? "bg-white shadow-sm" : "hover:bg-white/70"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleSelectThread(t.id),
                                                                    className: `min-w-0 flex-1 truncate py-2 pr-1 text-left text-[14px] ${t.id === activeThreadId ? "font-medium text-[#111]" : "text-[#3a3a42]"}`,
                                                                    children: [
                                                                        "📌 ",
                                                                        t.title
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                    lineNumber: 429,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative shrink-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            className: "flex h-8 w-8 items-center justify-center rounded-lg text-[#8f8f95] transition hover:bg-[#f0f0f3] hover:text-[#111]",
                                                                            "aria-haspopup": "menu",
                                                                            "aria-expanded": menuThreadId === t.id,
                                                                            "aria-label": `More options for ${t.title}`,
                                                                            onPointerDown: (e)=>e.stopPropagation(),
                                                                            onClick: (e)=>{
                                                                                e.stopPropagation();
                                                                                setMenuThreadId((cur)=>cur === t.id ? null : t.id);
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                                                className: "h-4 w-4 pointer-events-none",
                                                                                strokeWidth: 2
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                                lineNumber: 452,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                            lineNumber: 440,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        menuThreadId === t.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            role: "menu",
                                                                            className: "absolute right-0 top-full z-30 mt-0.5 w-40 overflow-hidden rounded-xl border border-[#ebebef] bg-white py-1 shadow-lg",
                                                                            onPointerDown: (e)=>e.stopPropagation(),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    role: "menuitem",
                                                                                    className: "w-full px-3 py-2 text-left text-sm text-[#3a3a42] transition hover:bg-[#f7f7fb] cursor-pointer",
                                                                                    onPointerDown: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        renameThread(t.id);
                                                                                    },
                                                                                    children: "Rename chat"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                                    lineNumber: 460,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    role: "menuitem",
                                                                                    className: "w-full px-3 py-2 text-left text-sm text-[#3a3a42] transition hover:bg-[#f7f7fb] cursor-pointer",
                                                                                    onPointerDown: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        togglePinThread(t.id);
                                                                                    },
                                                                                    children: "Unpin chat"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                                    lineNumber: 471,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    role: "menuitem",
                                                                                    className: "w-full px-3 py-2 text-left text-sm text-red-600 transition hover:bg-red-50 cursor-pointer",
                                                                                    onPointerDown: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        deleteThread(t.id);
                                                                                    },
                                                                                    children: "Delete chat"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                                    lineNumber: 482,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                            lineNumber: 455,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                    lineNumber: 439,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, t.id, true, {
                                                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                            lineNumber: 418,
                                            columnNumber: 21
                                        }, this),
                                        grouped.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-1.5 px-2 text-[11px] font-medium uppercase tracking-wide text-[#a8a8b0]",
                                                        children: group.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                        lineNumber: 503,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-0.5 w-full",
                                                        children: group.items.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `group relative flex items-center gap-0.5 rounded-lg pl-2.5 pr-1 transition ${t.id === activeThreadId ? "bg-white shadow-sm" : "hover:bg-white/70"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleSelectThread(t.id),
                                                                        className: `min-w-0 flex-1 truncate py-2 pr-1 text-left text-[14px] ${t.id === activeThreadId ? "font-medium text-[#111]" : "text-[#3a3a42]"}`,
                                                                        children: t.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                        lineNumber: 513,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative shrink-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                className: "flex h-8 w-8 items-center justify-center rounded-lg text-[#8f8f95] transition hover:bg-[#f0f0f3] hover:text-[#111]",
                                                                                "aria-haspopup": "menu",
                                                                                "aria-expanded": menuThreadId === t.id,
                                                                                "aria-label": `More options for ${t.title}`,
                                                                                onPointerDown: (e)=>e.stopPropagation(),
                                                                                onClick: (e)=>{
                                                                                    e.stopPropagation();
                                                                                    setMenuThreadId((cur)=>cur === t.id ? null : t.id);
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                                                    className: "h-4 w-4 pointer-events-none",
                                                                                    strokeWidth: 2
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                                    lineNumber: 536,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                                lineNumber: 524,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            menuThreadId === t.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                role: "menu",
                                                                                className: "absolute right-0 top-full z-30 mt-0.5 w-40 overflow-hidden rounded-xl border border-[#ebebef] bg-white py-1 shadow-lg",
                                                                                onPointerDown: (e)=>e.stopPropagation(),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        role: "menuitem",
                                                                                        className: "w-full px-3 py-2 text-left text-sm text-[#3a3a42] transition hover:bg-[#f7f7fb] cursor-pointer",
                                                                                        onPointerDown: (e)=>{
                                                                                            e.stopPropagation();
                                                                                            renameThread(t.id);
                                                                                        },
                                                                                        children: "Rename chat"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                                        lineNumber: 544,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        role: "menuitem",
                                                                                        className: "w-full px-3 py-2 text-left text-sm text-[#3a3a42] transition hover:bg-[#f7f7fb] cursor-pointer",
                                                                                        onPointerDown: (e)=>{
                                                                                            e.stopPropagation();
                                                                                            togglePinThread(t.id);
                                                                                        },
                                                                                        children: "Pin chat"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                                        lineNumber: 555,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        role: "menuitem",
                                                                                        className: "w-full px-3 py-2 text-left text-sm text-red-600 transition hover:bg-red-50 cursor-pointer",
                                                                                        onPointerDown: (e)=>{
                                                                                            e.stopPropagation();
                                                                                            deleteThread(t.id);
                                                                                        },
                                                                                        children: "Delete chat"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                                        lineNumber: 566,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                                lineNumber: 539,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                        lineNumber: 523,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, t.id, true, {
                                                                fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                lineNumber: 508,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, group.label, true, {
                                                fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                lineNumber: 502,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 416,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                            lineNumber: 405,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-auto border-t border-[#ebebef] pt-3 shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 rounded-xl px-2 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0d0d0d] text-sm font-semibold text-white",
                                        children: (user?.name?.trim()?.[0] ?? user?.email?.[0] ?? "?").toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                        lineNumber: 591,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "truncate text-sm font-medium text-[#111]",
                                                children: user?.name?.trim() || "Signed in"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                lineNumber: 595,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "truncate text-xs text-[#8f8f95]",
                                                children: user?.email ?? ""
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                lineNumber: 598,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                        lineNumber: 594,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleLogout,
                                        className: "shrink-0 rounded-lg p-2 text-[#8f8f95] transition hover:bg-white hover:text-[#111]",
                                        title: "Log out",
                                        "aria-label": "Log out",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                            className: "h-4 w-4 pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                            lineNumber: 607,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                        lineNumber: 600,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                lineNumber: 590,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                            lineNumber: 589,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                    lineNumber: 349,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatWorkspace.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex min-w-0 flex-1 flex-col relative w-full h-full bg-white",
                children: view === "dashboard" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$Dashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    user: user,
                    threads: getRealThreads(threads)
                }, void 0, false, {
                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                    lineNumber: 617,
                    columnNumber: 11
                }, this) : activeThread ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    threadId: activeThread.id,
                    threadTitle: activeThread.title,
                    messages: activeThread.messages,
                    firstName: firstName,
                    onCommitMessages: commitMessages,
                    onFirstUserMessageTitle: setThreadTitle,
                    onExportPdf: handleExportPdf,
                    onExportVisitNotes: handleExportVisitNotes
                }, void 0, false, {
                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                    lineNumber: 619,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatWorkspace.tsx",
                lineNumber: 615,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/ChatWorkspace.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1ml48lr._.js.map