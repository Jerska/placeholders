# Placeholders

Generate placeholders images using unsplash's API.

## Usage

### tl;dr

```html
<embed src="https://img-placeholder.herokuapp.com/restaurant?w=200&h=200&fit=crop" />
```

**Click here to test it out [https://img-placeholder.herokuapp.com/restaurant?w=200&h=200&fit=crop](https://img-placeholder.herokuapp.com/restaurant?w=200&h=200&fit=crop)**

### Detailed usage

#### `/:search_term`

You can call this service using a search term to look for some specific images on Unsplash.
This allows for domain-specific placeholders, e.g. `/restaurant`, `/architecture` or `/landscape`.
It downloads and caches 30 results for this query that it then randomly serves at each call.

You can pass as query parameters all the [supported parameters](https://unsplash.com/documentation#supported-parameters) to manipulate the picture, e.g. `?w=200&h=200&fit=crop`.

## FAQ

### Why `<embed />` and not `<img />`?

For [security reasons, 3rd-party images are not allowed to load in SVG as images](https://bugzilla.mozilla.org/show_bug.cgi?id=628747).
Using `<embed>` instead removes this limitation.

For proper attribution following [Unsplash guidelines](https://unsplash.com/documentation#guidelines--crediting), we need to serve `svg`s to include the proper tooltip.

### The service doesn't answer or answers with a 429.

If loaded, the service might not answer to your request because it has been rate-limited.
Retry an hour later.

## Acknowledgements

All pictures are provided by [Unsplash](https://unsplash.com/), and the service is built on their API.
