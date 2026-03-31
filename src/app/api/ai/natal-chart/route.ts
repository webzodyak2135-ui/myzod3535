import { NextRequest, NextResponse } from "next/server";
import { generateNatalChartReading, resolveTonePreset } from "@/lib/ai-content";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      birthDate?: string;
      birthTime?: string;
      birthPlace?: string;
      tonePreset?: string;
    };
    if (!body.birthDate) {
      return NextResponse.json({ ok: false, message: "birthDate zorunlu." }, { status: 400 });
    }
    const data = await generateNatalChartReading({
      birthDate: body.birthDate,
      birthTime: body.birthTime,
      birthPlace: body.birthPlace,
      tonePreset: resolveTonePreset(body.tonePreset, "wissenschaftlich"),
    });
    if (!data) {
      return NextResponse.json({ ok: false, message: "Harita yorumu su an uretilemiyor." }, { status: 503 });
    }
    return NextResponse.json({ ok: true, data });
  } catch {
    return NextResponse.json({ ok: false, message: "Sunucu hatasi." }, { status: 500 });
  }
}
