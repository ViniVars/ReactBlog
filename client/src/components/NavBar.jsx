import React, { useContext } from 'react' 
import { Glo } from '../App'
import { Link, useNavigate } from 'react-router-dom'

export default function NavBar() {
    const {user} = useContext(Glo)
    const router = useNavigate()
  return (
    <>
        <div className='bg-black w-screen flex items-center justify-between text-white h-[150px]'>
            <div className='flex gap-2 items-center h-full justify-center'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className='flex items-center justify-between gap-10'>
                    <img className='scale-200' src="../../public/web-design-library.png" alt="" /> 
                    <span>{user || "Guest"}</span>
                </div>
            </div>
            <div></div>
            <div className='flex justify-content items-center gap-20'>
                <Link to='/Home'>Home</Link>
                <Link to='/New'>New</Link>
                <Link to='/Blogs'>Blogs</Link>
                <Link to='/'>Log Out</Link>
                <Link></Link>
            </div>
            
        </div>
    </>
  )
}




