import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center px-10 py-16 bg-cover bg-center bg-no-repeat rounded-xl"
      style={{
        backgroundImage: "url('/images/brandi-redd-aJTiW00qqtI-unsplash.jpg')", // 👈 change this to your image
      }}
    >
      {/* Left image if you want an extra thumbnail */}
      <div className="relative">
        <div className="w-52 h-52 mb-6 md:mb-0 bg-green-800 border-4 border-white rounded-full"></div>
        <img
          src="/images/bus 1.png"
          alt="School Bus"
          className="absolute bottom-[20px] left-[30px] md:bottom-[0px] md:left-[30px] w-60 h-40 object-cover"
        />
        <img
          src="/images/jiter-logo.png"
          className="absolute bottom-[80px] md:bottom-[60px] left-[70px] h-8 w-8"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-right bg-white/80 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-green-900">What's New?</h1>
        <p className="text-lg font-semibold text-gray-700">
          Jiter School has just launched two 18-seaters school bus that will
          convey students to and fro schools.
        </p>
        <Link to="/contact">
          <button className="bg-green-800 text-white h-10 px-6 text-sm w-32 mt-6 rounded-lg shadow hover:bg-green-700 transition">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
