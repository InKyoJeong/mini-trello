import React from "react";
import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function Todo() {
  const { register, handleSubmit } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    console.log("addToDo", data.toDo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", {
            required: "Please Write a ToDo",
          })}
          placeholder="Write a todo"
        />
      </form>
    </div>
  );
}

export default Todo;
