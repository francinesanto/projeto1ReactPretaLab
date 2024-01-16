import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import ContadorPage from "./pages/ContadorPage"
import ErrorPage from "./pages/ErrorPage"
function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contador" element ={<ContadorPage/>} />
        <Route path='*' element = {<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )

}

export default App
