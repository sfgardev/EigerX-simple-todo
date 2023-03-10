import { useRef } from "react";

type Props = {
  onAddTodo: (text: string) => void;
};

const AddTodoForm = ({ onAddTodo }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        if (
          inputRef.current === null ||
          inputRef.current?.value.trim() === ""
        ) {
          return;
        }

        e.preventDefault();

        onAddTodo(inputRef.current.value);
        inputRef.current.value = "";
        inputRef.current.focus();
      }}
    >
      <input ref={inputRef} type="text" placeholder="Add Todo" />
      <button>Add todo</button>
    </form>
  );
};

export default AddTodoForm;
