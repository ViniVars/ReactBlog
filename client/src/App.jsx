import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Login from "./Login.jsx";

export const Glo = createContext();


function App() {
  return (
    <Vini>
        <NavBar />
      <Routes>
        <Route  path="/" element={<Login/>} />
      </Routes>
    </Vini>
  );
}

function Vini({ children }) {
  const [user, setUser] = useState("Vini");
  const [pass, setPass] = useState("Vini");

  return (
    <Glo.Provider value={{ setUser, setPass, user, pass }}>
      {children}
    </Glo.Provider>
  );
}

export default App;
