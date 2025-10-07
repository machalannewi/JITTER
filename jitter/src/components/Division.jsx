const Images = [
  {
    img: "/images/image 18.png",
    text: "Nursery Division",
  },
  {
    img: "/images/image 19.png",
    text: "Primary Division",
  },
  {
    img: "/images/image 15.png",
    text: "Secondary Division",
  },
];

const Division = () => {
  return (
    <div className="bg-green-200 py-16">
      <h1 className="flex items-center gap-2 px-10 mb-10">
        <span className="text-3xl text-gray-600 leading-none">•</span>
        <span>Our Divisions</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center px-6 md:px-10">
        {Images.map((image, index) => (
          <div
            key={index}
            className="w-full max-w-sm flex flex-col items-center"
          >
            <img
              src={image.img}
              alt="image-division"
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
            />
            <p className="font-bold text-center mt-4 md:text-lg">
              {image.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Division;
