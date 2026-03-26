import { NextResponse } from "next/server";
import { generateDreamInterpretation, TONE_PRESETS, type TonePreset } from "@/lib/ai-content";

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      dreamText?: string;
      zodiacSign?: string;
      tonePreset?: string;
    };

    const tonePreset = TONE_PRESETS.includes(body.tonePreset as TonePreset)
      ? (body.tonePreset as TonePreset)
      : "soft";

    const dreamText = typeof body.dreamText === "string" ? body.dreamText.trim() : "";
    if (!dreamText || dreamText.length < 10) {
      return NextResponse.json(
        { ok: false, message: "Lutfen ruyanizi en az 10 karakter olacak sekilde yazin." },
        { status: 400 }
      );
    }

    const data = await generateDreamInterpretation({
      dreamText,
      zodiacSign: typeof body.zodiacSign === "string" ? body.zodiacSign : undefined,
      tonePreset,
    });

    if (!data) {
      return NextResponse.json(
        { ok: false, message: "AI ruya yorumu su an uretilemedi." },
        { status: 503 }
      );
    }

    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, message: "Beklenmeyen sunucu hatasi." }, { status: 500 });
  }
}
