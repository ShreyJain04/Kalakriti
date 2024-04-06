import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Events from "./components/pages/events";
import Clubs from "./components/pages/clubs";
import Navbar from "./components/navbar";
import Team from "./components/pages/team";

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route index element={<Home_page />} />
        <Route path="/" element={<Home_page />} />
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home_page() {
  return (
    <>
      <Home />
      <Clubs />
      <Team />
      <Events />
      <Contact />
    </>
  );
}
export default App;
