import { useState } from "react"

function InputText() {
    const [text,setText] = useState('')
    return(
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <p>Text Return: {text}</p>
        </div>
    )
}
export default InputText