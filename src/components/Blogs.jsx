

const Blogs = ()=> {
    return(
        <>
       
        <div className=" px-40 mt-16 mb-10 py-16 bg-[#f9f9f7]  ">
      <header className="flex justify-between items-center p-4 ">
        <h1 className="text-5xl font-serif"> Our Blogs & Articles</h1>
        <button className="bg-red-700 text-white px-4 py-3 rounded-full">Read all articles</button>
      </header>

      <main className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1  rounded-md shadow-md ">
          <img src="burger.png" alt="Blog" className="w-full rounded-md  " />
          <div className="p-4">  
          <p className="text-gray-600 mt-2">July 21, 2024</p>
          <p className="mt-4 font-semibold">The secret tricks & tips to prepare a perfect burger & pizza for our customers</p>
          <p className="mt-2">Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 h-auto mr-5 col-span-1">
          <div className=" rounded-md shadow-md">
            <img src="pizza.png" alt="Blog" className="w-full rounded-md" />
            <p className=" text-gray-600 mt-4 px-4">July 21, 2024</p>
            <p className="mt-4 font-semibold px-4">5 great pizza restaurant you should visit the city</p>
          </div>
          <div className="  rounded-md shadow-md">
            <img src="fries.png" alt="Blog" className="w-full rounded-md" />
            <p className=" text-gray-600 mt-4 px-4">July 21, 2024</p>
            <p className="mt-4 font-semibold px-4">How to prepare the perfect french fries in an air fryer </p>
          </div>
          <div className="  rounded-md shadow-md">
            <img src="chicken.png" alt="Blog" className="w-full rounded-md" />
            <p className="text-gray-600 mt-4 px-4">July 21, 2024</p>
            <p className="mt-4 font-semibold px-4">How to prepare delicious chicken tenders</p>
          </div>
          <div className=" rounded-md shadow-md">
            <img src="cake.png" alt="Blog" className="w-full rounded-md" />
            <p className="text-gray-600 mt-4 px-4">July 21, 2024</p>
            <p className="mt-4 font-semibold px-4">7 delicious cheesecake recipies you can prepare </p>
          </div>
        </div>
      </main>
    </div>
    
        </>
    )
}

export default Blogs;