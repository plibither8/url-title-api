# url-title-api

Quick and tiny API that fetches a webpage's title from the `<title></title>` field, given its URL.

## Usage

**Base URL:** [https://title.mihir.ch](https://title.mihir.ch) OR [https://url-title.now.sh](https://url-title.now.sh)

**GET** `/:url`

`url` - The URL of the page you want the title of **without the protocol (`http://` or `https://`)**.

**Example**:

* GET [`https://url-title.now.sh/mihir.ch`](https://url-title.now.sh/mihir.ch)
* Repsonse (text/plain) `Mihir Chaturvedi · plibither8`

## License

[MIT](LICENSE)
