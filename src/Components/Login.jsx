import { useState } from "react"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let handleSubmit = () => {
        if(email === 'faizan@gmail.com' && password === '123456') {
            alert('Login Successful')
        }else{
            alert('invaild Password')
        }
    }

    return (
        <div>
            <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Login