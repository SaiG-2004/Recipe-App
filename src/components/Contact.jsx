const Contact = () => {
  return (
    <>
      <div className="text-center bg-[#F9F9F7]">
        <div className=" text-center py-10 gap-4 pb-64 ">
          <h1 className=" text-4xl md:text-8xl font-[Poppins]"> Contact Us</h1>
          <p className="text-md text-gray-600 mt-2 px-3 ">
            We consider all the drivers of change gives you the components{" "}
          </p>
          <p className="text-md text-gray-600 mt-2 ">
            you need to change to create a truly happens
          </p>
        </div>

        <div className="flex justify-center items-center my-9 bg-white py-9">
          <form className="bg-white p-8 rounded-xl border shadow-md w-full max-w-xl mt-[-16rem] text-start">
            <div className="flex flex-row gap-4 items-center justify-center w-full">
              <div className="mb-4 w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow border rounded-full w-full py-2 px-3 text-gray-700 "
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow  border rounded-full w-full py-2 px-3 text-gray-700 "
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="shadow  border rounded-full w-full py-2 px-3 text-gray-700 "
                id="subject"
                type="text"
                placeholder="Write a subject"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700  h-32"
                id="message"
                placeholder="Write your message"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4  w-full rounded-full"
                type="button"
              >
                Send
              </button>
            </div>
          </form>

        </div>
          <div className="flex flex-col text-center md:flex-row gap-6 md:justify-center bg-white mt-[-2.3rem] md:text-start mb-16">
            <div className="mr-4 py-3">
                <h2 className="mb-4 font-bold">Call Us:</h2>
                <p className="text-red-800 font-bold text-lg">+1-234-567-8900</p>
            </div>
            <div className="mx-4 py-3">
                <h2 className="mb-4 font-bold"> Hours:</h2>
                <p>Mon-Fri: 11am-8pm
                <p>Sat,Sun: 9am-10pm</p>
                </p>
            </div>
            <div className="ml-4 py-3">
                <h2 className="mb-4 font-bold">Our Location:</h2>
                <p>123 Bridge Street </p>
                <p>Nowhere Land, LA 12345 </p>
                <p>India</p>
            </div>
          </div>
      </div>
    </>
  );
};

export default Contact;
