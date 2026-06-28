import { NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

export async function POST(request: Request) {
  try {
    const incomingFormData = await request.formData();
    const file = incomingFormData.get("file");

    if (!(file instanceof Blob)) {
      throw new Error("Missing audio file");
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${BACKEND_URL}/transcribe`, {
      method: "POST",
      body: formData,
    });

    const data = (await response.json()) as { text?: string; error?: string };

    if (!response.ok) {
      console.error("Backend transcription error:", data);
      throw new Error(data.error || "Transcription request failed");
    }

    return NextResponse.json({ text: data.text ?? "" });
  } catch (error) {
    console.error("Transcription error:", error);
    return NextResponse.json({ error: "Transcription failed" }, { status: 500 });
  }
}
