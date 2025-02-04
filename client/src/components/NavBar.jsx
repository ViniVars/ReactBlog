import React, { useContext } from 'react' 
import { Glo } from '../App'
import { Link, useNavigate } from 'react-router-dom'

export default function NavBar() {
    const {user, tog} = useContext(Glo)
    const router = useNavigate()
  return (
    <>
        <div className='bg-black w-screen flex items-center justify-between text-white h-[150px] font-bold text-lg'>
            <div className='flex gap-2 items-center h-full justify-center'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className='flex items-center justify-between gap-10'>
                    <img className='scale-150' src="../../public/web-design-library.png" alt="" /> 
                    <span>{user || "Guest"}</span>
                </div>
            </div>
            <div></div>
            {tog ? (

                <div className='flex justify-content items-center gap-20'>
                    <Link to='/'>Home</Link>
                    <Link to='/New'>New</Link>
                    <Link to='/All'>Blogs</Link>
                    <Link to='/'>Log out</Link>
                    <Link></Link>
                </div>
            ) : 
            (
                <div className='flex justify-content items-center gap-20'>
                    <Link to='/Home'>Edit</Link>
                    <Link to='/New'>Delete</Link>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                </div>
            )
            }
            
        </div>
    </>
  )
}




