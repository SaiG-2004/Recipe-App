


const MenuCard = () => {

    const menuItems = [
        {
          title: "Breakfast",
          description: "In the new era of technology we look in the future with certainty and pride for our life.",
          image: "tea.png",
          link: "#",
        },
        {
          title: "Main Dishes",
          description: "In the new era of technology we look in the future with certainty and pride for our life.",
          image: "dishes.png",
          link: "#",
        },
        {
          title: "Drinks",
          description: "In the new era of technology we look in the future with certainty and pride for our life.",
          image: "drinks.png",
          link: "#",
        },
        {
          title: "Desserts",
          description: "In the new era of technology we look in the future with certainty and pride for our life.",
          image: "dessert.png",
          link: "#",
        },
      ];
    return(
   <>
       <div className="container mx-auto px-40 py-10" >
      <h2 className="text-5xl text-center mb-12 font-[Poppins]">Browse Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md p-8 text-center transition-transform transform hover:scale-105"
          >
            <img src={item.image} alt={item.title} className="mx-auto mb-4 h-16 w-16" />
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <a href={item.link} className="text-red-600 font-semibold">
              Explore Menu
            </a>
          </div>
        ))}
      </div>
    </div>

   </>
    )
}

export default MenuCard;