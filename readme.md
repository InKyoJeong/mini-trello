## Start

```
$ npm i
$ npm run dev
```

## Build

```
$ npm run build
```

## Setup

- typescript
- react-router
- react-query
- styled-components

## memo

#### fetch

```js
(async () => {
  const response = await fetch("https://api...");
  const json = await response.json();
})();

// 한줄로 캡슐화
(async () => {
  const response = await (await fetch(`https://api...`)).json();
})();
```
