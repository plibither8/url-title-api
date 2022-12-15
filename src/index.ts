import { Hono } from "hono";

const app = new Hono();

app.get("*", async (c) => {
  const { pathname } = new URL(c.req.url);
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
    return c.text(matches?.[1] ?? "");
  } catch (err) {
    return c.text(`Error: ${err}`, 500);
  }
});

export default app;
