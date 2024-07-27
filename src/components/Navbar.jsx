import { FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

import {Link, useLocation, useParams} from "react-router-dom";

const Navbar = () => {
 const loc = useLocation()

 console.log(loc)

  return (
    <div className=" bg-[#474747] text-white w-full h-fit border-red-800 sticky top-0 left-0 z-[999] ">
      <div className="container mx-auto flex flex-row justify-between items-center  py-2 overflow-x-auto lg:py-2 px-10 lg:px-40">
        <div className="flex items-center  mr-2 space-x-4 min-w-fit">
          <a href="tel:+14148570107" className="flex min-w-fit  items-center">
            <FaPhoneAlt />
            <span className="ml-2 w-fit ">(414) 857-0107</span>
          </a>
          <a href="mailto:yummy@bistrobliss" className="flex items-center">
            <FaEnvelope />
            <span className="ml-2">yummy@bistrobliss</span>
          </a>
        </div>
        <div className="flex space-x-4 ml-8 ">
          <a href="https://twitter.com" className="text-white bg-gray-600 rounded-full p-1">
          <FaTwitter />

          </a>
          <a href="https://facebook.com" className="text-white bg-gray-600 rounded-full p-1">
          <FaFacebook />

          </a>
          <a href="https://instagram.com" className="text-white bg-gray-600 rounded-full p-1">
          <FaInstagram />

          </a>
          <a href="https://github.com" className="text-white bg-gray-600 rounded-full p-1">
          <FaGithub />

          </a>
        </div>
      </div>
      <div className="bg-white text-black my-auto px:10 lg:px-32">
      <div className="container mx-auto flex justify-between items-center py-0 px-9 ">
          <div className="flex items-center space-x-1 lg:space-x-4  min-w-fit">
            <img src="japanese-food.png" alt="Bistro Bliss" className="h-8 lg:h-14 " />
            <span className="text-md sm:text:2xl  lg:text-3xl font-bold italic ">Bistro Bliss</span>
          </div>
          <nav className="flex space-x-1 sm:space-x-3 lg:space-x-6 p-3 sm:p-6  sm:ml-9 md:ml-0 overflow-x-auto ">
            <Link to = {"/"} className={`text-black-400 hover:bg-gray-400 px-2 py-1 rounded-full ${loc.pathname === "/" && "bg-gray-400 "}`}>Home</Link>
            <Link to = {"/about" } className={`text-black-400 hover:bg-gray-400 px-2 py-1 rounded-full ${loc.pathname === "/about" && "bg-gray-400 "}`}>About</Link>
            <Link to = {"/menu" } className={`text-black-400 hover:bg-gray-400 px-2 py-1 rounded-full ${loc.pathname === "/menu" && "bg-gray-400 "}`}>Menu</Link>
            <Link to = {"/pages" } className={`text-black-400 hover:bg-gray-400 px-2 py-1 rounded-full ${loc.pathname === "/pages" && "bg-gray-400 "}`}>Pages</Link>
            <Link to = {"/contact"} className={`text-black-400 hover:bg-gray-400 px-2 py-1 rounded-full ${loc.pathname === "/contact" && "bg-gray-400 "}`}>Contact</Link>
          </nav>
          <Link to  = {"/book"} className="bg-white-600 hover:bg-gray-400 text-black px-6 py-3 rounded-xl border-2 border-black text-md lg:font-bold hidden xl:block">Book A Table</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;