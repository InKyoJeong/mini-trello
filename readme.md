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

## Memo

#### react router

- Link to

```tsx
// Coins
<Link
  to={{
    pathname: `/${coin.id}`,
    state: { name: coin.name },
  }}
>
```

```js
// Coin
const { state } = useLocation();
console.log(state.name);
```

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
