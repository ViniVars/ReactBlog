import React, { useContext } from 'react'
import { Glo } from './App'
export default function Home() {
    const {user, pass} = useContext(Glo)
  return (
    <>
      <div class="main h-[545px] w-[1536px] flex justify-around items center bg-black font-bold">
            <div class="h-full flex flex-col justify-center items-center gap-10 text-white text-8xl">
                <div class="h-full"></div>
                <div class="h-full">Hi, Welcome.</div>
                <div class="h-full"></div>
            </div>
            <div><img src="../../public/image-removebg-preview.png" alt=""  /></div>
        </div>
    </>
  )
}
