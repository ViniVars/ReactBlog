import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Glo } from './App'
export default function Display() {
    const { slug } = useParams()
    const {setTog, setPass} = useContext(Glo)
    setPass(slug);
    setTog(false);
    useEffect(()=>{

        return () =>{
            setTog(true)
        }
    }, [])
    const Blog = JSON.parse(localStorage.getItem(slug))
  return (
    <>
        <div class="mdis h-full w-full flex justify-center items-center gap-4 text-white bg-black p-10 font-bold">
            <div className='h-full w-[50%] text-wrap flex flex-col'>
                <div className='h-[30%] flex items-center justify-center text-4xl whitespace-pre-wrap'>
                    Title: {Blog.title}
                </div>
                <div className='h-[70%] w-full'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{Blog.content}
                </div>
            </div>
            <div className='h-full w-[50%] flex justify-center items-center'>
                <img className='scale-50 rounded-[24px]' src={Blog.ig} alt="" />
            </div>
        </div>  
    </>
  )
}
