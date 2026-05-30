
import './App.css'
import BackgroundChange from './Components/BackgroundChange'
import CheckBox from './Components/CheckBox'
import CounterApp from './Components/CounterApp'     
import InputText from './Components/InputText'
import Login from './Components/Login'
import Students from './Components/Students'
import TodoList from './Components/TodoList'
import ToggleButton from './Components/ToggleButton'

function App() {

  return (
    <>
      <CounterApp/>
      <InputText/>
      <Students/>
      <ToggleButton/>
      <BackgroundChange/>
      <Login/>
      <TodoList/>
      <CheckBox/>
    </>
  )
}

export default App
