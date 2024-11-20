import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

const TodoList = () => {
    // const todos = [
    //     {
    //         id: 1,
    //         title: "Learn React TypeScript",
    //         isComplete: false
    //     },
    //     {
    //         id: 2,
    //         title: "Subscribe Youtube HoiDanIT",
    //         isComplete: true
    //     },
    //     {
    //         id: 3,
    //         title: "Learn English",
    //         isComplete: true
    //     },
    // ]

    const [listTodo, setListTodo] = useState<ITodo[]>([]);

    const addNewTodo = (todo: ITodo) => {
        setListTodo([...listTodo, todo]);
    }

    const deleteTodo = (id: number) => {
        const todoUpdate = listTodo.filter((todo) => todo.id !== id)
        console.log(">>check todo update: ", todoUpdate);
        setListTodo(todoUpdate)
    }

    return (
        <div style={{
            width: "600px",
            margin: "50px auto",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px"
        }}>
            <div
                style={{
                    padding: "10px 0",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ccc",
                    borderBottomStyle: "solid"
                }}

            >My todo list: </div>
            <br />
            <TodoInput
                // name={"Dat"}
                addNewTodo={addNewTodo}
            />
            <TodoData
                deleteTodo={deleteTodo}
                listTodo={listTodo}
            // owner={"NTDat"}
            // age={20}
            // isDeveloper={true}
            />
        </div>
    )
}

export default TodoList;
