import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Home from "./Home";
import Pricing from "./Pricing";
import Basic from "./Basic";
import Contact from "./Contact";
import { useEffect, useState } from "react";
import About from "./About";
import Profile from "./Portfolio";

function App() {
  const [theme, setTheme] = useState("dark");
  const [backgroundColor, setBackgoundColor] = useState("background-color: black;");
  const [textColor, setTextColor] = useState("color: white");

  const [cardColor, setCardColor] = useState("background-color: rgb(20, 20, 20)!important;");
  let cards = document.getElementsByClassName("PageCard");

  function toggleTheme() {
    let t = localStorage.getItem("theme");
    if (t === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
      setBackgoundColor("background-color: white;");
      setTextColor("color: black");
      setCardColor("background-color: white!important");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      setBackgoundColor("background-color: black;");
      setTextColor("color: white;");
      setCardColor("background-color: rgb(20, 20, 20)!important;")
    }
  }
  document.body.style = backgroundColor + textColor
  for (let i = 0; i < cards.length; i++) {
    cards[i].style = cardColor;
  }

  useEffect(() => {
    cards = document.getElementsByClassName("PageCard");
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "light") {
        setBackgoundColor("background-color: white;");
        setTextColor("color: black");
        setCardColor("background-color: white!important;")
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <Home toggleTheme={toggleTheme} theme={theme} setTheme={setTheme} />
      <Outlet />
      <Routes>
        <Route path="/" element={<HomePage cardColor={cardColor} />} backgroundColor={backgroundColor} />
        <Route path="portfolio" element={<Profile cardColor={cardColor} textColor={textColor}/>} />
        <Route path="about" element={<About cardColor={cardColor} textColor={textColor}/>} />
        <Route path="basic" element={<Basic cardColor={cardColor}/>} />
        <Route path="contact" element={<Contact cardColor={cardColor} textColor={textColor}/>} />
        <Route path="*" element={<center><p>Woops! Something went wrong!<br/>Please head back to the homepage.</p></center>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
