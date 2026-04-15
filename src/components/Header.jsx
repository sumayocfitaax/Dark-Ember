import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'



function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [isIscrolled, setIsIscrolled] = useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 50){
        setIsIscrolled(true)
      }else{
        setIsIscrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return ()=> window.removeEventListener('scroll', handleScroll)
  }, [])

  
  return (
    <div className="">

      {/* NAVBAR */}
      <nav className={` top-0 fixed  left-0 w-full z-20 flex justify-between items-center px-8 py-4 text-white ${isIscrolled ? ' bg-black/30 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>

        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-500">
          Dark Ember
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8">
          <Link to='/'>
           <li className="hover:text-yellow-500 cursor-pointer">Home</li>
          </Link>
          <Link to='/shop'>
            <li className="hover:text-yellow-500 cursor-pointer">Shop</li>
          </Link>
          <Link to='/about'>
          <li className="hover:text-yellow-500 cursor-pointer">About</li>
          </Link>
          <Link to='/testimonial'>
          <li className="hover:text-yellow-500 cursor-pointer">Testimonial</li>
          </Link>
          <Link to='/contact'>
          <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
          </Link>
          
        </ul>

        {/* MOBILE ICON */}

        <button className="text-3xl lg:hidden" onClick={() => setIsOpen(true)}>
          {!isOpen && <AiOutlineMenu />}
        </button>


       {/* <button className="text-3xl z-4" onClick={() => setIsOpen(prev => !prev)}>
          {isOpen ? <IoClose /> : <AiOutlineMenu />}
        </button> */}

        

      </nav>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-3xl text-white transition-all duration-500 z-20 ${
          isOpen ? "opacity-100 " : "opacity-0 pointer-events-none" 
        }`}
      >

        <h1 className="text-2xl absolute top-4 left-8 font-bold text-yellow-500">
          Dark Ember
        </h1>

        <div className="lg:hidden text-3xl absolute top-4 right-8  cursor-pointer z-50">
          <button onClick={() => setIsOpen(prev => !prev)}>
            {isOpen ? <IoClose /> : <AiOutlineMenu />}
          </button>
        </div>
       

          <Link to="/">
          <li onClick={() => setIsOpen(false)} className="hover:text-yellow-500 cursor-pointer list-none">Home</li>
          </Link>
        <Link to="/shop">
          <li onClick={() => setIsOpen(false)} className="hover:text-yellow-500 cursor-pointer list-none">Shop</li>
        </Link>
        <Link to="/about">
          <li onClick={() => setIsOpen(false)} className="hover:text-yellow-500 cursor-pointer list-none">About</li>
        </Link>
        <Link to="/testimonial">
          <li onClick={() => setIsOpen(false)} className="hover:text-yellow-500 cursor-pointer list-none">Testimonial</li>
        </Link>
        <Link to='/contact'>
          <li onClick={() => setIsOpen(false)} className="hover:text-yellow-500 cursor-pointer list-none">Contact</li>
        </Link>

      </div>

      

    </div>
  );
}

export default Header;