import { Router } from "itty-router";

const router = Router();

router.get("*", async (request) => {
  const { pathname } = new URL(request.url);
  let requestedUrl: string = pathname.substring(1);
  ["http:/", "https:/"].forEach((prefix) => {
    if (requestedUrl.startsWith(prefix))
      requestedUrl = requestedUrl.substring(prefix.length);
  });
  requestedUrl = `http://${requestedUrl}`;

  try {
    const url = new URL(requestedUrl);
    const html = await fetch(url.href).then((res) => res.text());
    const matches = html.match(/<title>(.*?)<\/title>/);
    return new Response(matches?.[1] ?? "");
  } catch (err: any) {
    return new Response(`Error: ${err.message}`, { status: 500 });
  }
});

export default {
  async fetch(request: Request): Promise<Response> {
    return router.handle(request);
  },
};
