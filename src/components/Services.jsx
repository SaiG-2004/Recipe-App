const services = [
  {
    title: "Caterings",
    description:
      "In the new era of technology we look in the future with certainty for life.",
    image: "caterings.png",
  },
  {
    title: "Birthdays",
    description:
      "In the new era of technology we look in the future with certainty for life.",
    image: "birthdays.png",
  },
  {
    title: "Weddings",
    description:
      "In the new era of technology we look in the future with certainty for life.",
    image: "weddings.png",
  },
  {
    title: "Events",
    description:
      "In the new era of technology we look in the future with certainty for life.",
    image: "events.png",
  },
];

const Services = () => {
  return (
    <section className="py-12 mt-8">
      <div className="container mx-auto px-10 lg:px-40 text-center">
        <h2 className=" text-3xl md:text-4xl  mb-10 text-start md:w-[25rem] font-[Poppins] ">
          We also offer unique services for your events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-10 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg  overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover rounded-lg lg:mb-7 "
              />
              <div className="py-4 text-start">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
