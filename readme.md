## ToDoList with recoil

#### Start

```
$ npm i
$ npm run dev
```

### toDo

#### argument 넘기는방법

```js
import React from "react";
import { IToDo } from "../atoms";

function ToDo({ text, category }: IToDo) {
  const onClick = (newCategory: IToDo["category"]) => {
    console.log(newCategory);
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )}
      {category !== "TO_DO" && (
        <button onClick={() => onClick("TO_DO")}>ToDo</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>Done</button>
      )}
    </li>
  );
}

export default ToDo;
```

#### name 이용하는 방법

```js
function ToDo({ text, category }: IToDo) {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    console.log(name);
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          ToDo
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}
```

<br>

### selector

- state를 원하는대로 변형할 수 있음

```js
// ex
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
});

// TodoList.tsx
const [toDo, doing, done] = useRecoilValue(toDoSelector);
```

`get` function을 이용해서 `selector` 내부로 `atom`을 가져올 수 있다.
