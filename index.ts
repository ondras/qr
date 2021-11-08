import { listenAndServe } from "https://deno.land/std/http/server.ts";

async function handler(req: Request) {
  let referer = req.headers.get("referer");
  if (referer) {
    let url = new URL("https://api.qrserver.com/v1/create-qr-code/");
    let sp = url.searchParams;
    sp.set("data", referer);
    sp.set("format", "png");
    sp.set("qzone", "1");
    return fetch(url);
  } else {
    try {
      const img = await Deno.readFile("hypnotoad.jpg");
      return new Response(img);
    } catch (e) {
      return new Response(e.message);
    }
  }
}

await listenAndServe(":8000", handler);
