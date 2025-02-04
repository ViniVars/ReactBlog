import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import AddBlog from "./AddBlog.jsx";
import AllBlogs from "./AllBlogs.jsx";
import Display from "./Display.jsx";

export const Glo = createContext();


function App() {
  return (
    <Vini>
        <NavBar />
      <Routes>
        {/* <Route  path="/" element={<Login/>} /> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/New" element={<AddBlog/>}/>
        <Route path="/All" element={<AllBlogs/>}/>
        <Route path="/Details/:slug" element={<Display/>} />
      </Routes>
    </Vini>
  );
}

function Vini({ children }) {
  const [user, setUser] = useState("Guest");
  const [pass, setPass] = useState("");
  const [tog, setTog] = useState(true)
  return (
    <Glo.Provider value={{ setUser, setPass, user, pass , setTog, tog}}>
      {children}
    </Glo.Provider>
  );
}

export default App;
