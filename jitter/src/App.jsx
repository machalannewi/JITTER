import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Contact from "./pages/Contact";
import NewsAndEvents from "./pages/NewsAndEvents";
import NewsAndEventId from "./pages/NewsAndEventId";
import "./globals.css";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="font-mulish">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<NewsAndEvents />} />
          <Route path="/news/:id" element={<NewsAndEventId />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
