import { NextResponse } from "next/server";
import { generateDreamInterpretation, resolveTonePreset } from "@/lib/ai-content";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      dreamText?: string;
      zodiacSign?: string;
      tonePreset?: string;
    };

    const tonePreset = resolveTonePreset(body.tonePreset, "soft");

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
