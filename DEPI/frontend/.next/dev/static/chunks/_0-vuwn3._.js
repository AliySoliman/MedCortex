(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/chat/MessageBubble.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageBubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function MessageBubble({ message }) {
    const isUser = message.role === "user";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-end gap-2.5 ${isUser ? "justify-end" : "justify-start"}`,
        children: [
            !isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4eeff] text-sm text-[#6f4ef2] shadow-sm",
                children: "✦"
            }, void 0, false, {
                fileName: "[project]/components/chat/MessageBubble.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${isUser ? "rounded-br-sm bg-[#0d0d0d] text-white" : "rounded-bl-sm border border-[#ebebef] bg-white text-[#1a1a1a] shadow-sm"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormattedText, {
                        text: message.content,
                        variant: isUser ? "user" : "assistant"
                    }, void 0, false, {
                        fileName: "[project]/components/chat/MessageBubble.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = MessageBubble;
function FormattedText({ text, variant }) {
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: parts.map((part, i)=>{
            if (part.startsWith("**") && part.endsWith("**")) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: variant === "user" ? "font-semibold text-white" : "font-semibold text-[#111]",
                    children: part.slice(2, -2)
                }, i, false, {
                    fileName: "[project]/components/chat/MessageBubble.tsx",
                    lineNumber: 58,
                    columnNumber: 13
                }, this);
            }
            if (part.startsWith("*") && part.endsWith("*")) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                    className: variant === "user" ? "italic text-white/90" : "italic text-[#5c5c66]",
                    children: part.slice(1, -1)
                }, i, false, {
                    fileName: "[project]/components/chat/MessageBubble.tsx",
                    lineNumber: 70,
                    columnNumber: 13
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c1 = FormattedText;
var _c, _c1;
__turbopack_context__.k.register(_c, "MessageBubble");
__turbopack_context__.k.register(_c1, "FormattedText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useSpeechToText.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpeechToText",
    ()=>useSpeechToText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useSpeechToText({ onTranscript, onError }) {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const mediaRecorder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mimeTypeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("audio/webm");
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
        if (("TURBOPACK compile-time value", "object") === "undefined" || !navigator.mediaDevices?.getUserMedia) {
            onError("Your browser does not support audio recording.");
            return;
        }
        try {
            setStatus("requesting");
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            const preferredMimeType = MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : MediaRecorder.isTypeSupported("audio/ogg") ? "audio/ogg" : "";
            const recorder = preferredMimeType ? new MediaRecorder(stream, {
                mimeType: preferredMimeType
            }) : new MediaRecorder(stream);
            mimeTypeRef.current = recorder.mimeType || preferredMimeType || "audio/webm";
            audioChunks.current = [];
            mediaRecorder.current = recorder;
            recorder.ondataavailable = (event)=>{
                if (event.data.size > 0) {
                    audioChunks.current.push(event.data);
                }
            };
            recorder.onstop = ()=>{
                const blob = new Blob(audioChunks.current, {
                    type: mimeTypeRef.current || recorder.mimeType || "audio/webm"
                });
                audioChunks.current = [];
                mediaRecorder.current = null;
                stream.getTracks().forEach((track)=>track.stop());
                setStatus("processing");
                void transcribe(blob, mimeTypeRef.current || recorder.mimeType || "audio/webm");
            };
            recorder.start();
            setStatus("recording");
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unable to access your microphone.";
            onError(message);
            setStatus("idle");
        }
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
_s(useSpeechToText, "AeKZGsZsvrvsX5z49my2ylRNOx8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/VoiceButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VoiceButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSpeechToText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useSpeechToText.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MicrophoneIcon({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: className,
        "aria-hidden": "true",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c = MicrophoneIcon;
function StopIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: "h-5 w-5",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
_c1 = StopIcon;
function VoiceButton({ onTranscript, onError, disabled = false }) {
    _s();
    const { status, startRecording, stopRecording } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSpeechToText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpeechToText"])({
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
    let content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MicrophoneIcon, {
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
        content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StopIcon, {}, void 0, false, {
            fileName: "[project]/components/chat/VoiceButton.tsx",
            lineNumber: 67,
            columnNumber: 15
        }, this);
    } else if (status === "processing") {
        title = "Transcribing...";
        className += " cursor-not-allowed text-[#6f4ef2]/70";
        content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/components/chat/VoiceButton.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(VoiceButton, "hJmZX8V/+DJGHuEuUy9tvV43lQg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSpeechToText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpeechToText"]
    ];
});
_c2 = VoiceButton;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MicrophoneIcon");
__turbopack_context__.k.register(_c1, "StopIcon");
__turbopack_context__.k.register(_c2, "VoiceButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/chat.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendMessage",
    ()=>sendMessage,
    "uploadFile",
    ()=>uploadFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// frontend/services/chat.ts
// ─────────────────────────────────────────────────────────────────────────────
// MedCortex Chat Service
// Handles all API calls to the FastAPI /chat endpoint
// ─────────────────────────────────────────────────────────────────────────────
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
async function sendMessage(message, unified_context) {
    const token = localStorage.getItem("token");
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE}/chat`, {
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
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE}/upload`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            ...token ? {
                Authorization: `Bearer ${token}`
            } : {}
        }
    });
    return response.data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/FileUpload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/chat.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// frontend/components/chat/FileUpload.tsx
"use client";
;
;
function FileUpload({ onUploadSuccess, disabled }) {
    _s();
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleFileChange = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        try {
            setIsUploading(true);
            setError(null);
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadFile"])(file);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>fileInputRef.current?.click(),
                disabled: disabled || isUploading,
                className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${isUploading ? "animate-pulse bg-[#e0d6ff] text-[#6f4ef2]" : "bg-transparent text-[#6f4ef2] hover:bg-[#f4efff]"} disabled:cursor-not-allowed disabled:opacity-50`,
                "aria-label": "Upload document or image",
                title: "Upload Medical Document",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    className: "h-5 w-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(FileUpload, "uXy65V0i8mxPsh88VdJJJl9Gl/w=");
_c = FileUpload;
var _c;
__turbopack_context__.k.register(_c, "FileUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/InputBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InputBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$VoiceButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/VoiceButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$FileUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/FileUpload.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [voiceError, setVoiceError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadedContext, setUploadedContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InputBar.useEffect": ()=>{
            const el = textareaRef.current;
            if (el) {
                el.style.height = "auto";
                el.style.height = `${Math.min(el.scrollHeight, 140)}px`;
            }
        }
    }["InputBar.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-full max-w-3xl space-y-2",
        children: [
            uploadedContext && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-[#e8e1fb] bg-gradient-to-br from-[#faf7ff] via-white to-[#f6f1ff] px-4 py-3 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-bold uppercase tracking-[0.22em] text-[#7b7b88]",
                                        children: "Document ready"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/InputBar.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 truncate text-sm font-semibold text-[#111]",
                                        children: getDocumentTitle(uploadedContext)
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/InputBar.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex flex-wrap gap-2",
                        children: suggestedPrompts.map((prompt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end gap-2 rounded-2xl border border-[#e4e4ea] bg-[#fafafa] px-4 py-3 shadow-sm transition focus-within:border-[#c5a6ff] focus-within:ring-2 focus-within:ring-[#c5a6ff]/25",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$FileUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onUploadSuccess: handleUploadSuccess,
                        disabled: disabled
                    }, void 0, false, {
                        fileName: "[project]/components/chat/InputBar.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$VoiceButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onTranscript: handleTranscript,
                        onError: (message)=>setVoiceError(message),
                        disabled: disabled
                    }, void 0, false, {
                        fileName: "[project]/components/chat/InputBar.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            voiceError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 px-1 text-xs text-red-500",
                children: voiceError
            }, void 0, false, {
                fileName: "[project]/components/chat/InputBar.tsx",
                lineNumber: 203,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(InputBar, "rprv/18Xe6Wxsm/NVtnNSVVeID8=");
_c = InputBar;
var _c;
__turbopack_context__.k.register(_c, "InputBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useDoctorRecommendations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveDoctorRecommendationState",
    ()=>resolveDoctorRecommendationState,
    "useDoctorRecommendations",
    ()=>useDoctorRecommendations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
    _s();
    const [doctors, setDoctors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDoctorRecommendations.useEffect": ()=>{
            if (!referral) {
                return;
            }
            let cancelled = false;
            const loadDoctors = {
                "useDoctorRecommendations.useEffect.loadDoctors": async ()=>{
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
                    }).then({
                        "useDoctorRecommendations.useEffect.loadDoctors": async (response)=>{
                            const payload = await response.json();
                            if (!response.ok) {
                                throw new Error(payload.error || "Places search failed");
                            }
                            return (payload.doctors ?? []).map({
                                "useDoctorRecommendations.useEffect.loadDoctors": (doctor)=>({
                                        ...doctor,
                                        source: "places",
                                        sourceLabel: "Google Maps",
                                        specialty: referral.specialist
                                    })
                            }["useDoctorRecommendations.useEffect.loadDoctors"]);
                        }
                    }["useDoctorRecommendations.useEffect.loadDoctors"]) : Promise.resolve([]);
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
                }
            }["useDoctorRecommendations.useEffect.loadDoctors"];
            void loadDoctors();
            return ({
                "useDoctorRecommendations.useEffect": ()=>{
                    cancelled = true;
                }
            })["useDoctorRecommendations.useEffect"];
        }
    }["useDoctorRecommendations.useEffect"], [
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
_s(useDoctorRecommendations, "D9Xhd59Ge48ON2Iqc6eASXeYMN4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reports/LabReport/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
// components/reports/LabReport/Header.tsx
"use client";
;
;
function Header({ title, documentType, dateGenerated, confidence, processingStatus, sourceDocument }) {
    const formatDate = (dateStr)=>{
        try {
            return new Date(dateStr).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
            });
        } catch  {
            return dateStr;
        }
    };
    const getConfidenceColor = (conf)=>{
        if (conf >= 0.8) return "bg-emerald-100 text-emerald-700 border-emerald-200";
        if (conf >= 0.5) return "bg-amber-100 text-amber-700 border-amber-200";
        return "bg-red-100 text-red-700 border-red-200";
    };
    const getConfidenceLabel = (conf)=>{
        if (conf >= 0.8) return "High";
        if (conf >= 0.5) return "Medium";
        return "Low";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-gray-200 bg-white p-6 shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4 md:flex-row md:items-start md:justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"], {
                                    className: "h-6 w-6",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/components/reports/LabReport/Header.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/reports/LabReport/Header.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-semibold tracking-tight text-gray-900",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/components/reports/LabReport/Header.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 flex flex-wrap items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700",
                                                children: documentType
                                            }, void 0, false, {
                                                fileName: "[project]/components/reports/LabReport/Header.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this),
                                            sourceDocument && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1 text-xs text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        className: "h-3 w-3",
                                                        strokeWidth: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/reports/LabReport/Header.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 21
                                                    }, this),
                                                    sourceDocument
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reports/LabReport/Header.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reports/LabReport/Header.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reports/LabReport/Header.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/reports/LabReport/Header.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/reports/LabReport/Header.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-xs text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "h-4 w-4",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/components/reports/LabReport/Header.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: formatDate(dateGenerated)
                                }, void 0, false, {
                                    fileName: "[project]/components/reports/LabReport/Header.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/reports/LabReport/Header.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${getConfidenceColor(confidence)}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    className: "h-3.5 w-3.5",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/components/reports/LabReport/Header.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        getConfidenceLabel(confidence),
                                        " Confidence"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/reports/LabReport/Header.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-1 font-mono",
                                    children: [
                                        Math.round(confidence * 100),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/reports/LabReport/Header.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/reports/LabReport/Header.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700",
                            children: processingStatus
                        }, void 0, false, {
                            fileName: "[project]/components/reports/LabReport/Header.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/reports/LabReport/Header.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/reports/LabReport/Header.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/reports/LabReport/Header.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reports/LabReport/PatientInformation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PatientInformation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-round.js [app-client] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
// components/reports/LabReport/PatientInformation.tsx
"use client";
;
;
function PatientInformation({ patientName, age, gender, physician, facility, reportDate, collectionDate, medicalRecordNumber }) {
    const formatDate = (dateStr)=>{
        if (!dateStr) return "N/A";
        try {
            return new Date(dateStr).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric"
            });
        } catch  {
            return dateStr;
        }
    };
    const infoCards = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"],
            label: "Patient",
            value: patientName || "N/A"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
            label: "Age",
            value: age || "N/A"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"],
            label: "Sex",
            value: gender || "N/A"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
            label: "Physician",
            value: physician || "N/A"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
            label: "Facility",
            value: facility || "N/A"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            label: "Report Date",
            value: formatDate(reportDate)
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
            label: "Collection Date",
            value: formatDate(collectionDate)
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            label: "MRN",
            value: medicalRecordNumber || "N/A"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-gray-200 bg-white p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-4 text-sm font-bold uppercase tracking-widest text-gray-500",
                children: "Patient Summary"
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/PatientInformation.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 md:grid-cols-4",
                children: infoCards.map((card, index)=>{
                    const Icon = card.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-gray-100 bg-gray-50 p-3 transition hover:border-gray-200 hover:bg-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs font-medium text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "h-3.5 w-3.5",
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/components/reports/LabReport/PatientInformation.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this),
                                    card.label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reports/LabReport/PatientInformation.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm font-medium text-gray-900",
                                children: card.value
                            }, void 0, false, {
                                fileName: "[project]/components/reports/LabReport/PatientInformation.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/reports/LabReport/PatientInformation.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/PatientInformation.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/reports/LabReport/PatientInformation.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = PatientInformation;
var _c;
__turbopack_context__.k.register(_c, "PatientInformation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reports/LabReport/KeyFindings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KeyFindings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
// components/reports/LabReport/KeyFindings.tsx
"use client";
;
;
function KeyFindings({ findings = [], labValues = [] }) {
    // Categorize lab values by status
    const normal = labValues.filter((lab)=>lab.flag === "N" || !lab.flag);
    const abnormal = labValues.filter((lab)=>lab.flag === "H" || lab.flag === "L");
    const critical = labValues.filter((lab)=>lab.flag === "A" || lab.flag === "C");
    const allFindings = [
        ...findings.map((f)=>({
                text: f,
                type: "info"
            })),
        ...normal.slice(0, 3).map((lab)=>({
                text: `${lab.name}: ${lab.value} ${lab.unit || ""}`,
                type: "normal"
            })),
        ...abnormal.slice(0, 3).map((lab)=>({
                text: `${lab.name}: ${lab.value} ${lab.unit || ""} (${lab.flag})`,
                type: "abnormal"
            })),
        ...critical.slice(0, 3).map((lab)=>({
                text: `${lab.name}: ${lab.value} ${lab.unit || ""} (${lab.flag})`,
                type: "critical"
            }))
    ];
    if (allFindings.length === 0) {
        return null;
    }
    const getFindingStyle = (type)=>{
        switch(type){
            case "normal":
                return "border-emerald-200 bg-emerald-50 text-emerald-900";
            case "abnormal":
                return "border-amber-200 bg-amber-50 text-amber-900";
            case "critical":
                return "border-red-200 bg-red-50 text-red-900";
            default:
                return "border-blue-200 bg-blue-50 text-blue-900";
        }
    };
    const getFindingIcon = (type)=>{
        switch(type){
            case "normal":
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"];
            case "abnormal":
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"];
            case "critical":
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"];
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"];
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-gray-200 bg-white p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-4 text-sm font-bold uppercase tracking-widest text-gray-500",
                children: "Key Findings"
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/KeyFindings.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 md:grid-cols-2 lg:grid-cols-3",
                children: allFindings.map((finding, index)=>{
                    const Icon = getFindingIcon(finding.type);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-start gap-3 rounded-lg border p-4 ${getFindingStyle(finding.type)}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "h-5 w-5 shrink-0 mt-0.5",
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/components/reports/LabReport/KeyFindings.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium leading-relaxed",
                                    children: finding.text
                                }, void 0, false, {
                                    fileName: "[project]/components/reports/LabReport/KeyFindings.tsx",
                                    lineNumber: 68,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/reports/LabReport/KeyFindings.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/reports/LabReport/KeyFindings.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/KeyFindings.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/reports/LabReport/KeyFindings.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c = KeyFindings;
var _c;
__turbopack_context__.k.register(_c, "KeyFindings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reports/LabReport/LaboratoryTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LaboratoryTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// components/reports/LabReport/LaboratoryTable.tsx
"use client";
;
function LaboratoryTable({ labValues = [] }) {
    if (labValues.length === 0) {
        return null;
    }
    const getRowStyle = (flag)=>{
        switch(flag){
            case "H":
                return "bg-amber-50 hover:bg-amber-100";
            case "L":
                return "bg-blue-50 hover:bg-blue-100";
            case "A":
            case "C":
                return "bg-red-50 hover:bg-red-100";
            default:
                return "bg-white hover:bg-gray-50";
        }
    };
    const getStatusBadge = (flag)=>{
        switch(flag){
            case "H":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex rounded-full border border-amber-300 bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800",
                    children: "High"
                }, void 0, false, {
                    fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                    lineNumber: 40,
                    columnNumber: 16
                }, this);
            case "L":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex rounded-full border border-blue-300 bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800",
                    children: "Low"
                }, void 0, false, {
                    fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                    lineNumber: 42,
                    columnNumber: 16
                }, this);
            case "A":
            case "C":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex rounded-full border border-red-300 bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800",
                    children: "Critical"
                }, void 0, false, {
                    fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                    lineNumber: 45,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex rounded-full border border-emerald-300 bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800",
                    children: "Normal"
                }, void 0, false, {
                    fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                    lineNumber: 47,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-gray-200 bg-gray-50 px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-sm font-bold uppercase tracking-widest text-gray-500",
                    children: "Laboratory Results"
                }, void 0, false, {
                    fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full divide-y divide-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-50 sticky top-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500",
                                        children: "Test"
                                    }, void 0, false, {
                                        fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500",
                                        children: "Result"
                                    }, void 0, false, {
                                        fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500",
                                        children: "Unit"
                                    }, void 0, false, {
                                        fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500",
                                        children: "Reference Range"
                                    }, void 0, false, {
                                        fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-gray-200",
                            children: labValues.map((lab, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: `transition-colors ${getRowStyle(lab.flag)}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
                                            children: lab.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono font-semibold text-gray-900",
                                                children: lab.value
                                            }, void 0, false, {
                                                fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-600",
                                            children: lab.unit || "—"
                                        }, void 0, false, {
                                            fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-600",
                                            children: lab.reference_range || "—"
                                        }, void 0, false, {
                                            fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: getStatusBadge(lab.flag)
                                        }, void 0, false, {
                                            fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/reports/LabReport/LaboratoryTable.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = LaboratoryTable;
var _c;
__turbopack_context__.k.register(_c, "LaboratoryTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reports/LabReport/DoctorInterpretation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DoctorInterpretation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript) <export default as Stethoscope>");
// components/reports/LabReport/DoctorInterpretation.tsx
"use client";
;
;
function DoctorInterpretation({ interpretation }) {
    if (!interpretation) {
        return null;
    }
    // Parse the interpretation text to extract paragraphs
    const paragraphs = interpretation.split(/\n\n+/).filter((p)=>p.trim());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6 shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
                        className: "h-5 w-5",
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/components/reports/LabReport/DoctorInterpretation.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/reports/LabReport/DoctorInterpretation.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-3 text-sm font-bold uppercase tracking-widest text-blue-900",
                            children: "Doctor Interpretation"
                        }, void 0, false, {
                            fileName: "[project]/components/reports/LabReport/DoctorInterpretation.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: paragraphs.map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed text-gray-800",
                                    children: paragraph
                                }, index, false, {
                                    fileName: "[project]/components/reports/LabReport/DoctorInterpretation.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/reports/LabReport/DoctorInterpretation.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/reports/LabReport/DoctorInterpretation.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/reports/LabReport/DoctorInterpretation.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/reports/LabReport/DoctorInterpretation.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = DoctorInterpretation;
var _c;
__turbopack_context__.k.register(_c, "DoctorInterpretation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reports/LabReport/ClinicalImpression.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClinicalImpression
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
// components/reports/LabReport/ClinicalImpression.tsx
"use client";
;
;
function ClinicalImpression({ impression = [] }) {
    if (!impression || impression.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-amber-200 bg-amber-50 p-6 shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                        className: "h-5 w-5",
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/components/reports/LabReport/ClinicalImpression.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/reports/LabReport/ClinicalImpression.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-3 text-sm font-bold uppercase tracking-widest text-amber-900",
                            children: "Clinical Impression"
                        }, void 0, false, {
                            fileName: "[project]/components/reports/LabReport/ClinicalImpression.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: impression.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed text-gray-800",
                                    children: item
                                }, index, false, {
                                    fileName: "[project]/components/reports/LabReport/ClinicalImpression.tsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/reports/LabReport/ClinicalImpression.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/reports/LabReport/ClinicalImpression.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/reports/LabReport/ClinicalImpression.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/reports/LabReport/ClinicalImpression.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = ClinicalImpression;
var _c;
__turbopack_context__.k.register(_c, "ClinicalImpression");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reports/LabReport/Recommendations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Recommendations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
// components/reports/LabReport/Recommendations.tsx
"use client";
;
;
function Recommendations({ recommendations }) {
    if (!recommendations) {
        return null;
    }
    // Flatten all recommendation types into a single list
    const allRecommendations = [];
    if (recommendations.foods_to_eat) {
        allRecommendations.push(...recommendations.foods_to_eat.map((r)=>({
                text: r,
                category: "Food to Eat"
            })));
    }
    if (recommendations.foods_to_avoid) {
        allRecommendations.push(...recommendations.foods_to_avoid.map((r)=>({
                text: r,
                category: "Food to Avoid"
            })));
    }
    if (recommendations.drinks_to_have) {
        allRecommendations.push(...recommendations.drinks_to_have.map((r)=>({
                text: r,
                category: "Drink to Have"
            })));
    }
    if (recommendations.drinks_to_avoid) {
        allRecommendations.push(...recommendations.drinks_to_avoid.map((r)=>({
                text: r,
                category: "Drink to Avoid"
            })));
    }
    if (recommendations.exercises_recommended) {
        allRecommendations.push(...recommendations.exercises_recommended.map((r)=>({
                text: r,
                category: "Exercise"
            })));
    }
    if (recommendations.exercises_to_avoid) {
        allRecommendations.push(...recommendations.exercises_to_avoid.map((r)=>({
                text: r,
                category: "Exercise to Avoid"
            })));
    }
    if (recommendations.rest_recommendation) {
        allRecommendations.push({
            text: recommendations.rest_recommendation,
            category: "Rest"
        });
    }
    if (allRecommendations.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-gray-200 bg-white p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-4 text-sm font-bold uppercase tracking-widest text-gray-500",
                children: "Recommendations"
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/Recommendations.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: allRecommendations.map((rec, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50 p-4 transition hover:border-gray-200 hover:bg-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "h-4 w-4",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/components/reports/LabReport/Recommendations.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/reports/LabReport/Recommendations.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-gray-900",
                                        children: rec.category
                                    }, void 0, false, {
                                        fileName: "[project]/components/reports/LabReport/Recommendations.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-gray-700",
                                        children: rec.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/reports/LabReport/Recommendations.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reports/LabReport/Recommendations.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/reports/LabReport/Recommendations.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/Recommendations.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/reports/LabReport/Recommendations.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = Recommendations;
var _c;
__turbopack_context__.k.register(_c, "Recommendations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reports/LabReport/MedicationSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MedicationSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pill.js [app-client] (ecmascript) <export default as Pill>");
// components/reports/LabReport/MedicationSection.tsx
"use client";
;
;
function MedicationSection({ medications = [] }) {
    if (!medications || medications.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-gray-200 bg-white p-6 shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-4 text-sm font-bold uppercase tracking-widest text-gray-500",
                    children: "Medications"
                }, void 0, false, {
                    fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__["Pill"], {
                            className: "h-12 w-12 text-gray-300",
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-sm text-gray-500",
                            children: "No medications listed in this report"
                        }, void 0, false, {
                            fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-gray-200 bg-white p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-4 text-sm font-bold uppercase tracking-widest text-gray-500",
                children: "Medications"
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: medications.map((med, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-gray-200 bg-gray-50 p-4 transition hover:border-gray-300 hover:bg-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__["Pill"], {
                                        className: "h-5 w-5",
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-semibold text-gray-900",
                                            children: med.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 space-y-1",
                                            children: [
                                                med.dosage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Dose:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                                                            lineNumber: 47,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        med.dosage
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 21
                                                }, this),
                                                med.frequency && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Frequency:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        med.frequency
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 21
                                                }, this),
                                                med.route && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Route:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        med.route
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 21
                                                }, this),
                                                med.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Status:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                                                            lineNumber: 62,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        med.status
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/reports/LabReport/MedicationSection.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = MedicationSection;
var _c;
__turbopack_context__.k.register(_c, "MedicationSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reports/LabReport/WarningSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WarningSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as TriangleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$octagon$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertOctagon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/octagon-alert.js [app-client] (ecmascript) <export default as AlertOctagon>");
// components/reports/LabReport/WarningSection.tsx
"use client";
;
;
function WarningSection({ warnings = [] }) {
    if (!warnings || warnings.length === 0) {
        return null;
    }
    const getWarningStyle = (warning)=>{
        const lower = warning.toLowerCase();
        if (lower.includes("critical") || lower.includes("emergency") || lower.includes("danger")) {
            return {
                style: "border-red-200 bg-red-50 text-red-900",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$octagon$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertOctagon$3e$__["AlertOctagon"],
                label: "Critical"
            };
        }
        if (lower.includes("important") || lower.includes("warning") || lower.includes("caution")) {
            return {
                style: "border-amber-200 bg-amber-50 text-amber-900",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"],
                label: "Important"
            };
        }
        return {
            style: "border-blue-200 bg-blue-50 text-blue-900",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"],
            label: "Educational"
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-gray-200 bg-white p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-4 text-sm font-bold uppercase tracking-widest text-gray-500",
                children: "Warnings"
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/WarningSection.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: warnings.map((warning, index)=>{
                    const { style, icon: Icon, label } = getWarningStyle(warning);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-start gap-3 rounded-lg border p-4 ${style}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "h-5 w-5 shrink-0 mt-0.5",
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/components/reports/LabReport/WarningSection.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-medium uppercase tracking-wider opacity-75 mb-1",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/components/reports/LabReport/WarningSection.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-relaxed",
                                        children: warning
                                    }, void 0, false, {
                                        fileName: "[project]/components/reports/LabReport/WarningSection.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reports/LabReport/WarningSection.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/reports/LabReport/WarningSection.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/WarningSection.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/reports/LabReport/WarningSection.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = WarningSection;
var _c;
__turbopack_context__.k.register(_c, "WarningSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reports/LabReport/EvidenceSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EvidenceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
;
var _s = __turbopack_context__.k.signature();
// components/reports/LabReport/EvidenceSection.tsx
"use client";
;
;
function EvidenceSection({ sources = [] }) {
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!sources || sources.length === 0) {
        return null;
    }
    // Group sources by book
    const groupedSources = sources.reduce((acc, source)=>{
        const book = source.book;
        if (!acc[book]) {
            acc[book] = [];
        }
        acc[book].push(source.section || "");
        return acc;
    }, {});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setIsExpanded(!isExpanded),
                className: "flex w-full items-center justify-between px-6 py-4 transition hover:bg-gray-50",
                "aria-expanded": isExpanded,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "h-5 w-5 text-gray-500",
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/components/reports/LabReport/EvidenceSection.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-bold uppercase tracking-widest text-gray-500",
                                children: [
                                    "Evidence & Sources (",
                                    sources.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reports/LabReport/EvidenceSection.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/reports/LabReport/EvidenceSection.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                        className: "h-5 w-5 text-gray-400",
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/components/reports/LabReport/EvidenceSection.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "h-5 w-5 text-gray-400",
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/components/reports/LabReport/EvidenceSection.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/reports/LabReport/EvidenceSection.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-200 px-6 py-4 space-y-4",
                children: Object.entries(groupedSources).map(([book, sections])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-gray-100 bg-gray-50 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-gray-900 mb-2",
                                children: book
                            }, void 0, false, {
                                fileName: "[project]/components/reports/LabReport/EvidenceSection.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1",
                                children: sections.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "text-sm text-gray-600 pl-4 border-l-2 border-gray-300",
                                        children: section
                                    }, index, false, {
                                        fileName: "[project]/components/reports/LabReport/EvidenceSection.tsx",
                                        lineNumber: 61,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/reports/LabReport/EvidenceSection.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        ]
                    }, book, true, {
                        fileName: "[project]/components/reports/LabReport/EvidenceSection.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/EvidenceSection.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/reports/LabReport/EvidenceSection.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(EvidenceSection, "FPNvbbHVlWWR4LKxxNntSxiIS38=");
_c = EvidenceSection;
var _c;
__turbopack_context__.k.register(_c, "EvidenceSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reports/LabReport/ConfidenceSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfidenceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
// components/reports/LabReport/ConfidenceSection.tsx
"use client";
;
;
function ConfidenceSection({ confidence, confidenceLevel }) {
    const percentage = Math.round(confidence * 100);
    const getConfidenceColor = (conf)=>{
        if (conf >= 0.8) return "bg-emerald-500";
        if (conf >= 0.5) return "bg-amber-500";
        return "bg-red-500";
    };
    const getConfidenceLabel = (conf)=>{
        if (conf >= 0.8) return "High";
        if (conf >= 0.5) return "Medium";
        return "Low";
    };
    const getConfidenceLabelColor = (conf)=>{
        if (conf >= 0.8) return "text-emerald-700 bg-emerald-50 border-emerald-200";
        if (conf >= 0.5) return "text-amber-700 bg-amber-50 border-amber-200";
        return "text-red-700 bg-red-50 border-red-200";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-gray-200 bg-white p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    className: "h-5 w-5",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/components/reports/LabReport/ConfidenceSection.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/reports/LabReport/ConfidenceSection.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-bold uppercase tracking-widest text-gray-500",
                                        children: "Analysis Confidence"
                                    }, void 0, false, {
                                        fileName: "[project]/components/reports/LabReport/ConfidenceSection.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mt-1",
                                        children: "Based on available data and AI analysis"
                                    }, void 0, false, {
                                        fileName: "[project]/components/reports/LabReport/ConfidenceSection.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reports/LabReport/ConfidenceSection.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/reports/LabReport/ConfidenceSection.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium ${getConfidenceLabelColor(confidence)}`,
                                children: [
                                    getConfidenceLabel(confidence),
                                    " Confidence"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reports/LabReport/ConfidenceSection.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-2xl font-semibold text-gray-900",
                                children: [
                                    percentage,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reports/LabReport/ConfidenceSection.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/reports/LabReport/ConfidenceSection.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/reports/LabReport/ConfidenceSection.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-2 w-full overflow-hidden rounded-full bg-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-full rounded-full transition-all duration-500 ${getConfidenceColor(confidence)}`,
                        style: {
                            width: `${percentage}%`
                        },
                        role: "progressbar",
                        "aria-valuenow": percentage,
                        "aria-valuemin": 0,
                        "aria-valuemax": 100
                    }, void 0, false, {
                        fileName: "[project]/components/reports/LabReport/ConfidenceSection.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/reports/LabReport/ConfidenceSection.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/ConfidenceSection.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/reports/LabReport/ConfidenceSection.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = ConfidenceSection;
var _c;
__turbopack_context__.k.register(_c, "ConfidenceSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reports/LabReport/Disclaimer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Disclaimer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// components/reports/LabReport/Disclaimer.tsx
"use client";
;
function Disclaimer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-3 text-xs font-bold uppercase tracking-widest text-gray-500",
                children: "Disclaimer"
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/Disclaimer.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 text-sm text-gray-600 leading-relaxed",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "This laboratory report analysis is generated by an AI system for educational and informational purposes only."
                    }, void 0, false, {
                        fileName: "[project]/components/reports/LabReport/Disclaimer.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "The results, interpretations, and recommendations provided herein should not be used as a substitute for professional medical advice, diagnosis, or treatment."
                    }, void 0, false, {
                        fileName: "[project]/components/reports/LabReport/Disclaimer.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition."
                    }, void 0, false, {
                        fileName: "[project]/components/reports/LabReport/Disclaimer.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mt-4",
                        children: "Generated by MedCortex AI Clinical Analysis System"
                    }, void 0, false, {
                        fileName: "[project]/components/reports/LabReport/Disclaimer.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/reports/LabReport/Disclaimer.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/reports/LabReport/Disclaimer.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Disclaimer;
var _c;
__turbopack_context__.k.register(_c, "Disclaimer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reports/LabReport/LabReportRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LabReportRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reports/LabReport/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$PatientInformation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reports/LabReport/PatientInformation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$KeyFindings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reports/LabReport/KeyFindings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$LaboratoryTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reports/LabReport/LaboratoryTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$DoctorInterpretation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reports/LabReport/DoctorInterpretation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$ClinicalImpression$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reports/LabReport/ClinicalImpression.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$Recommendations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reports/LabReport/Recommendations.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$MedicationSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reports/LabReport/MedicationSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$WarningSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reports/LabReport/WarningSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$EvidenceSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reports/LabReport/EvidenceSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$ConfidenceSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reports/LabReport/ConfidenceSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$Disclaimer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reports/LabReport/Disclaimer.tsx [app-client] (ecmascript)");
// components/reports/LabReport/LabReportRenderer.tsx
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
;
;
;
;
function LabReportRenderer({ data, unifiedContext }) {
    // Extract patient information from unified_context or data
    const patientInfo = unifiedContext?.patient_information || {};
    const documentInfo = unifiedContext?.document_information || {};
    const labValues = unifiedContext?.lab_values || [];
    const medications = unifiedContext?.medications || [];
    const warnings = unifiedContext?.warnings || [];
    const clinicalFindings = unifiedContext?.clinical_findings || [];
    const confidence = unifiedContext?.confidence_level || unifiedContext?.overall_confidence || 0;
    const confidenceScore = unifiedContext?.confidence_scores?.overall || confidence;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-6 rounded-2xl bg-gray-50 p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Clinical Laboratory Report",
                documentType: unifiedContext?.classification || "Laboratory Report",
                dateGenerated: documentInfo.date || new Date().toISOString(),
                confidence: confidenceScore,
                processingStatus: "complete",
                sourceDocument: unifiedContext?.filename || documentInfo.title
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/LabReportRenderer.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$PatientInformation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                patientName: patientInfo.name,
                age: patientInfo.age,
                gender: patientInfo.gender,
                physician: unifiedContext?.provider_information?.name,
                facility: unifiedContext?.provider_information?.organization,
                reportDate: documentInfo.date,
                collectionDate: documentInfo.date,
                medicalRecordNumber: patientInfo.patient_id
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/LabReportRenderer.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$KeyFindings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                findings: clinicalFindings,
                labValues: labValues
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/LabReportRenderer.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$LaboratoryTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                labValues: labValues
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/LabReportRenderer.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$DoctorInterpretation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                interpretation: data?.answer || ""
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/LabReportRenderer.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$ClinicalImpression$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                impression: data?.suspected_conditions || []
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/LabReportRenderer.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$Recommendations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                recommendations: data?.recommendations || []
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/LabReportRenderer.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$MedicationSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                medications: medications
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/LabReportRenderer.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$WarningSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                warnings: warnings
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/LabReportRenderer.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$EvidenceSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sources: data?.sources || []
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/LabReportRenderer.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$ConfidenceSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                confidence: confidenceScore,
                confidenceLevel: unifiedContext?.confidence_level
            }, void 0, false, {
                fileName: "[project]/components/reports/LabReport/LabReportRenderer.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$Disclaimer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/reports/LabReport/LabReportRenderer.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/reports/LabReport/LabReportRenderer.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = LabReportRenderer;
var _c;
__turbopack_context__.k.register(_c, "LabReportRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/ResponseCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResponseCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDoctorRecommendations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDoctorRecommendations.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/extractDoctorReferral'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/lib/reportTypeDetector'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$LabReportRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reports/LabReport/LabReportRenderer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
function ResponseCard({ data, referral = null, coordinates = null, unifiedContext }) {
    _s();
    // Check if this is a laboratory report - if so, use the premium LabReport renderer
    if (isLabReport(unifiedContext)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reports$2f$LabReport$2f$LabReportRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            data: data,
            unifiedContext: unifiedContext
        }, void 0, false, {
            fileName: "[project]/components/chat/ResponseCard.tsx",
            lineNumber: 91,
            columnNumber: 12
        }, this);
    }
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("diagnosis");
    const { cleanText: displayAnswer } = extractDoctorReferral(data.answer);
    const doctorState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDoctorRecommendations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDoctorRecommendations"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full overflow-hidden rounded-2xl border border-[#ebebef] bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex border-b border-[#ebebef] bg-[#fafafa]",
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        lineNumber: 116,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/chat/ResponseCard.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    activeTab === "diagnosis" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            displayAnswer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-xs font-bold uppercase tracking-widest text-[#7b7b88]",
                                        children: "Clinical response"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClinicalAnswer, {
                                        text: displayAnswer
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this),
                            data.suspected_conditions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-xs font-bold uppercase tracking-widest text-[#6f4ef2]",
                                        children: "Suspected conditions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: data.suspected_conditions.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-[#e4d9ff] bg-[#f4eeff] px-3 py-1 text-sm font-medium text-[#5d42d4]",
                                                children: c
                                            }, i, false, {
                                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                                lineNumber: 150,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 144,
                                columnNumber: 15
                            }, this),
                            data.symptoms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-xs font-bold uppercase tracking-widest text-[#7b7b88]",
                                        children: "Detected symptoms"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: data.symptoms.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-[#ebebef] bg-[#fafafa] px-3 py-1 text-sm text-[#3a3a42]",
                                                children: s
                                            }, i, false, {
                                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                                lineNumber: 168,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 162,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "border-t border-[#ebebef] pt-3 text-xs text-[#8f8f95]",
                                children: "For educational purposes only. Not a substitute for professional medical advice."
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    activeTab === "lifestyle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-4 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecommendationSection, {
                                title: "Foods to Eat",
                                emoji: "✅",
                                tone: "green",
                                items: data.recommendations.foods_to_eat
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecommendationSection, {
                                title: "Foods to Avoid",
                                emoji: "❌",
                                tone: "rose",
                                items: data.recommendations.foods_to_avoid
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecommendationSection, {
                                title: "Drinks to Have",
                                emoji: "💧",
                                tone: "sky",
                                items: data.recommendations.drinks_to_have
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecommendationSection, {
                                title: "Drinks to Avoid",
                                emoji: "🚫",
                                tone: "amber",
                                items: data.recommendations.drinks_to_avoid
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecommendationSection, {
                                title: "Exercise — Do",
                                emoji: "🏃",
                                tone: "violet",
                                items: data.recommendations.exercises_recommended
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecommendationSection, {
                                title: "Exercise — Avoid",
                                emoji: "🛑",
                                tone: "rose",
                                items: data.recommendations.exercises_to_avoid
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            data.recommendations.rest_recommendation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-[#ebebef] bg-[#fafafa] p-4 md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-1 text-xs font-bold uppercase tracking-widest text-[#6f4ef2]",
                                        children: "Rest recommendation"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[#1a1a1a]",
                                        children: data.recommendations.rest_recommendation
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    activeTab === "doctors" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: referral && doctorState.loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-pulse rounded-xl border border-[#ebebef] bg-[#fafafa] p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 w-40 rounded bg-[#ececf2]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 209,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 h-3 w-64 rounded bg-[#ececf2]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 210,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 208,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 207,
                            columnNumber: 15
                        }, this) : doctorsForDisplay.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "py-6 text-center text-sm text-[#8f8f95]",
                            children: referral && doctorState.error ? doctorState.error : "No doctor results available for the detected conditions."
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 214,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                referral && coordinates && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-[#8f8f95]",
                                    children: "Nearby Google Maps results are shown first using your current location, with additional registry matches listed after them when available."
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ResponseCard.tsx",
                                    lineNumber: 222,
                                    columnNumber: 19
                                }, this),
                                doctorsForDisplay.map((doc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DoctorCard, {
                                        doctor: doc
                                    }, i, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 226,
                                        columnNumber: 52
                                    }, this))
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this),
                    activeTab === "sources" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: data.sources.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "py-6 text-center text-sm text-[#8f8f95]",
                            children: "No sources available."
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 235,
                            columnNumber: 15
                        }, this) : data.sources.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SourceBadge, {
                                source: s
                            }, i, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 237,
                                columnNumber: 42
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/ResponseCard.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/ResponseCard.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(ResponseCard, "YHmJpzGJEX79tDZxnEvQPUonR4I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDoctorRecommendations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDoctorRecommendations"]
    ];
});
_c = ResponseCard;
function ClinicalAnswer({ text }) {
    const blocks = text.split(/\n{2,}/).map((block)=>block.trim()).filter(Boolean).filter((block)=>!block.includes("[DOCTOR_REFERRAL]"));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 text-sm leading-relaxed text-[#1a1a1a]",
        children: blocks.map((block, blockIndex)=>{
            if (/^-{3,}$/.test(block)) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "border-[#ebebef]"
                }, blockIndex, false, {
                    fileName: "[project]/components/chat/ResponseCard.tsx",
                    lineNumber: 257,
                    columnNumber: 18
                }, this);
            }
            const lines = block.split("\n").map((line)=>line.trim()).filter(Boolean);
            const table = parseMarkdownTable(lines);
            if (table) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarkdownTable, {
                    table: table
                }, blockIndex, false, {
                    fileName: "[project]/components/chat/ResponseCard.tsx",
                    lineNumber: 263,
                    columnNumber: 18
                }, this);
            }
            const bulletLines = lines.filter((line)=>/^[-*]\s+/.test(line));
            const headingLine = lines[0] ?? "";
            const markdownHeading = headingLine.match(/^(#{1,3})\s+(.+)$/);
            const headingLike = lines.length === 1 && /^(?:[A-Z][A-Z\s&/:-]{4,}|[^.?!:]{2,60}:)$/.test(headingLine);
            if (bulletLines.length > 0 && bulletLines.length === lines.length) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2",
                    children: bulletLines.map((line, lineIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6f4ef2]"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ResponseCard.tsx",
                                    lineNumber: 278,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: renderInlineMarkdown(line.replace(/^[-*]\s+/, ""))
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ResponseCard.tsx",
                                    lineNumber: 279,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, lineIndex, true, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 277,
                            columnNumber: 17
                        }, this))
                }, blockIndex, false, {
                    fileName: "[project]/components/chat/ResponseCard.tsx",
                    lineNumber: 275,
                    columnNumber: 13
                }, this);
            }
            if (markdownHeading) {
                const level = markdownHeading[1].length;
                const headingText = markdownHeading[2];
                const headingClass = level === 1 ? "text-[22px] font-semibold tracking-tight text-[#111]" : level === 2 ? "text-[15px] font-semibold tracking-tight text-[#111]" : "text-xs font-bold uppercase tracking-widest text-[#7b7b88]";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: headingClass,
                            children: renderInlineMarkdown(headingText)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 297,
                            columnNumber: 15
                        }, this),
                        lines.slice(1).map((line, lineIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: renderInlineMarkdown(line)
                            }, lineIndex, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 299,
                                columnNumber: 17
                            }, this))
                    ]
                }, blockIndex, true, {
                    fileName: "[project]/components/chat/ResponseCard.tsx",
                    lineNumber: 296,
                    columnNumber: 13
                }, this);
            }
            if (headingLike && lines[0]) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-bold uppercase tracking-widest text-[#7b7b88]",
                    children: renderInlineMarkdown(lines[0])
                }, blockIndex, false, {
                    fileName: "[project]/components/chat/ResponseCard.tsx",
                    lineNumber: 307,
                    columnNumber: 13
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: lines.map((line, lineIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: renderInlineMarkdown(line)
                    }, lineIndex, false, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 316,
                        columnNumber: 15
                    }, this))
            }, blockIndex, false, {
                fileName: "[project]/components/chat/ResponseCard.tsx",
                lineNumber: 314,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/chat/ResponseCard.tsx",
        lineNumber: 254,
        columnNumber: 5
    }, this);
}
_c1 = ClinicalAnswer;
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
        nodes.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: boldText
        }, `${match.index}-${fullMatch}`, false, {
            fileName: "[project]/components/chat/ResponseCard.tsx",
            lineNumber: 336,
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border border-[#ebebef] bg-white shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "min-w-full border-collapse text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "bg-[#fafafa]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: table.headers.map((header, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border-b border-[#ebebef] px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-[#7b7b88]",
                                    children: renderInlineMarkdown(header)
                                }, i, false, {
                                    fileName: "[project]/components/chat/ResponseCard.tsx",
                                    lineNumber: 379,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 377,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: table.rows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "odd:bg-white even:bg-[#fcfcfd]",
                                children: table.headers.map((_, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border-b border-[#f1f1f4] px-4 py-3 align-top text-[#1a1a1a]",
                                        children: renderInlineMarkdown(row[colIndex] ?? "")
                                    }, colIndex, false, {
                                        fileName: "[project]/components/chat/ResponseCard.tsx",
                                        lineNumber: 392,
                                        columnNumber: 19
                                    }, this))
                            }, rowIndex, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 390,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 388,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/ResponseCard.tsx",
                lineNumber: 375,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/chat/ResponseCard.tsx",
            lineNumber: 374,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chat/ResponseCard.tsx",
        lineNumber: 373,
        columnNumber: 5
    }, this);
}
_c2 = MarkdownTable;
const toneClass = {
    green: "border-emerald-200 bg-emerald-50 text-emerald-900",
    rose: "border-rose-200 bg-rose-50 text-rose-900",
    sky: "border-sky-200 bg-sky-50 text-sky-900",
    amber: "border-amber-200 bg-amber-50 text-amber-900",
    violet: "border-violet-200 bg-violet-50 text-violet-900"
};
function RecommendationSection({ title, emoji, tone, items }) {
    if (!items?.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-xl border p-4 ${toneClass[tone]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-2 text-xs font-bold uppercase tracking-widest opacity-80",
                children: [
                    emoji,
                    " ",
                    title
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/ResponseCard.tsx",
                lineNumber: 429,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-1",
                children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-start gap-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 text-xs opacity-60",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 435,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ResponseCard.tsx",
                                lineNumber: 436,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 434,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/chat/ResponseCard.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/ResponseCard.tsx",
        lineNumber: 428,
        columnNumber: 5
    }, this);
}
_c3 = RecommendationSection;
function DoctorCard({ doctor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-[#ebebef] bg-[#fafafa] p-4 transition hover:border-[#d9c5ff]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-[#111]",
                            children: doctor.name
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 449,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[#6f4ef2]",
                            children: doctor.specialty
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 450,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-[#6b6b76]",
                            children: doctor.address
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 451,
                            columnNumber: 11
                        }, this),
                        doctor.phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-[#6b6b76]",
                            children: doctor.phone
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 452,
                            columnNumber: 27
                        }, this) : null,
                        doctor.rating !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            lineNumber: 454,
                            columnNumber: 13
                        }, this) : null,
                        doctor.mapsUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: doctor.mapsUrl,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "mt-2 inline-block text-xs font-medium text-[#6f4ef2] hover:underline",
                            children: "View on Maps"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 459,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/ResponseCard.tsx",
                    lineNumber: 448,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "shrink-0 text-right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `rounded-full border px-2 py-1 text-xs font-medium ${doctor.badgeTone}`,
                            children: doctor.badgeLabel
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 470,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-[#8f8f95]",
                            children: doctor.sourceText
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 473,
                            columnNumber: 11
                        }, this),
                        doctor.reference ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-[11px] text-[#b09adf]",
                            children: doctor.reference
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ResponseCard.tsx",
                            lineNumber: 475,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/ResponseCard.tsx",
                    lineNumber: 469,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/chat/ResponseCard.tsx",
            lineNumber: 447,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chat/ResponseCard.tsx",
        lineNumber: 446,
        columnNumber: 5
    }, this);
}
_c4 = DoctorCard;
function SourceBadge({ source }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 rounded-xl border border-[#ebebef] bg-[#fafafa] p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-lg",
                children: "📘"
            }, void 0, false, {
                fileName: "[project]/components/chat/ResponseCard.tsx",
                lineNumber: 486,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-[#111]",
                        children: source.book
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 488,
                        columnNumber: 9
                    }, this),
                    source.section && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-[#6b6b76]",
                        children: source.section
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ResponseCard.tsx",
                        lineNumber: 489,
                        columnNumber: 28
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/ResponseCard.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/ResponseCard.tsx",
        lineNumber: 485,
        columnNumber: 5
    }, this);
}
_c5 = SourceBadge;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "ResponseCard");
__turbopack_context__.k.register(_c1, "ClinicalAnswer");
__turbopack_context__.k.register(_c2, "MarkdownTable");
__turbopack_context__.k.register(_c3, "RecommendationSection");
__turbopack_context__.k.register(_c4, "DoctorCard");
__turbopack_context__.k.register(_c5, "SourceBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useUserLocation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserLocation",
    ()=>useUserLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useUserLocation() {
    _s();
    const [coordinates, setCoordinates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [locationAvailable, setLocationAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUserLocation.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || !navigator.geolocation) {
                return;
            }
            navigator.geolocation.getCurrentPosition({
                "useUserLocation.useEffect": (position)=>{
                    setCoordinates({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    setLocationAvailable(true);
                }
            }["useUserLocation.useEffect"], {
                "useUserLocation.useEffect": ()=>{
                    setCoordinates(null);
                    setLocationAvailable(false);
                }
            }["useUserLocation.useEffect"], {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            });
        }
    }["useUserLocation.useEffect"], []);
    return {
        coordinates,
        locationAvailable
    };
}
_s(useUserLocation, "xoVI8wrOx6UeZ+d2h3r1HLnVttE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/ChatBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$MessageBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/MessageBubble.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$InputBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/InputBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ResponseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/ResponseCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/chat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useUserLocation.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/extractDoctorReferral'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function ChatBox({ threadId, threadTitle, messages, firstName, onCommitMessages, onFirstUserMessageTitle, onExportPdf, onExportVisitNotes }) {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { coordinates } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserLocation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatBox.useEffect": ()=>{
            bottomRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["ChatBox.useEffect"], [
        messages,
        isLoading,
        threadId
    ]);
    const handleSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatBox.useCallback[handleSend]": async (text, context)=>{
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
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendMessage"])(text.trim() || "Analyzed medical document.", context);
                const { referral, cleanText } = extractDoctorReferral(response.answer);
                const assistantMsg = {
                    id: crypto.randomUUID(),
                    role: "assistant",
                    content: cleanText,
                    data: {
                        ...response,
                        answer: cleanText
                    },
                    doctorReferral: referral,
                    timestamp: new Date(),
                    unifiedContext: context
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
        }
    }["ChatBox.useCallback[handleSend]"], [
        isLoading,
        messages,
        onCommitMessages,
        onFirstUserMessageTitle,
        threadId
    ]);
    const empty = messages.length === 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full min-h-0 flex-col bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex shrink-0 items-center justify-between gap-3 border-b border-[#ebebef] px-5 py-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-[#f4eeff] text-sm text-[#6f4ef2]",
                                children: "✦"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ChatBox.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block truncate text-lg font-medium tracking-tight text-[#111]",
                                        children: messages.length > 0 ? threadTitle : "MedCortex"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ChatBox.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    messages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[#8f8f95]",
                                        children: "Conversation exports ready"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ChatBox.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ChatBox.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/ChatBox.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    messages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onExportVisitNotes,
                                className: "inline-flex items-center gap-2 rounded-xl border border-[#e8e1fb] bg-[#faf7ff] px-3 py-2 text-xs font-medium text-[#6f4ef2] transition hover:bg-[#f4eeff]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "h-4 w-4",
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ChatBox.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    "Visit Notes"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ChatBox.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onExportPdf,
                                className: "inline-flex items-center gap-2 rounded-xl border border-[#ebebef] bg-white px-3 py-2 text-xs font-medium text-[#3a3a42] transition hover:border-[#d8cdf6] hover:text-[#6f4ef2]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "h-4 w-4",
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ChatBox.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    "Export PDF"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat/ChatBox.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/ChatBox.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/ChatBox.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative min-h-0 flex-1 overflow-y-auto",
                children: empty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-[calc(100%-1rem)] flex-col items-center justify-center px-6 pb-32 pt-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_35%_30%,#faf5ff_0%,#e9dfff_28%,#d9c5ff_52%,#c5a6ff_72%,rgba(197,166,255,0.15)_100%)] shadow-[0_20px_60px_rgba(111,78,242,0.22)]",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatBox.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-lg font-medium text-[#6f4ef2]",
                            children: [
                                "Hello, ",
                                firstName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat/ChatBox.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-1 text-center text-3xl font-semibold tracking-tight text-[#111] sm:text-4xl",
                            children: "How are you feeling today?"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatBox.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 max-w-md text-center text-sm text-[#6b6b76]",
                            children: "Describe your symptoms or health questions below. Your conversations are saved in History so you can pick them up anytime."
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatBox.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/ChatBox.tsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5 px-4 py-6 md:px-8",
                    children: [
                        messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssistantMessageGroup, {
                                message: msg,
                                coordinates: coordinates
                            }, msg.id, false, {
                                fileName: "[project]/components/chat/ChatBox.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this)),
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4eeff] text-sm text-[#6f4ef2]",
                                    children: "✦"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatBox.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 rounded-2xl border border-[#ebebef] bg-[#fafafa] px-4 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 animate-bounce rounded-full bg-[#ae84ff] [animation-delay:0ms]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/ChatBox.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 animate-bounce rounded-full bg-[#ae84ff] [animation-delay:150ms]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/ChatBox.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 animate-bounce rounded-full bg-[#ae84ff] [animation-delay:300ms]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/ChatBox.tsx",
                                            lineNumber: 173,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 text-xs text-[#8f8f95]",
                                            children: "Analysing…"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/ChatBox.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/chat/ChatBox.tsx",
                                    lineNumber: 170,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat/ChatBox.tsx",
                            lineNumber: 166,
                            columnNumber: 15
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatBox.tsx",
                            lineNumber: 180,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: bottomRef
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatBox.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/ChatBox.tsx",
                    lineNumber: 156,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatBox.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 border-t border-[#ebebef] bg-white px-4 pb-4 pt-3 md:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$InputBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onSend: handleSend,
                    disabled: isLoading
                }, void 0, false, {
                    fileName: "[project]/components/chat/ChatBox.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatBox.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/ChatBox.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_s(ChatBox, "yQ1d+ZU7DkMyitqtD6uyYle5TwM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserLocation"]
    ];
});
_c = ChatBox;
function AssistantMessageGroup({ message, coordinates }) {
    if (message.role !== "assistant") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$MessageBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            message: message
        }, void 0, false, {
            fileName: "[project]/components/chat/ChatBox.tsx",
            lineNumber: 205,
            columnNumber: 12
        }, this);
    }
    if (message.data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:ml-11",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ResponseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: message.data,
                referral: message.doctorReferral ?? null,
                coordinates: coordinates,
                unifiedContext: message.unifiedContext
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatBox.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/chat/ChatBox.tsx",
            lineNumber: 210,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$MessageBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        message: message
    }, void 0, false, {
        fileName: "[project]/components/chat/ChatBox.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
_c1 = AssistantMessageGroup;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChatBox");
__turbopack_context__.k.register(_c1, "AssistantMessageGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
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
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAnalytics.useMemo": ()=>{
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
            const topFoods = topEntries(foodFreq, 6).map({
                "useAnalytics.useMemo.topFoods": ([f])=>f
            }["useAnalytics.useMemo.topFoods"]);
            const topExercises = topEntries(exerciseFreq, 5).map({
                "useAnalytics.useMemo.topExercises": ([e])=>e
            }["useAnalytics.useMemo.topExercises"]);
            const totalSessions = threads.filter({
                "useAnalytics.useMemo": (t)=>t.messages.length > 0
            }["useAnalytics.useMemo"]).length;
            const uniqueSymptoms = Object.keys(symptomFreq).length;
            const uniqueConditions = Object.keys(conditionFreq).length;
            const daysActive = activityByDay.filter({
                "useAnalytics.useMemo": (d)=>d > 0
            }["useAnalytics.useMemo"]).length;
            const recentThreads = [
                ...threads
            ].filter({
                "useAnalytics.useMemo.recentThreads": (t)=>t.messages.length > 0
            }["useAnalytics.useMemo.recentThreads"]).sort({
                "useAnalytics.useMemo.recentThreads": (a, b)=>b.updatedAt - a.updatedAt
            }["useAnalytics.useMemo.recentThreads"]).slice(0, 5).map({
                "useAnalytics.useMemo.recentThreads": (t)=>{
                    const topCond = t.messages.filter({
                        "useAnalytics.useMemo.recentThreads": (m)=>m.role === "assistant" && m.data
                    }["useAnalytics.useMemo.recentThreads"]).flatMap({
                        "useAnalytics.useMemo.recentThreads": (m)=>m.data.suspected_conditions
                    }["useAnalytics.useMemo.recentThreads"]).at(0) ?? null;
                    return {
                        ...t,
                        topCond
                    };
                }
            }["useAnalytics.useMemo.recentThreads"]);
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
        }
    }["useAnalytics.useMemo"], [
        referenceTime,
        threads
    ]);
}
_s(useAnalytics, "nwk+m61qLgjDVUp4IGV/072DDN4=");
// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────
function StatCard({ icon: Icon, label, value, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 rounded-2xl border border-[#ebebef] bg-white p-4 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${color}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl font-bold text-[#111]",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/components/chat/Dashboard.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c = StatCard;
// ── Horizontal bar chart (pure SVG) ──────────────────────────────────────────
function SymptomBarChart({ data }) {
    if (data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${TOTAL_W} ${height}`,
        className: "w-full overflow-visible",
        "aria-label": "Symptom frequency chart",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "barGrad",
                    x1: "0",
                    x2: "1",
                    y1: "0",
                    y2: "0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: "#ae84ff"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/Dashboard.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
_c1 = SymptomBarChart;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: !hasData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            text: "No activity in the last 30 days."
        }, void 0, false, {
            fileName: "[project]/components/chat/Dashboard.tsx",
            lineNumber: 269,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: `0 0 ${W} ${H + 20}`,
            className: "w-full",
            "aria-label": "Daily activity over the last 30 days",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "areaGrad",
                        x1: "0",
                        x2: "0",
                        y1: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#ae84ff",
                                stopOpacity: 0.35
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 278,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
                ].map((frac)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: areaD,
                    fill: "url(#areaGrad)"
                }, void 0, false, {
                    fileName: "[project]/components/chat/Dashboard.tsx",
                    lineNumber: 295,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                pts.map((p, i)=>data[i] > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                weekLabels.map((wl)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
_c2 = ActivitySparkline;
// ── Condition tag cloud ───────────────────────────────────────────────────────
function ConditionCloud({ data }) {
    if (data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
            text: "No conditions detected yet."
        }, void 0, false, {
            fileName: "[project]/components/chat/Dashboard.tsx",
            lineNumber: 342,
            columnNumber: 7
        }, this);
    }
    const max = data[0][1];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-2",
        children: data.map(([cond, count])=>{
            const weight = count / max;
            const size = 11 + Math.round(weight * 10);
            const opacity = 0.55 + weight * 0.45;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: size,
                    opacity
                },
                className: "rounded-full border border-[#d9c5ff] bg-[#f4eeff] px-3 py-1 font-medium text-[#5d42d4]",
                children: [
                    cond,
                    count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c3 = ConditionCloud;
// ── Empty state ───────────────────────────────────────────────────────────────
function EmptyState({ icon: Icon, text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center gap-2 py-8 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "h-8 w-8 text-[#d9c5ff]",
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/components/chat/Dashboard.tsx",
                lineNumber: 379,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c4 = EmptyState;
// ── Activity level pill ───────────────────────────────────────────────────────
const activityColor = {
    low: "bg-amber-100 text-amber-700 border-amber-200",
    medium: "bg-sky-100 text-sky-700 border-sky-200",
    high: "bg-emerald-100 text-emerald-700 border-emerald-200"
};
function Pill({ label, subtle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `rounded-full border px-3 py-1 text-sm font-medium ${subtle ? "border-[#e4d9ff] bg-[#f4eeff] text-[#5d42d4]" : "border-[#ebebef] bg-[#fafafa] text-[#3a3a42]"}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/components/chat/Dashboard.tsx",
        lineNumber: 394,
        columnNumber: 5
    }, this);
}
_c5 = Pill;
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
    _s1();
    const [referenceTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Dashboard.useState": ()=>Date.now()
    }["Dashboard.useState"]);
    const analytics = useAnalytics(threads, referenceTime);
    const timelineEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[timelineEntries]": ()=>buildTimelineEntries(threads)
    }["Dashboard.useMemo[timelineEntries]"], [
        threads
    ]);
    const avatarLetter = (user?.name?.trim()?.[0] ?? user?.email?.[0] ?? "?").toUpperCase();
    const allergiesList = user?.allergies?.split(",").map((s)=>s.trim()).filter(Boolean) ?? [];
    const conditionsList = user?.conditions?.split(",").map((s)=>s.trim()).filter(Boolean) ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full overflow-y-auto bg-[#fafafa]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden border-b border-[#ebebef] bg-white px-6 py-8 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c5a6ff] to-[#6f4ef2] text-3xl font-bold text-white shadow-[0_8px_24px_rgba(111,78,242,0.35)]",
                                children: avatarLetter
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 511,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-sm text-[#8f8f95]",
                                        children: user?.email
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                        lineNumber: 523,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap gap-2",
                                        children: [
                                            user?.age && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            user?.gender && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-[#ebebef] bg-[#fafafa] px-3 py-1 text-xs capitalize text-[#3a3a42]",
                                                children: user.gender
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 531,
                                                columnNumber: 17
                                            }, this),
                                            user?.activity_level && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 py-6 md:px-8 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3 md:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                                label: "Chat Sessions",
                                value: analytics.totalSessions,
                                color: "bg-[#f4eeff] text-[#6f4ef2]"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 553,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                                label: "Unique Symptoms",
                                value: analytics.uniqueSymptoms,
                                color: "bg-rose-50 text-rose-500"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 559,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
                                label: "Conditions Flagged",
                                value: analytics.uniqueConditions,
                                color: "bg-sky-50 text-sky-500"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 565,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
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
                    (allergiesList.length > 0 || conditionsList.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-[#ebebef] bg-white p-5 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#6f4ef2]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    allergiesList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-1.5 text-xs font-medium uppercase tracking-wider text-[#8f8f95]",
                                                children: "Allergies"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 589,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: allergiesList.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
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
                                    conditionsList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-1.5 text-xs font-medium uppercase tracking-wider text-[#8f8f95]",
                                                children: "Known Conditions"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 601,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: conditionsList.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-3 rounded-2xl border border-[#ebebef] bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#6f4ef2]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SymptomBarChart, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2 rounded-2xl border border-[#ebebef] bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#6f4ef2]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConditionCloud, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-[#ebebef] bg-white p-5 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#6f4ef2]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivitySparkline, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-[#ebebef] bg-white p-5 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5 flex items-center justify-between gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#6f4ef2]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            timelineEntries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                                text: "No clinical timeline yet. Start a few conversations and your progression will appear here."
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 661,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: timelineEntries.slice(0, 6).map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex w-6 flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1 h-3 w-3 rounded-full bg-[#a98cff]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 21
                                                    }, this),
                                                    index < timelineEntries.slice(0, 6).length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1 rounded-2xl border border-[#f0ebfa] bg-[#fcfbff] p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-3 md:flex-row md:items-start md:justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "truncate text-sm font-semibold text-[#111]",
                                                                        children: entry.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                                        lineNumber: 678,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: [
                                                                    entry.newSymptoms.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                    entry.newConditions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                    entry.newRecommendations.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 text-sm leading-relaxed text-[#4a4654]",
                                                        children: entry.summary
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 705,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 grid gap-3 md:grid-cols-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#9c90b8]",
                                                                        children: "Symptoms"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                                        lineNumber: 710,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2",
                                                                        children: entry.symptoms.slice(0, 4).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#9c90b8]",
                                                                        children: "Conditions"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                                        lineNumber: 720,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2",
                                                                        children: entry.conditions.slice(0, 4).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#9c90b8]",
                                                                        children: "Recommendation changes"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                                        lineNumber: 730,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2",
                                                                        children: [
                                                                            entry.newRecommendations.slice(0, 3).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700",
                                                                                    children: item
                                                                                }, item, false, {
                                                                                    fileName: "[project]/components/chat/Dashboard.tsx",
                                                                                    lineNumber: 735,
                                                                                    columnNumber: 29
                                                                                }, this)),
                                                                            entry.newRecommendations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-[#ebebef] bg-white p-5 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#6f4ef2]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-emerald-200 bg-emerald-50 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
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
                                            analytics.topFoods.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-1",
                                                children: analytics.topFoods.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start gap-1.5 text-sm text-emerald-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 text-xs opacity-60",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                                lineNumber: 775,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-violet-200 bg-violet-50 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-violet-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
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
                                            analytics.topExercises.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-1",
                                                children: analytics.topExercises.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start gap-1.5 text-sm text-violet-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 text-xs opacity-60",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                                lineNumber: 800,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-sky-200 bg-sky-50 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-sky-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
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
                                            analytics.latestRest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm leading-relaxed text-sky-800",
                                                children: analytics.latestRest
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/Dashboard.tsx",
                                                lineNumber: 819,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-[#ebebef] bg-white p-5 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#6f4ef2]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
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
                            analytics.recentThreads.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                                text: "No sessions yet. Start a conversation to track your health journey."
                            }, void 0, false, {
                                fileName: "[project]/components/chat/Dashboard.tsx",
                                lineNumber: 838,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-[#ebebef]",
                                children: analytics.recentThreads.map((t)=>{
                                    const date = new Date(t.updatedAt).toLocaleDateString("en", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric"
                                    });
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "truncate text-sm font-medium text-[#111]",
                                                        children: t.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 23
                                                    }, this),
                                                    t.topCond && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "shrink-0 text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-[#a8a8b0]",
                                                        children: date
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/Dashboard.tsx",
                                                        lineNumber: 866,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s1(Dashboard, "KoIfKaev9dKAIK+Z7c211BSHHXI=", false, function() {
    return [
        useAnalytics
    ];
});
_c6 = Dashboard;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "SymptomBarChart");
__turbopack_context__.k.register(_c2, "ActivitySparkline");
__turbopack_context__.k.register(_c3, "ConditionCloud");
__turbopack_context__.k.register(_c4, "EmptyState");
__turbopack_context__.k.register(_c5, "Pill");
__turbopack_context__.k.register(_c6, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/ChatWorkspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left-close.js [app-client] (ecmascript) <export default as PanelLeftClose>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-client] (ecmascript) <export default as PanelLeft>");
(()=>{
    const e = new Error("Cannot find module '@/lib/chat-export'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/lib/chat-storage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/lib/session'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/ChatBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/Dashboard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const skipSaveOnce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const draftThreadIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [initialWorkspaceState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getInitialWorkspaceState);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialWorkspaceState.user);
    const [threads, setThreads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialWorkspaceState.threads);
    const [activeThreadId, setActiveThreadId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialWorkspaceState.activeThreadId);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [menuThreadId, setMenuThreadId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("chat");
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWorkspace.useEffect": ()=>{
            const storedUser = getStoredUser();
            if (!storedUser) {
                return;
            }
            const saved = loadChatState(storedUser.id);
            const timeoutId = window.setTimeout({
                "ChatWorkspace.useEffect.timeoutId": ()=>{
                    setUser(storedUser);
                    setThreads([
                        createDraftThread(),
                        ...(saved?.threads ?? []).filter({
                            "ChatWorkspace.useEffect.timeoutId": (t)=>t.messages.length > 0
                        }["ChatWorkspace.useEffect.timeoutId"])
                    ]);
                    setActiveThreadId(DRAFT_THREAD_ID);
                }
            }["ChatWorkspace.useEffect.timeoutId"], 0);
            return ({
                "ChatWorkspace.useEffect": ()=>window.clearTimeout(timeoutId)
            })["ChatWorkspace.useEffect"];
        }
    }["ChatWorkspace.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWorkspace.useEffect": ()=>{
            if (skipSaveOnce.current) {
                skipSaveOnce.current = false;
                return;
            }
            if (user) {
                saveChatState(user.id, getRealThreads(threads), activeThreadId);
            }
        }
    }["ChatWorkspace.useEffect"], [
        threads,
        activeThreadId,
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWorkspace.useEffect": ()=>{
            if (!menuThreadId) return;
            const close = {
                "ChatWorkspace.useEffect.close": ()=>setMenuThreadId(null)
            }["ChatWorkspace.useEffect.close"];
            document.addEventListener("pointerdown", close);
            return ({
                "ChatWorkspace.useEffect": ()=>document.removeEventListener("pointerdown", close)
            })["ChatWorkspace.useEffect"];
        }
    }["ChatWorkspace.useEffect"], [
        menuThreadId
    ]);
    const activeThread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatWorkspace.useMemo[activeThread]": ()=>{
            if (activeThreadId === DRAFT_THREAD_ID) {
                return threads.find({
                    "ChatWorkspace.useMemo[activeThread]": (thread)=>thread.id === DRAFT_THREAD_ID
                }["ChatWorkspace.useMemo[activeThread]"]) ?? createDraftThread();
            }
            return threads.find({
                "ChatWorkspace.useMemo[activeThread]": (thread)=>thread.id === activeThreadId
            }["ChatWorkspace.useMemo[activeThread]"]) ?? null;
        }
    }["ChatWorkspace.useMemo[activeThread]"], [
        threads,
        activeThreadId
    ]);
    const filteredThreads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatWorkspace.useMemo[filteredThreads]": ()=>{
            const q = search.trim().toLowerCase();
            const list = getRealThreads(threads);
            if (!q) return list;
            return list.filter({
                "ChatWorkspace.useMemo[filteredThreads]": (t)=>t.title.toLowerCase().includes(q)
            }["ChatWorkspace.useMemo[filteredThreads]"]);
        }
    }["ChatWorkspace.useMemo[filteredThreads]"], [
        threads,
        search
    ]);
    const pinnedThreads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatWorkspace.useMemo[pinnedThreads]": ()=>sortPinnedThreads(filteredThreads)
    }["ChatWorkspace.useMemo[pinnedThreads]"], [
        filteredThreads
    ]);
    const grouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatWorkspace.useMemo[grouped]": ()=>groupThreadsByRecency(filteredThreads.filter({
                "ChatWorkspace.useMemo[grouped]": (thread)=>!thread.pinned
            }["ChatWorkspace.useMemo[grouped]"]))
    }["ChatWorkspace.useMemo[grouped]"], [
        filteredThreads
    ]);
    const realThreadCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatWorkspace.useMemo[realThreadCount]": ()=>getRealThreads(threads).length
    }["ChatWorkspace.useMemo[realThreadCount]"], [
        threads
    ]);
    const handleNewChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatWorkspace.useCallback[handleNewChat]": ()=>{
            draftThreadIdRef.current = null;
            setThreads({
                "ChatWorkspace.useCallback[handleNewChat]": (prev)=>[
                        createDraftThread(),
                        ...getRealThreads(prev)
                    ]
            }["ChatWorkspace.useCallback[handleNewChat]"]);
            setActiveThreadId(DRAFT_THREAD_ID);
            setSearch("");
            setView("chat");
        }
    }["ChatWorkspace.useCallback[handleNewChat]"], []);
    const handleSelectThread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatWorkspace.useCallback[handleSelectThread]": (id)=>{
            setActiveThreadId(id);
            setView("chat");
        }
    }["ChatWorkspace.useCallback[handleSelectThread]"], []);
    const commitMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatWorkspace.useCallback[commitMessages]": (threadId, messages)=>{
            const resolvedThreadId = threadId === DRAFT_THREAD_ID ? draftThreadIdRef.current ?? DRAFT_THREAD_ID : threadId;
            setThreads({
                "ChatWorkspace.useCallback[commitMessages]": (prev)=>{
                    const timestamp = Date.now();
                    const realThreads = getRealThreads(prev);
                    const existingIndex = realThreads.findIndex({
                        "ChatWorkspace.useCallback[commitMessages].existingIndex": (thread)=>thread.id === resolvedThreadId
                    }["ChatWorkspace.useCallback[commitMessages].existingIndex"]);
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
                }
            }["ChatWorkspace.useCallback[commitMessages]"]);
        }
    }["ChatWorkspace.useCallback[commitMessages]"], []);
    const setThreadTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatWorkspace.useCallback[setThreadTitle]": (threadId, title)=>{
            const trimmed = title.trim().slice(0, 56) || "New chat";
            if (threadId === DRAFT_THREAD_ID) {
                const createdThread = newThread();
                draftThreadIdRef.current = createdThread.id;
                setActiveThreadId(createdThread.id);
                setThreads({
                    "ChatWorkspace.useCallback[setThreadTitle]": (prev)=>[
                            createDraftThread(),
                            {
                                ...createdThread,
                                title: trimmed
                            },
                            ...getRealThreads(prev)
                        ]
                }["ChatWorkspace.useCallback[setThreadTitle]"]);
                return;
            }
            setThreads({
                "ChatWorkspace.useCallback[setThreadTitle]": (prev)=>[
                        createDraftThread(),
                        ...getRealThreads(prev).map({
                            "ChatWorkspace.useCallback[setThreadTitle]": (thread)=>thread.id === threadId ? {
                                    ...thread,
                                    title: trimmed,
                                    updatedAt: Date.now()
                                } : thread
                        }["ChatWorkspace.useCallback[setThreadTitle]"])
                    ]
            }["ChatWorkspace.useCallback[setThreadTitle]"]);
        }
    }["ChatWorkspace.useCallback[setThreadTitle]"], []);
    const renameThread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatWorkspace.useCallback[renameThread]": (id)=>{
            const thread = getRealThreads(threads).find({
                "ChatWorkspace.useCallback[renameThread].thread": (item)=>item.id === id
            }["ChatWorkspace.useCallback[renameThread].thread"]);
            if (!thread) return;
            const nextTitle = window.prompt("Rename this conversation", thread.title)?.trim();
            if (!nextTitle) return;
            setThreads({
                "ChatWorkspace.useCallback[renameThread]": (prev)=>[
                        createDraftThread(),
                        ...getRealThreads(prev).map({
                            "ChatWorkspace.useCallback[renameThread]": (item)=>item.id === id ? {
                                    ...item,
                                    title: nextTitle.slice(0, 56),
                                    updatedAt: item.updatedAt
                                } : item
                        }["ChatWorkspace.useCallback[renameThread]"])
                    ]
            }["ChatWorkspace.useCallback[renameThread]"]);
            setMenuThreadId(null);
        }
    }["ChatWorkspace.useCallback[renameThread]"], [
        threads
    ]);
    const togglePinThread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatWorkspace.useCallback[togglePinThread]": (id)=>{
            setThreads({
                "ChatWorkspace.useCallback[togglePinThread]": (prev)=>[
                        createDraftThread(),
                        ...getRealThreads(prev).map({
                            "ChatWorkspace.useCallback[togglePinThread]": (item)=>item.id === id ? {
                                    ...item,
                                    pinned: !item.pinned
                                } : item
                        }["ChatWorkspace.useCallback[togglePinThread]"])
                    ]
            }["ChatWorkspace.useCallback[togglePinThread]"]);
            setMenuThreadId(null);
        }
    }["ChatWorkspace.useCallback[togglePinThread]"], []);
    const deleteThread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatWorkspace.useCallback[deleteThread]": (id)=>{
            setMenuThreadId(null);
            setThreads({
                "ChatWorkspace.useCallback[deleteThread]": (prev)=>{
                    const filtered = getRealThreads(prev).filter({
                        "ChatWorkspace.useCallback[deleteThread].filtered": (thread)=>thread.id !== id
                    }["ChatWorkspace.useCallback[deleteThread].filtered"]);
                    setActiveThreadId({
                        "ChatWorkspace.useCallback[deleteThread]": (currentId)=>currentId === id ? DRAFT_THREAD_ID : currentId
                    }["ChatWorkspace.useCallback[deleteThread]"]);
                    return [
                        createDraftThread(),
                        ...filtered
                    ];
                }
            }["ChatWorkspace.useCallback[deleteThread]"]);
        }
    }["ChatWorkspace.useCallback[deleteThread]"], []);
    const handleLogout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatWorkspace.useCallback[handleLogout]": ()=>{
            clearSession();
            router.push("/login");
        }
    }["ChatWorkspace.useCallback[handleLogout]"], [
        router
    ]);
    const handleExportPdf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatWorkspace.useCallback[handleExportPdf]": ()=>{
            if (activeThread && activeThread.messages.length > 0) {
                exportThreadSummaryAsPdf(activeThread);
            }
        }
    }["ChatWorkspace.useCallback[handleExportPdf]"], [
        activeThread
    ]);
    const handleExportVisitNotes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatWorkspace.useCallback[handleExportVisitNotes]": ()=>{
            if (activeThread && activeThread.messages.length > 0) {
                exportVisitNotes(activeThread);
            }
        }
    }["ChatWorkspace.useCallback[handleExportVisitNotes]"], [
        activeThread
    ]);
    const firstName = firstNameFromUser(user);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex relative h-screen flex-col overflow-hidden bg-[#fafafa] text-[#1a1a1a] md:flex-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `flex max-h-[38vh] shrink-0 flex-col border-b border-[#ebebef] bg-[#f3f3f4] transition-all duration-300 overflow-hidden md:max-h-none md:h-full md:border-b-0 md:border-r ${isSidebarOpen ? "w-full md:w-[260px] p-4" : "hidden md:flex md:w-[68px] py-4 px-2"}`,
                children: !isSidebarOpen ? // --- MINI SIDEBAR (COLLAPSED STATE) ---
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full w-full flex-col items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setIsSidebarOpen(true),
                            className: "flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-xl text-[#8f8f95] hover:bg-[#e4e4ea] hover:text-[#111] transition-colors",
                            title: "Open sidebar",
                            "aria-label": "Open sidebar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__["PanelLeft"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                handleNewChat();
                                setIsSidebarOpen(true);
                            },
                            className: "flex flex-col h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-[#0d0d0d] text-white hover:bg-[#222] transition-colors mt-2",
                            title: "New chat",
                            "aria-label": "New chat",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-4 w-4 pointer-events-none mb-1",
                                    strokeWidth: 2.5
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setView("dashboard");
                                setIsSidebarOpen(true);
                            },
                            className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors mt-2 ${view === "dashboard" ? "bg-[#f4eeff] text-[#6f4ef2]" : "text-[#8f8f95] hover:bg-[#e4e4ea] hover:text-[#111]"}`,
                            title: "Dashboard",
                            "aria-label": "Dashboard",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setIsSidebarOpen(true),
                            className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#8f8f95] hover:bg-[#e4e4ea] hover:text-[#111] transition-colors",
                            title: "Search and Recent Chats",
                            "aria-label": "Search and Recent Chats",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleLogout,
                            className: "mt-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:opacity-80 transition-opacity",
                            title: "Log out",
                            "aria-label": "Log out",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full w-full flex-col min-w-[228px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-5 flex items-center justify-between gap-2 px-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f4eeff] text-sm text-[#6f4ef2]",
                                            children: "✦"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                            lineNumber: 352,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsSidebarOpen(false),
                                    className: "flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-xl text-[#8f8f95] hover:bg-[#e4e4ea] hover:text-[#111] transition-colors z-50",
                                    title: "Close sidebar",
                                    "aria-label": "Close sidebar",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__["PanelLeftClose"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setView("dashboard"),
                            className: `mb-2 flex h-11 w-full shrink-0 items-center gap-2.5 rounded-xl px-3.5 text-sm font-medium transition ${view === "dashboard" ? "bg-[#f4eeff] text-[#6f4ef2] shadow-inner" : "text-[#3a3a42] hover:bg-white/80 hover:text-[#6f4ef2]"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                    className: "h-4 w-4 shrink-0",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate",
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleNewChat,
                            className: "mb-3 flex h-11 w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0d0d0d] text-sm font-medium text-white transition hover:bg-[#222]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-4 w-4 shrink-0 pointer-events-none text-white",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 389,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mb-4 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8f8f95]"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-h-0 flex-1 overflow-y-auto w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-[#8f8f95]",
                                    children: "History"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 406,
                                    columnNumber: 15
                                }, this),
                                pinnedThreads.length === 0 && grouped.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "px-2 text-sm text-[#8f8f95]",
                                    children: search.trim() && realThreadCount > 0 ? "No chats match your search." : "No chats yet. Start with New chat."
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                    lineNumber: 410,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        pinnedThreads.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-1.5 px-2 text-[11px] font-medium uppercase tracking-wide text-[#a8a8b0]",
                                                    children: "Pinned"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-0.5 w-full",
                                                    children: pinnedThreads.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `group relative flex items-center gap-0.5 rounded-lg pl-2.5 pr-1 transition ${t.id === activeThreadId ? "bg-white shadow-sm" : "hover:bg-white/70"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative shrink-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
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
                                                                        menuThreadId === t.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            role: "menu",
                                                                            className: "absolute right-0 top-full z-30 mt-0.5 w-40 overflow-hidden rounded-xl border border-[#ebebef] bg-white py-1 shadow-lg",
                                                                            onPointerDown: (e)=>e.stopPropagation(),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        grouped.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-1.5 px-2 text-[11px] font-medium uppercase tracking-wide text-[#a8a8b0]",
                                                        children: group.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                        lineNumber: 503,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-0.5 w-full",
                                                        children: group.items.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `group relative flex items-center gap-0.5 rounded-lg pl-2.5 pr-1 transition ${t.id === activeThreadId ? "bg-white shadow-sm" : "hover:bg-white/70"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleSelectThread(t.id),
                                                                        className: `min-w-0 flex-1 truncate py-2 pr-1 text-left text-[14px] ${t.id === activeThreadId ? "font-medium text-[#111]" : "text-[#3a3a42]"}`,
                                                                        children: t.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                                        lineNumber: 513,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative shrink-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
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
                                                                            menuThreadId === t.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                role: "menu",
                                                                                className: "absolute right-0 top-full z-30 mt-0.5 w-40 overflow-hidden rounded-xl border border-[#ebebef] bg-white py-1 shadow-lg",
                                                                                onPointerDown: (e)=>e.stopPropagation(),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-auto border-t border-[#ebebef] pt-3 shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 rounded-xl px-2 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0d0d0d] text-sm font-semibold text-white",
                                        children: (user?.name?.trim()?.[0] ?? user?.email?.[0] ?? "?").toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                        lineNumber: 591,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "truncate text-sm font-medium text-[#111]",
                                                children: user?.name?.trim() || "Signed in"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chat/ChatWorkspace.tsx",
                                                lineNumber: 595,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleLogout,
                                        className: "shrink-0 rounded-lg p-2 text-[#8f8f95] transition hover:bg-white hover:text-[#111]",
                                        title: "Log out",
                                        "aria-label": "Log out",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex min-w-0 flex-1 flex-col relative w-full h-full bg-white",
                children: view === "dashboard" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    user: user,
                    threads: getRealThreads(threads)
                }, void 0, false, {
                    fileName: "[project]/components/chat/ChatWorkspace.tsx",
                    lineNumber: 617,
                    columnNumber: 11
                }, this) : activeThread ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(ChatWorkspace, "tjPqgQnqSBpagT/gCWpKR+7Vrok=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ChatWorkspace;
var _c;
__turbopack_context__.k.register(_c, "ChatWorkspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0-vuwn3._.js.map