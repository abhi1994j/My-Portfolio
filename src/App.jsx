import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeLayout from "./pages/HomeLayout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<HomeLayout/>} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />      */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
