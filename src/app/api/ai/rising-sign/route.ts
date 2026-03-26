import { NextRequest, NextResponse } from "next/server";
import { generateRisingSignInterpretation, TonePreset } from "@/lib/ai-content";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      risingSign?: string;
      sunSign?: string;
      birthTime?: string;
      tonePreset?: TonePreset;
    };
    if (!body.risingSign) {
      return NextResponse.json({ ok: false, message: "risingSign zorunlu." }, { status: 400 });
    }
    const data = await generateRisingSignInterpretation({
      risingSign: body.risingSign,
      sunSign: body.sunSign,
      birthTime: body.birthTime,
      tonePreset: body.tonePreset,
    });
    if (!data) {
      return NextResponse.json({ ok: false, message: "Yorum su an uretilemiyor." }, { status: 503 });
    }
    return NextResponse.json({ ok: true, data });
  } catch {
    return NextResponse.json({ ok: false, message: "Sunucu hatasi." }, { status: 500 });
  }
}
