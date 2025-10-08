const Hero = () => {
  return (
    <div className="relative bg-green-200 px-6 md:px-20 py-40 overflow-hidden">
      {/* Background Overlay Image */}
      <img
        src="/images/jiter-logo.png"
        alt="background-overlay"
        className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row justify-evenly items-center h-full z-10 gap-8 md:gap-0">
        {/* Left side */}
        <div className="text-left w-full md:w-1/2">
          {/* Logo (desktop only) */}
          <img
            src="/images/jiter-logo.png"
            alt="jiter-logo"
            className="hidden md:block w-20 h-20"
          />

          <h1 className="text-2xl md:text-3xl font-bold md:mt-10 text-gray-900 leading-snug">
            JITER NURSERY, PRIMARY & SECONDARY SCHOOL
          </h1>
          <p className="text-base md:text-lg mt-3 text-gray-800">
            Cradle of Academic Excellence
          </p>

          {/* Buttons */}
          <div className="hidden md:flex gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-green-800 text-white rounded-md px-5 py-2 text-sm hover:bg-green-900">
              Contact Us
            </button>
            <button className="bg-white text-black rounded-md px-5 py-2 text-sm hover:bg-gray-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-full md:w-1/2 flex justify-end">
          {/* Main image */}
          <div className="border-8 border-green-800 rounded-2xl overflow-hidden w-56 md:w-72">
            <img
              src="/images/image 24.png"
              alt="jiter-image"
              className="w-56 md:w-72 h-56 md:h-72 object-cover"
            />
          </div>

          {/* Overlapping secondary image */}
          <img
            src="/images/Rectangle 1.png"
            alt="overlap"
            className="absolute bottom-[-90px] left-[10px] md:bottom-[-100px] md:left-[20px] h-56 w-56 md:w-72 md:h-72 rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
