const CallToAction = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center px-10 py-16 bg-cover bg-center bg-no-repeat rounded-xl"
      style={{
        backgroundImage: "url('/images/brandi-redd-aJTiW00qqtI-unsplash.jpg')", // 👈 change this to your image
      }}
    >
      {/* Left image if you want an extra thumbnail */}
      <div className="mb-6 md:mb-0">
        <img
          src="/images/bus.jpg" // 👈 thumbnail image
          alt="School Bus"
          className="w-60 h-40 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-right bg-white/80 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-green-900">What's New?</h1>
        <p className="text-lg font-semibold text-gray-700">
          Jiter School has just launched two 16-seaters school bus that will
          convey students to and fro schools.
        </p>
        <button className="bg-green-800 text-white h-10 px-6 text-sm w-32 mt-6 rounded-lg shadow hover:bg-green-700 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
