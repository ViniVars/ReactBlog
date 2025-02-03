import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Glo } from "./App";
export default function Login() {
  const { setUser, setPass, user, pass } = useContext(Glo);
  const router = useNavigate();
  const uref = useRef("");
  const pref = useRef("");
  return (
    <>
      <div>
        <input type="text" className="border-2" ref={uref} />
        <input type="text" className="border-2" ref={pref} />
        <button
          onClick={() => {
            setUser(uref.current.value);
            setPass(pref.current.value);
            router("/Home");
          }}
        >
          Login
        </button>
      </div>
    </>
  );
}
