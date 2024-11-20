

// [1, 2 ,3] //number[]
interface IProps {
    listTodo: {
        id: number;
        title: string;
        isComplete: boolean;
    }[],
    deleteTodo: (value: number) => void
}



const TodoData = (props: IProps) => {
    const { listTodo, deleteTodo } = props



    return (
        <div>
            {listTodo.map(item => {
                return (
                    <div key={item.id} >
                        <div style={{ padding: "10px 0" }}>{item.id} - {item.title}
                            &nbsp;&nbsp;&nbsp;<button onClick={() => deleteTodo(item.id)}>Delete</button></div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;