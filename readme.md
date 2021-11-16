## Start

```
$ npm i
$ npm run dev
```

## Build

```
$ npm run build
```

## Memo

#### react router

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

#### react-query

- before

```tsx
// Coins
const [coins, setCoins] = useState<ICoin[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  (async () => {
    const response = await fetch("https://api.coinpaprika.com/v1/coins");
    const json = await response.json();
    setCoins(json.slice(0, 100));
    setLoading(false);
  })();
}, []);
```

- after (caching)

```tsx
// api
export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}

// Coins
const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
console.log(isLoading, data);
```
