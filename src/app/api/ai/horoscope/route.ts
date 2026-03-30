import { NextResponse } from "next/server";
import { generateDailyHoroscopeBatch, TONE_PRESETS, type TonePreset, ZODIAC_SIGNS } from "@/lib/ai-content";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      dateISO?: string;
      signs?: string[];
      tonePreset?: string;
    };

    const safeSigns = Array.isArray(body.signs)
      ? body.signs.filter((s): s is string => typeof s === "string" && s.length > 0)
      : ZODIAC_SIGNS.map((s) => s.slug);

    const tonePreset = TONE_PRESETS.includes(body.tonePreset as TonePreset)
      ? (body.tonePreset as TonePreset)
      : "uzman";

    const data = await generateDailyHoroscopeBatch({
      dateISO: body.dateISO,
      signs: safeSigns,
      tonePreset,
    });

    if (!data) {
      return NextResponse.json(
        { ok: false, message: "AI icerigi su an uretilemedi. Fallback kullanin." },
        { status: 503 }
      );
    }

    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, message: "Beklenmeyen sunucu hatasi." }, { status: 500 });
  }
}
