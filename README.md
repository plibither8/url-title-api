# url-title-api

Quick and tiny API that fetches a webpage's title from the `<title></title>` field, given its URL.

## Usage

**Base URL:** [https://title.mihir.ch](https://title.mihir.ch).

**GET** `/:url`

`url` - The URL of the page you want the title of (with or without the `http/s` protocol).

**Example**:

- GET [https://title.mihir.ch/https://example.com](https://title.mihir.ch/https://example.com)
- Response (text/plain) `Example Domain`

## License

[MIT](LICENSE)
