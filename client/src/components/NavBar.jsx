import React, { useContext} from 'react' 
import { Glo } from '../App'
import { Link, useNavigate} from 'react-router-dom'

export default function NavBar() {
    const {user, tog, pass} = useContext(Glo)
    function Del(){
        localStorage.removeItem(pass)
    }
  return (
    <>
        
            <div className='flex gap-2 items-center h-full justify-center'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className='flex items-center justify-between gap-10'>
                    <img className='scale-150' src="../../public/web-design-library.png" alt="" /> 
                    <span>{user || "Hi, Guest"}</span>
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
                    <Link to={`/editBlog/${pass}`}>Edit</Link>
                    <Link to='/All' onClick={Del}>Delete</Link>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                </div>
            )
            }
        
    </>
  )
}




