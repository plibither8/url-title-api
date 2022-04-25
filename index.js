const fastify = require("fastify")();
const fetch = require("node-fetch");

fastify.register(require("fastify-url-data"));

fastify.get("/*", async (req, reply) => {
  const { headers } = req;
  const ip =
    headers["cf-connecting-ip"] ||
    headers["x-real-ip"] ||
    headers["x-forwarded-for"];
  console.log(headers.host, headers.referer, ip);
  const { path } = req.urlData();
  const url = "http://" + decodeURIComponent(path).substring(1);
  const rawText = await fetch(url)
    .then((res) => res.text())
    .catch((err) => {
      if (err) {
        reply.code(400).send({
          statusCode: 400,
          message: "BAD REQUEST: " + err.message,
        });
      }
    });

  const matches = rawText.match(/<title>(.+)<\/title>/);
  const title = matches ? matches[1] : "";

  reply.send(title);
});

fastify.listen(process.env.PORT || 3000, (err) => {
  if (err) throw err;
});
