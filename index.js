const fastify = require('fastify')()
const fetch = require('node-fetch')

fastify.register(require('fastify-url-data'))

fastify.get('/*', async (req, reply) => {
	const { path } = req.urlData()
	const url = 'http://' + decodeURIComponent(path).substring(1)
	const rawText = await fetch(url)
		.then(res => res.text())
		.catch(err => {
			if (err) {
				reply
					.code(400)
					.send({
						statusCode: 400,
						message: 'BAD REQUEST: ' + err.message
					})
			}
		})

	const matches = rawText.match(/<title>(.+)<\/title>/)
	const title = matches ? matches[1] : ''

	reply.send(title)
})

fastify.listen(process.env.PORT || 3000, err => {
	if (err) throw err
})
