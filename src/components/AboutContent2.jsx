import { FaPlay } from "react-icons/fa";

const AboutContent2 = () => {
  const features = [
    {
      title: "Multi Cuisine",
      description:
        "In the new era of technology we look in the future with certainty life.",
      icon: "multicuisine.png",
    },
    {
      title: "Easy To Order",
      description:
        "In the new era of technology we look in the future with certainty life.",
      icon: "order.png",
    },
    {
      title: "Fast Delivery",
      description:
        "In the new era of technology we look in the future with certainty life.",
      icon: "timer.png",
    },
  ];

  return (
    <>
      <div className="relative bg-cover bg-center h-screen bg-[url('/a-img2.png')] mt-10">
        <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center  ">
          <button className="mb-6 bg-white text-pink-700 rounded-full p-10">
            <FaPlay />
          </button>

          <h1 className="text-6xl  text-white font-[Poppins] ">
            Feel the authentic & <br></br> original taste from us
          </h1>
        </div>
      </div>

      <div className="flex justify-around py-12 px-28">
        {features.map((feature, index) => (
          <div key={index} className=" flex text-start px-10">
            <img
              src={feature.icon}
              alt={feature.title}
              className=" h-8 mx-5 mt-4"
            />
            <div className="flex flex-col  gap-2">
              <h2 className="text-xl font-semibold mt-4">{feature.title}</h2>
              <p className="text-gray-600 ">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutContent2;
