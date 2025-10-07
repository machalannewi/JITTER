const Images = [
  {
    img: "/images/image 2.png",
    text: "Sick Bay",
  },
  {
    img: "/images/image 2.png",
    text: "Laboratory",
  },
  {
    img: "/images/image 2.png",
    text: "Assembly",
  },
  {
    img: "/images/image 2.png",
    text: "Playground",
  },
  {
    img: "/images/image 2.png",
    text: "Standard Toilet",
  },
  {
    img: "/images/image 2.png",
    text: "Computer Room",
  },
];

const Facilities = () => {
  return (
    <div className="bg-white py-16">
      <h1 className="flex items-center gap-2 px-10 mb-10">
        <span className="text-3xl text-gray-600 leading-none">•</span>
        <span>Our Facilities</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 place-items-center px-6 md:px-10">
        {Images.map((image, index) => (
          <div
            key={index}
            className="w-full max-w-xs flex flex-col items-center"
          >
            <img
              src={image.img}
              className="w-full h-52 object-cover rounded-xl shadow-md"
              alt="image-division"
            />
            <p className="font-bold text-center mt-3 md:text-lg">
              {image.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
