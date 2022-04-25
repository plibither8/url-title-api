async function handleRequest(request: Request): Promise<Response> {
  const path = new URL(request.url).pathname;
  let requestedUrl: string = path.substring(1);
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
    return new Response(`Error: ${err.message}`, {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
