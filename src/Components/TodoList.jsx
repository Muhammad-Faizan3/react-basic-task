import { useState } from "react"

function TodoList() {
    const [task,setTask] = useState("")
    const [tasks,setTasks] = useState([])

    const addTask = () => {
        if(task.trim() === '') return; 
            setTasks([...tasks,task])
            setTask('')
    }
    return(
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add Todo</button>

            {tasks.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

        </div>
    )
}
export default TodoList