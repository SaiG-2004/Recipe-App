import { IoMdTime } from "react-icons/io";
import { RiPriceTag2Line } from "react-icons/ri";
import { BsCart } from "react-icons/bs";

const Content = () => {
  return (
    <>
      <section className=" bg-[#f9f9f7] py-24 ">
        <div className="container mx-auto px-40 flex  lg:flex-row items-center lg:items-center gap-8 mr-7">
          <div className="w-full lg:w-2/3 flex flex-row space-y-2 space-x-6 ">
            <img
              src="img1.png"
              alt="Chef preparing food"
              className="w-[26rem] h-[40rem] object-cover rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-1 gap-6 !mt-9">
              <img
                src="img2.png"
                alt="Dish 1"
                className="w-full h-[23rem] object-cover rounded-lg shadow-lg"
              />
              <img
                src="img3.png"
                alt="Dish 2"
                className="w-full h-[15rem] object-cover rounded-lg shadow-lg "
                  />
                </div> 
          </div>
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-14 mr-6">
            <h2 className="text-5xl font-semibold mb-4 font-[Poppins]">
              Fastest Food Delivery in City
            </h2>
            <p className="text-gray-700 mb-8">
              Our visual designer lets you quickly and easily drag and drop your
              way to custom apps for both desktop and mobile.
            </p>
            <p className="mb-6 flex items-center">
              <span className="mr-4 bg-yellow-400 p-2  rounded-full">
                <IoMdTime />
              </span>
              Delivery within 30 minutes
            </p>
            <p className="mb-6 flex items-center">
              <span className="mr-4 bg-yellow-400 p-2 rounded-full">
                <RiPriceTag2Line />
              </span>
              Best Offer & Prices
            </p>
            <p className="mb-6 flex items-center">
              <span className="mr-4 bg-yellow-400 p-2 rounded-full ">
                <BsCart />
              </span>
              Online Services Available
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
