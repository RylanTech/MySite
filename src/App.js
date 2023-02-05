import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Home from "./Home";
import Pricing from "./Pricing";
import Basic from "./Basic";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/basic" element={<Basic/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
