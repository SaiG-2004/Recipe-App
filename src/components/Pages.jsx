const Pages = () => {
  const blogCard = [
    {
      image: "b1.png",
      date: "24 January 2024",
      description: "How to prepare a delicious gluten free sushi.",
    },
    {
      image: "b2.png",
      date: "24 January 2024",
      description: "Exclusive baking lessons from the pastry king.",
    },
    {
      image: "b3.png",
      date: "24 January 2024",
      description: "How to prepare the perfect fries in air fryer.",
    },
    {
      image: "b4.png",
      date: "24 January 2024",
      description: "How to prepare delicious chicken tenders.",
    },
    {
      image: "b5.png",
      date: "24 January 2024",
      description: "8 delicious chocolate cake recipes you can prepare",
    },
    {
      image: "b6.png",
      date: "24 January 2024",
      description: "The secret tips & tricks to prepare a perfect burger.",
    },
    {
      image: "b7.png",
      date: "24 January 2024",
      description: "7 delicious cheesecake recipes you can prepare.",
    },
    {
      image: "b8.png",
      date: "24 January 2024",
      description: "5 great pizza resturants you should visit this city.",
    },
    {
      image: "b9.png",
      date: "24 January 2024",
      description: "5 great cooking gadgets you can buy to save time.",
    },
    {
      image: "b10.png",
      date: "24 January 2024",
      description: "How to prepare a delicious gluten free sushi..",
    },
    {
      image: "b11.png",
      date: "24 January 2024",
      description: "How to prepare a delicious vegetable noodles.",
    },
    {
      image: "b12.png",
      date: "24 January 2024",
      description: "Top 20 simple and quick desserts for kids",
    },
  ];

  return (
    <>
      <div className=" text-center py-10 gap-4 ">
        <h1 className=" text-4xl md:text-8xl font-[Poppins]"> Blog & Articles</h1>
        <p className=" text-md text-gray-600 mt-2 px-3 ">
          We consider all the drivers of change gives you the components
        </p>
        <p className="text-md text-gray-600 mt-2 ">
          you need to change to create a truly happens
        </p>
      </div>

      <div className="container mx-auto py-16 px-10 md:px-40 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogCard.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-md  text-center transition-transform transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto mb-3  w-full"
              />
              <div className="px-7 py-5 text-start">
                <p className=" mb-2 text-gray-500">{item.date}</p>
                <p className=" mb-2 text-lg ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pages;
