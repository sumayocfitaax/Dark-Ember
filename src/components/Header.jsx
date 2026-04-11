import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-8 py-4 text-white bg-black/30 backdrop-blur-md shadow-lg">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-500">
          Dark Ember
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8">
          <li className="hover:text-yellow-500 cursor-pointer">Home</li>
          <li className="hover:text-yellow-500 cursor-pointer">Shop</li>
          <li className="hover:text-yellow-500 cursor-pointer">About</li>
          <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
        </ul>

        {/* MOBILE ICON */}
        <div className="lg:hidden text-3xl cursor-pointer">
          {isOpen ? (
            <IoClose onClick={() => setIsOpen(false)} />
          ) : (
            <AiOutlineMenu onClick={() => setIsOpen(true)} />
          )}
        </div>

      </nav>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-3xl text-white transition-all duration-500 z-11 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
      
        <li onClick={() => setIsOpen(false)} className="hover:text-yellow-500 cursor-pointer list-none">Home</li>
        <li onClick={() => setIsOpen(false)} className="hover:text-yellow-500 cursor-pointer list-none">Shop</li>
        <li onClick={() => setIsOpen(false)} className="hover:text-yellow-500 cursor-pointer list-none">About</li>
        <li onClick={() => setIsOpen(false)} className="hover:text-yellow-500 cursor-pointer list-none">Contact</li>
      </div>

      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="../assets/video2.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* HERO TEXT */}
      <div className="relative z-10 flex items-center flex-col justify-center h-full text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Unleash Your Signature Scent
        </h1>

        <p className="text-lg md:text-2xl mt-6 text-amber-500">
          A timeless fragrance crafted for those who move with <br />
          <span className="font-extrabold text-xl md:text-3xl">
            confidence, elegance, and quiet power
          </span>
        </p>
      </div>

    </div>
  );
}

export default Header;