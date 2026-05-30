import { useState } from "react"

function CheckBox() {
    const [complete,setComplete] = useState(false)
    return(
        <div>
            <input type="checkbox" onChange={(e) => setComplete(e.target.checked)} />

            {complete && <h1>Complete</h1>}
        </div>
    )
}
export default CheckBox;