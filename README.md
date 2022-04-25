# url-title-api

Quick and tiny API that fetches a webpage's title from the `<title></title>` field, given its URL.

## Usage

**Base URL:** [https://title.mihir.ch](https://title.mihir.ch) OR [https://url-title.vercel.app](https://url-title.vercel.app)

**GET** `/:url`

`url` - The URL of the page you want the title of (with or without the `http/s` protocol).

**Example**:

- GET [https://url-title.vercel.app/https://mihir.ch](https://url-title.vercel.app/https://mihir.ch)
- Response (text/plain) `Mihir Chaturvedi · plibither8`

## License

[MIT](LICENSE)
