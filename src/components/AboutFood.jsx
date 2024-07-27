

import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const AboutFood = () => {
  return (
    <>
      <div className="w-full bg-[#f9f9f7]">
        <div className="container mx-auto mt-10 px-10 md:px-20 lg:px-40 py-12 flex flex-col lg:flex-row items-start  ">

          <div className="md:w-1/2 w-full p-4 relative">

            <div className=" w-full z-0 relative ">
              <img
                src="Image.png"
                alt="Delicious food"
                className=" rounded-lg shadow-lg w-96 lg:w-full z-0 relative"
              />
            </div>
            <div className="bg-gray-800 h-fit text-white hidden sm:block p-4 lg:p-10 rounded-lg mt-[-10rem] lg:mt-[-18rem] w-80 lg:w-[75%] ml-24 lg:ml-48 z-10 absolute">
              <h3 className=" lg:text-3xl font-semibold mb-4 lg:mb-12">Come and visit us</h3>
              <p className="mb-6 flex items-center">
                <span className="mr-2"><FaPhoneAlt />
                </span>
                (414) 857 - 0107
              </p>
              <p className="mb-6 flex items-center">
                <span className="mr-2"><IoMdMail /></span>
                happytummy@restaurant.com
              </p>
              <p className="mb-6 flex items-center">
                <span className="mr-2 mb-6"><FaMapMarkerAlt /></span>
                837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2  lg:pl-32 py-16  sm:mt-16  flex justify-center align-middle flex-col text-start">
            <h1 className=" text-4xl font-semibold mb-4 ">We provide healthy food for your family.</h1>
            <p className="text-gray-700 font-bold mb-4">
              Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
            </p>
            <p className="text-gray-700 mb-4">
              At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
            </p>
            <button className=" w-[10rem] text-black px-1 py-3 rounded-full border-2 border-black font-bold  hover:bg-gray-400">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFood;
