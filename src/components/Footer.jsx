import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#474747] text-white py-8 my-0">
        <div className="container mx-auto flex justify-evenly items-center px-40">
          <div className="flex flex-col items-start  lg:w-1/4 mb-28 ">
          <div className="flex">
            <img
              src="logo.png"
              alt="Logo"
              className="h-12 w-12 mr-3"
            />
            <span className="text-3xl font-serif mt-3 italic">Bistro Bliss</span>
            </div>
            <p className="mt-8 text-gray-400">
              In the new era of technology we look a in the future with
              certainty and pride to for our company.
            </p>
            <div className="flex space-x-4 mt-7">
              <a
                href="https://twitter.com"
                className="text-white no-underline bg-red-700 rounded-full p-2"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com"
                className="text-white bg-red-700 rounded-full p-2"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                className="text-white bg-red-700 rounded-full p-2"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com"
                className="text-white bg-red-700 rounded-full p-2"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="lg:w-1/4 mb-9 px-20">
            <p className="mb-6">Pages</p>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#">Home</a>
              </li>

              <li className="mb-2">
                <a href="#">About</a>
              </li>

              <li className="mb-2">
                <a href="#">Menu</a>
              </li>

              <li className="mb-2">
                <a href="#">Pricing</a>
              </li>

              <li className="mb-2">
                <a href="#">Blog</a>
              </li>

              <li className="mb-2">
                <a href="#">Contact</a>
              </li>

              <li className="mb-2">
                <a href="#">Delivery</a>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/4 mb-9">
            <p className="mb-6"> Utility Pages</p>
            <ul className="text-gray-400 ">
              <li className="mb-2">
                <a href="#">Start Here</a>
              </li>

              <li className="mb-2">
                <a href="#">Styleguide</a>
              </li>

              <li className="mb-2">
                <a href="#">Password Protected</a>
              </li>

              <li className="mb-2">
                <a href="#">404 Not Found</a>
              </li>

              <li className="mb-2">
                <a href="#">Licenses</a>
              </li>

              <li className="mb-2">
                <a href="#">Changelog</a>
              </li>

              <li className="mb-2">
                <a href="#">View More</a>
              </li>
            </ul>
          </div>

          <div className="  py-4 mt-5  lg:w-1/4">
            <p className="mb-9">Follow Us On Instagram</p>
            <div className="grid grid-cols-2 gap-3 ">
              <img
                src="f-img1.png"
                alt="Card"
                className="h-32 w-34 object-cover rounded-md"
              />
              <img
                src="f-img2.png"
                alt="Card"
                className="h-32 w-34 object-cover rounded-md"
              />
              <img
                src="/f-img3.png"
                alt="Card"
                className="h-32 w-34 object-cover rounded-md"
              />
              <img
                src="f-img4.png"
                alt="Card"
                className="h-32 w-34 object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        <hr className="w-4/5 mb-4 mt-14 border-gray-700 ml-36" />
        <div className="text-center mt-9 mb-10">
          <p>&copy; 2024 Hashtag Developer. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
