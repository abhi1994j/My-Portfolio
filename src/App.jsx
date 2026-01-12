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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
