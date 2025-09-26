


const Hero = () => {
  return (
    <div >
    <div className="flex justify-between items-center bg-green-200 px-32 py-28">
      {/* left side */}
      <div>
        <img src="" alt="jitter-logo" />
        <h1 className="text-2xl font-bold mt-10">JITER NURSERY/PRIMARY & SECONDARY SCHOOL</h1>
        <p className="text-lg mt-4">Cradle of Academic Excellence</p>
        <div className="flex gap-4 mt-4">
          <button className="bg-green-800 text-white rounded-md px-5 py-2 text-sm">Contact Us</button>
          <button className="bg-white text-black rounded-md px-5 py-2 text-sm">Learn More</button>
        </div>
      </div>

      {/* Right Side */}
      <div>
        <img src="" alt="jitter-image" />
      </div>
    </div>
    </div>
  );
};

export default Hero;
