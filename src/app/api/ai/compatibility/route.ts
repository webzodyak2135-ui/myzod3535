import { NextResponse } from "next/server";
import { generateCompatibility, TONE_PRESETS, type TonePreset } from "@/lib/ai-content";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      sign1?: string;
      sign2?: string;
      tonePreset?: string;
    };

    const tonePreset = TONE_PRESETS.includes(body.tonePreset as TonePreset)
      ? (body.tonePreset as TonePreset)
      : "uzman";

    const sign1 = typeof body.sign1 === "string" ? body.sign1.trim() : "";
    const sign2 = typeof body.sign2 === "string" ? body.sign2.trim() : "";

    if (!sign1 || !sign2) {
      return NextResponse.json(
        { ok: false, message: "Lutfen iki burc secin." },
        { status: 400 }
      );
    }

    const data = await generateCompatibility({ sign1, sign2, tonePreset });
    if (!data) {
      return NextResponse.json(
        { ok: false, message: "AI uyum analizi su an uretilemedi." },
        { status: 503 }
      );
    }

    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, message: "Beklenmeyen sunucu hatasi." }, { status: 500 });
  }
}
