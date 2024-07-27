
const Book = () => {
    return(
        <>
        
        <div className=" text-center py-10 gap-4 pb-64 mb-40  bg-[#f9f9f7]">
          <h1 className=" text-4xl md:text-8xl font-[Poppins]"> Book A Table</h1>
          <p className="text-md text-gray-600 mt-2 ">
            We consider all the drivers of change gives you the components{" "}
          </p>
          <p className="text-md text-gray-600 mt-2 ">
            you need to change to create a truly happens
          </p>
        </div>
        <div className="relative bg-cover bg-center h-screen bg-[url('/map.png')] mt-[-10rem] flex justify-center items-center" >
       
          <form className="bg-white p-10 rounded-xl shadow-md w-full max-w-3xl mt-[-43rem] text-start">
            <div className="flex flex-row gap-6 items-center justify-center w-full">

            <div className="mb-4 w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-4"
                  htmlFor="date"
                >
                  Date
                </label>
                <input
                  className="shadow border rounded-full w-full py-3 px-4 text-gray-700 "
                  id="date"
                  type="date"
                  
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-4"
                  htmlFor="time"
                >
                  Time
                </label>
                <input
                  className="shadow  border rounded-full w-full py-3 px-4 text-gray-700 "
                  id="time"
                  type="time"
                  
                />
              </div>

            </div>
            <div className="flex flex-row gap-4 items-center justify-center w-full">
              <div className="mb-4 w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-4"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow border rounded-full w-full py-3 px-4 text-gray-700 "
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-4"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="shadow  border rounded-full w-full py-3 px-4 text-gray-700 "
                  id="phone"
                  type="number"
                  placeholder="x-xxx-xxx-xxxx"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-4"
                htmlFor="total person"
              >
               Total Person
              </label>
              <input
                className="shadow  border rounded-full w-full py-3 px-4 text-gray-700 "
                id="total person"
                type="number, text"
                
              />
            </div>
           
            <div className="flex items-center justify-center ">
              <button
                className="bg-red-700 hover:bg-red-500 text-white font-bold py-4 px-4 mt-4 w-full rounded-full"
                type="button"
              >
                Book A Table
              </button>
            </div>
          </form>

        </div>
        
       
       
        </>
    )
}

export default Book;