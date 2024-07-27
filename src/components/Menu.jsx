const Menu = () => {

  const menuItems = [
    {
      image: 'fried-eggs.png',
      price: 9.99,
      name: 'Fried Eggs',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    },
    {
      image: 'hawaiian-pizza.png',
      price: 15.99,
      name: 'Hawaiian Pizza',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    },
    {
      image: 'cocktail.png',
      price: 7.25,
      name: 'Martinez Cocktail',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    }, 
    {
      image: 'butterscotch.png',
      price: 20.99,
      name: 'Butterscotch Cake',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    },
    {
      image: 'lemonade.png',
      price: 5.89,
      name: 'Mint Lemonade',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    },
    {
      image: 'icecream.png',
      price: 18.05,
      name: 'Chocolate Icecream',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    },
    {
      image: 'cheeseburger.png',
      price: 12.55,
      name: 'Cheese Burger',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    },
    {
      image: ' waffles.png',
      price: 12.99,
      name: 'Classic Waffles',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    },
    
  ];

    
    return(
   <>
   <div className="text-center">
       <div className=" text-center py-10 gap-4 ">
        <h1 className="text-5xl md:text-8xl font-[Poppins]"> Our Menu</h1>
        <p className="text-md text-gray-600 mt-2 px-3 ">We consider all the drivers of change gives you the components </p>
        <p className="text-md text-gray-600 mt-2 ">you need to change to create a truly happens</p>
       </div>
       <div className="mx-auto font-medium py-7  ">
       <button className="bg-red-600 px-12 py-3 rounded-full text-white text-sm mx-2">All</button>
       <button className="border-2 rounded-full px-7 py-3 mx-2 text-sm">Breakfast</button>
       <button className="border-2 rounded-full px-5 py-3 mx-2 text-sm">Main Dishes</button>
       <button className="border-2 rounded-full px-9 py-3 mx-2 text-sm">Drinks</button>
       <button className="border-2 rounded-full px-7 py-3 mx-2 text-sm">Desserts</button>
       </div>
 </div>

 <div className="container mx-auto py-16 px-10 md:px-20 lg:px-40">
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md  text-center transition-transform transform hover:scale-105"
          >
            <img src={item.image} alt={item.name} className="mx-auto mb-4  w-full" />
            <div className="px-5 py-5"> 
            <p className="text-red-600 text-xl font-bold">${item.price}</p>
            <h3 className="text-xl font-semibold mb-4 mt-4">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div  className="mt-6 flex flex-col md:flex-row px-8 md:px-18 lg:px-32 bg-[#f9f9f7] py-24 md:py-32 w-full ">
      <div className=" flex flex-col md:justify-center  md:align-middle text-start md:px-20 md:w-[40%] ">
        <h2 className=" text-3xl md:text-5xl font-[Poppins] mb-6 ">You can order through apps</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloribus quas quisquam odio aperiam exercitationem reiciendis deserunt facilis neque sint!</p>

      </div>
      < div className="flex flex-col items-center md:w-[60%] ">
        <div className="my-4 items-center flex flex-row justify-center " >
          <button className="bg-white rounded-lg p-4 md:p-7 shadow-lg mx-3"><img src="uber.png" alt="Uber Eats" className="w-36" /></button>
          <button className="bg-white rounded-lg  py-4 md:py-7 px-3 md:px-10 shadow-lg mx-3"><img src="grubhub.png" alt="Grubhub" className="w-28"  /></button>
          <button className="bg-white rounded-lg py-4 px-3 md:p-7 shadow-lg mx-3"><img src="postmates.png" alt="Postmates" className="w-32"  /></button>
        </div>
        <div className="my-4 items-center flex flex-row justify-center ">
        <button className="bg-white rounded-lg px-2 py-2 md:px-10  md:py-8 shadow-lg mx-3"><img src="doordash.png" alt="Doordash" className="md:w-36  md:h-auto "  /></button>
          <button className="bg-white rounded-lg px-2 py-2  md:px-10 md:py-7 shadow-lg mx-3"><img src="foodpanda.png" alt="Food Panda" className="md:w-36"  /></button>
          <button className="bg-white rounded-lg px-2 py-1 md:px-10 md:py-5 shadow-lg mx-3"><img src="deliveroo.png" alt="Deliveroo" className="md:w-36"  /></button>
        
        </div>
        <div className="my-4 items-center flex flex-row justify-center ">
        <button className="bg-white rounded-lg px-3 py-2  md:p-6 shadow-lg mx-3"><img src="instacart.png" alt="Instacart" className="w-60 md:w-36"  /></button>
          <button className="bg-white rounded-lg px-4 py-3 md:px-9 md:py-7 shadow-lg mx-3"><img src="justeat.png" alt="Just Eat" className=" w-44 md:w-28" /></button>
          <button className="bg-white rounded-lg px-3 py-3 md:px-7 md:py-6 shadow-lg mx-3"><img src="didifood.png" alt="Didi Food" className=" w-40 md:w-36"  /></button>
        </div>
        
        
        
      </div>

    </div>

   </>
    )
}

export default Menu;