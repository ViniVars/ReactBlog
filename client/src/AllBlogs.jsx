import React, { useEffect, useState } from 'react'
import Card from './components/Card';

export default function AllBlogs() {
    let temp = []
    const [Blog, setBlog] = useState(false)
    useEffect(() => {
        let s = parseInt(localStorage.getItem('bcount'));
        for(let i = 1; i <= s; i++){
            let Blog = localStorage.getItem(`Blog${i}`);
            if(!Blog){
                console.log(i)
                continue;
            }
            Blog = JSON.parse(Blog)
            Blog = {...Blog, Bid : i}
            temp.push((Blog));
        }
        setBlog(temp)
    }, [])
  return (
    <>  
        <div class="allblogs h-[545px] w-[1536px] grid gap-10 grid-cols-3 p-15 px-17 scrollbar-hide bg-black text-white font-semibold overflow-x-auto">
            {Blog && Blog.map((ele) => {
                return (
                    <Card blog = {ele}/>
                )
            })}
        </div>
    </>
  )
}
