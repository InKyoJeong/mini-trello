## Start

```
$ npm i
$ npm run dev
```

## Build

```
$ npm run build
```

## React Hook Form

#### before

```js
function ToDoList() {
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodoError("");
    setTodo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
    if (todo.length < 10) {
      return setTodoError("Todo should be longer");
    }
    console.log("submit");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} placeholder="Write a to do" />
        <button>Add</button>
        {todoError !== "" ? todoError : null}
      </form>
    </div>
  );
}
```

#### after

```js
import { useForm } from "react-hook-form";
interface IForm {
  email: string;
  name: string;
  password: string;
  password2: string;
  extraError?: string;
}

// input마다 state를 만들 필요가 없다
function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm <
  IForm >
  {
    defaultValues: {
      email: "@naver.com",
    },
  };

  const onValid = (data: IForm) => {
    if (data.password !== data.password2) {
      setError(
        "password",
        { message: "비밀번호가 같지 않습니다." },
        { shouldFocus: true }
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("Email", { required: true, minLength: 10 })}
          placeholder="Email"
        />
        <input
          {...register("Password", {
            required: "비밀번호를 입력하세요!",
            minLength: {
              value: 4,
              message: "비밀번호가 너무 짧아요",
            },
          })}
          placeholder="Password"
        />

        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
```

- input의 `required`가 아닌 `{ required: true }`를 사용하면, 어떤 항목이 비어있는지 이동시켜주고 브라우저에서 require를 지울수도 없음. html이 아니라 js에서 validation가능
- onValid 함수는 form 데이터가 유효할때만 호출되는함수

### validate

```js
<input
  {...register("name", {
    required: "name을 입력해주세요.",
    validate: (value) =>
      value.includes("ingg") ? "ingg를 포함할수 없어요" : true,
  })}
  placeholder="Name"
/>
```

- `validate : { (value) => !value.includes("ingg") || "error message"}` 공식 문서에는 이렇게 설명

#### 여러 검사는 객체로

```js
<input
  {...register("name", {
    required: "name을 입력해주세요.",
    validate: {
      noIngg: (value) =>
        value.includes("ingg") ? "ingg를 포함할수 없어요" : true,
      noInkk: (value) =>
        value.includes("inkk") ? "inkk를 포함할수 없어요" : true,
    },
  })}
  placeholder="Name"
/>
```

- ` noIngg: async(value) => ...`와 같이 비동기로 서버에다가 응답을 받을 수도 있음
