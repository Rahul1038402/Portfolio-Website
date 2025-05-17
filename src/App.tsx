import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { NotFound } from "./Pages/NotFound"
import './index.css'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
