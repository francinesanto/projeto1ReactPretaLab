import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Contador from "./pages/ContadorPage"
function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contador" element ={<Contador/>} />
      </Routes>
    </BrowserRouter>
  </div>
  )

}

export default App
