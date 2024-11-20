import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}


interface IProps {
    name?: string,
    addNewTodo: (ntdat: ITodo) => void
}

const TodoInput = (props: IProps) => {
    const { addNewTodo } = props;
    const [todo, setTodo] = useState<string>("");

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
    }

    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        if (!todo) {
            alert("empty todo")
            return;
        }
        addNewTodo({
            id: randomInteger(1, 100000),
            title: todo,
            isComplete: false
        })
        setTodo("")
    }

    return (
        <div style={{ display: "flex", gap: 15, marginBottom: "20px" }}>
            <input
                type="text"
                value={todo}
                onChange={handleOnChange}
            />
            <button onClick={handleClick}>Add todo</button>
        </div>
    )
}

export default TodoInput;