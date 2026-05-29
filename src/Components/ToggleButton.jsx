import { useState } from "react"

function ToggleButton() {
    const [show,setShow] = useState()
    return(
        <div>
            <button onClick={() => setShow(!show)}>
                {show? 'hide' : 'show'}
            </button>
            {show&&<h1>Hello World</h1>}
        </div>
    )
}
export default ToggleButton