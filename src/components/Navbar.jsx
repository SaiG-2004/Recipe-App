import { FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-[#474747] text-white w-full h-fit border-red-800 sticky top-0 left-0 z-[999]">
      <div className="container mx-auto flex flex-row justify-between items-center py-2 px-40">
        <div className="flex items-center space-x-4">
          <a href="tel:+14148570107" className="flex items-center">
            <FaPhoneAlt />
            <span className="ml-2">(414) 857-0107</span>
          </a>
          <a href="mailto:yummy@bistrobliss" className="flex items-center">
            <FaEnvelope />
            <span className="ml-2">yummy@bistrobliss</span>
          </a>
        </div>
        <div className="flex space-x-4">
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
      <div className="bg-white text-black my-auto mt-[] px-32">
      <div className="container mx-auto flex justify-between items-center py-0 px-9">
          <div className="flex items-center space-x-4">
            <img src="japanese-food.png" alt="Bistro Bliss" className="h-14 " />
            <span className="text-3xl font-bold italic ">Bistro Bliss</span>
          </div>
          <nav className="flex space-x-6 p-6">
            <Link to = {"/"} className="text-black-400 hover:bg-gray-400 px-2 py-1 rounded-full">Home</Link>
            <Link to = {"/about" } className="text-black-400 hover:bg-gray-400 px-2 py-1 rounded-full">About</Link>
            <Link to = {"/menu" } className="text-black-400 hover:bg-gray-400 px-2 py-1 rounded-full">Menu</Link>
            <Link to = {"/pages" } className="text-black-400 hover:bg-gray-400 px-2 py-1 rounded-full">Pages</Link>
            <Link to = {"/contact"} className="text-black-400 hover:bg-gray-400 px-2 py-1 rounded-full">Contact</Link>
          </nav>
          <Link to  = {"/book"} className="bg-white-600 hover:bg-gray-400 text-black px-6 py-2 rounded-xl border-2 border-black text-md font-bold">Book A Table</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;