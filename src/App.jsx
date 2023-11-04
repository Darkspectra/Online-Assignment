import { Outlet } from 'react-router-dom'
import NavBar from './Components/Navbar'

function App() {


  return (
    <div>
      <div className="w-full mx-auto">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
