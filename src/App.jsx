import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Museum from "./pages/Museum"
import Contact from "./pages/Contact"
import Visit from "./pages/Visit"
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path=""  element={<Home/>} />
          <Route  path="/gallery"  element={<Gallery/>} />
          <Route  path="/visit"  element={<Visit/>} />
          <Route  path="/museum"  element={<Museum/>} />
          <Route  path="/contact"  element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
