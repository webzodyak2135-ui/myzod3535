import { NextResponse } from "next/server";

export const runtime = "edge";

function resolveBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

function isAuthorized(request: Request) {
  const expected = process.env.CRON_SECRET;
  if (!expected) return true;

  const authHeader = request.headers.get("authorization") ?? "";
  return authHeader === `Bearer ${expected}`;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, message: "Yetkisiz erisim." }, { status: 401 });
  }

  const baseUrl = resolveBaseUrl();
  const targets = ["/burclar/gunluk", "/burclar/haftalik"];

  const results = await Promise.all(
    targets.map(async (path) => {
      try {
        const response = await fetch(`${baseUrl}${path}`, {
          method: "GET",
          cache: "no-store",
        });

        return {
          path,
          ok: response.ok,
          status: response.status,
        };
      } catch {
        return {
          path,
          ok: false,
          status: 500,
        };
      }
    })
  );

  const ok = results.every((item) => item.ok);
  return NextResponse.json({ ok, baseUrl, results }, { status: ok ? 200 : 207 });
}
