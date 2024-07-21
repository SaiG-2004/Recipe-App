 

const Context = () => {
  return (
    <>
      <div  className="relative flex items-center justify-center h-screen bg-cover bg-center bg-[url('/bg1.png')] my-24">
      <div className=" p-10 my-6 rounded-lg  text-center w-[30%]">
          <h1 className="text-6xl md:text-5xl font-[Poppins] font-semibold mb-4">
            Best food for your taste
          </h1>
          <p className="text-md md:text-xl mb-6">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300">
              Book A Table
            </button>
            <button className="bg-white border-2 border-gray-800 text-gray-800 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300">
              Explore Menu
            </button>
          </div>
    </div>      
      </div>
    </>
  );
};

export default Context;