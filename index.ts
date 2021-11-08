import { listenAndServe } from "https://deno.land/std/http/server.ts";

function handler(req: Request) {
  let referer = req.headers.get("referer");
  if (referer) {
    let url = new URL("https://api.qrserver.com/v1/create-qr-code/");
    let sp = url.searchParams;
    sp.set("data", referer);
    sp.set("format", "png");
    sp.set("qzone", "1");
    return fetch(url);
//		header("Cache-Control: no-cache, no-store, must-revalidate");
//		header("Content-type: image/png");
//		readfile($url);    
  } else {
    return new Response("sry");
  }
}

await listenAndServe(":8000", handler);
