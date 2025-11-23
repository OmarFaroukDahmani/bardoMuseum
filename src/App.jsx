// Merged all 'react-router-dom' imports into one line
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Page Imports
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Museum from "./pages/Museum"
import Visit from "./pages/Visit"

// Component Imports
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';



function App() {
  const location = useLocation();

  return (
    <>
      {/* These components are persistent and stay on every page */}
      <Cursor />
      <Navbar />

      {/* AnimatePresence handles the exit/enter animations */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/museum" element={<Museum />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/visit" element={<Visit/>} />          
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;