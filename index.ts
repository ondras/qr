import { listenAndServe } from "https://deno.land/std/http/server.ts";


const headers = { "Content-type": "image/jpeg" };

async function handler(req: Request) {
	let referer = req.headers.get("referer");
	if (!referer) {
		const img = await Deno.readFile("hypnotoad.jpg");
		return new Response(img, {headers});
	}

	let url = new URL("https://api.qrserver.com/v1/create-qr-code/");
	let sp = url.searchParams;
	sp.set("data", referer);
	sp.set("format", "svg");
	sp.set("qzone", "1");
	return fetch(url.toString());
}

await listenAndServe(":8000", handler);
