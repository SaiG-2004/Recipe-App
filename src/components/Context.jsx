 
 import {Link} from "react-router-dom";
const Context = () => {
  return (
    <>
      <div  className="relative flex items-center justify-center h-screen bg-cover bg-center bg-[url('/bg1.png')] ">
      <div className=" lg:p-10 my-6 rounded-lg  text-center w-full px-20 md:w-[40%]">
          <h1 className="text-5xl lg:text-7xl font-[Poppins]  mb-4">
            Best food <br className="block md:hidden"/>for your taste
          </h1>
          <p className="text-sm md:text-xl mb-6">
            Discover delectable <br className="block md:hidden"/> cuisine  and unforgettable <br className="block md:hidden"/> moments <br className="hidden md:block"/> in our
            welcoming, culinary haven.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-red-600 text-white w-40 h-10 lg:h-14 text-xs lg:text-lg lg:font-semibold  lg:py-3 px-1 lg:px-5 rounded-full hover:bg-red-500 transition duration-300">
            <Link to={"/book"}> Book A Table</Link>
            </button>
            <button className="bg-white border-2 border-gray-800 text-gray-800 w-40 h-10 lg:h-14 text-xs lg:text-lg lg:font-semibold  lg:py-3 px-1 lg:px-5 rounded-full hover:bg-gray-100 transition duration-300">
            <Link to={"/menu"}> Explore Menu</Link>
            </button>
          </div>
    </div>      
      </div>
    </>
  );
};

export default Context;