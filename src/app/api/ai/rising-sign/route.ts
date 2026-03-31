import { NextRequest, NextResponse } from "next/server";
import { generateRisingSignInterpretation, resolveTonePreset } from "@/lib/ai-content";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      risingSign?: string;
      sunSign?: string;
      birthTime?: string;
      tonePreset?: string;
    };
    if (!body.risingSign) {
      return NextResponse.json({ ok: false, message: "risingSign zorunlu." }, { status: 400 });
    }
    const data = await generateRisingSignInterpretation({
      risingSign: body.risingSign,
      sunSign: body.sunSign,
      birthTime: body.birthTime,
      tonePreset: resolveTonePreset(body.tonePreset, "wissenschaftlich"),
    });
    if (!data) {
      return NextResponse.json({ ok: false, message: "Yorum su an uretilemiyor." }, { status: 503 });
    }
    return NextResponse.json({ ok: true, data });
  } catch {
    return NextResponse.json({ ok: false, message: "Sunucu hatasi." }, { status: 500 });
  }
}
