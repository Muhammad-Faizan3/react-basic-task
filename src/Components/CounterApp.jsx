import { useState } from "react"

function CounterApp() {
    const [count,setCount] = useState(0)
    return(
        <div>
            <p>{count}</p>
            <button onClick={() => {
                setCount(count +1)
            }}>Increase</button>
             <button onClick={() => {
               count > 0 && setCount(count -1)
            }}>Decrease</button>
        </div>
    )
}
export default CounterApp