import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./Home.jsx";
import AddBlog from "./AddBlog.jsx";
import AllBlogs from "./AllBlogs.jsx";
import Display from "./Display.jsx";
import Edit from "./Edit.jsx";

export const Glo = createContext();


function App() {
  return (
    <Vini>
      <div className="h-screen w-screen bg-black">
        <div className='w-screen flex items-center justify-between text-white h-[20%] font-bold text-lg'>
          <NavBar />
        </div>
        <div className="w-full h-[80%]">
          <Routes>
            {/* <Route  path="/" element={<Login/>} /> */}
            <Route path="/" element={<Home/>}/>
            <Route path="/New" element={<AddBlog/>}/>
            <Route path="/All" element={<AllBlogs/>}/>
            <Route path="/Details/:slug" element={<Display/>} />
            <Route path="/editBlog/:slug" element={<Edit/>} />
          </Routes>
        </div>
      </div>
    </Vini>
  );
}

function Vini({ children }) {
  const [user, setUser] = useState("Hi, Guest");
  const [pass, setPass] = useState("");
  const [tog, setTog] = useState(true)
  return (
    <Glo.Provider value={{ setUser, setPass, user, pass , setTog, tog}}>
      {children}
    </Glo.Provider>
  );
}

export default App;
