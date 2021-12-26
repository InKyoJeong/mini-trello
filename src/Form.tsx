import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [todo, setTodo] = useState("");
//   const [todoError, setTodoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodoError("");
//     setTodo(value);
//   };

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(todo);
//     if (todo.length < 10) {
//       return setTodoError("Todo should be longer");
//     }
//     console.log("submit");
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={todo} placeholder="Write a to do" />
//         <button>Add</button>
//         {todoError !== "" ? todoError : null}
//       </form>
//     </div>
//   );
// }

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
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  const onValid = (data: IForm) => {
    if (data.password !== data.password2) {
      setError(
        "password",
        { message: "비밀번호가 같지 않습니다." },
        { shouldFocus: true }
      );
    }

    // setError("extraError", { message: "서버가 offline" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
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
        <span>{errors?.name?.message}</span>

        <input
          {...register("email", {
            required: "Email을 입력해주세요.",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "naver 이메일만 가능합니다",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("password", {
            required: "비밀번호를 입력하세요!",
            minLength: {
              value: 4,
              message: "비밀번호가 너무 짧아요",
            },
          })}
          placeholder="Password"
        />
        <input
          {...register("password2", {
            required: "비밀번호를 입력하세요!",
            minLength: {
              value: 4,
              message: "비밀번호가 너무 짧아요",
            },
          })}
          placeholder="Password Confirm"
        />

        <span>{errors?.password?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
