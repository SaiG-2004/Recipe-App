import { FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" bg-[#474747] text-white w-full h-9 border-red-800">
      <div className="container mx-auto flex flex-row justify-between items-center py-2 px-16">
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
      <div className="bg-white text-black my-auto px-6">
      <div className="container mx-auto flex justify-between items-center py-4 px-9">
          <div className="flex items-center space-x-4">
            <img src="japanese-food.png" alt="Bistro Bliss" className="h-14 " />
            <span className="text-3xl font-bold italic ">Bistro Bliss</span>
          </div>
          <nav className="flex space-x-6 p-6">
            <a href="/" className="text-black-400 hover:bg-gray-400 px-2 py-1 rounded-full">Home</a>
            <a href="/about" className="text-black-400 hover:bg-gray-400 px-2 py-1 rounded-full">About</a>
            <a href="/menu" className="text-black-400 hover:bg-gray-400 px-2 py-1 rounded-full">Menu</a>
            <a href="/pages" className="text-black-400 hover:bg-gray-400 px-2 py-1 rounded-full">Pages</a>
            <a href="/contact" className="text-black-400 hover:bg-gray-400 px-2 py-1 rounded-full">Contact</a>
          </nav>
          <a href="/book" className="bg-white-600 hover:bg-gray-400 text-black px-6 py-2 rounded-xl border-2 border-black text-md font-bold">Book A Table</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;