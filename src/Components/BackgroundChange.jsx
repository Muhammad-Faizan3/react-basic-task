import { useState } from "react"

function BackgroundChange() {
    const [bgColor,setBgColor] = useState('white')

    let changeColor = () => {
        if(bgColor==='white') {
            setBgColor('lightblue');             
        }else{
            setBgColor ('while')
        }
        
    }
    return(
        <div style={{
            backgroundColor: bgColor,
            height: '10vh',
            padding: '20px'
        }}>
            <button onClick={changeColor}>
                BackgroundColorChange
            </button>
        </div>
    )
}
export default BackgroundChange;