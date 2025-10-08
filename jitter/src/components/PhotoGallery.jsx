const Images = [
  {
    img: "/images/Rectangle 7 (2).png",
    text: "Nursery Division",
  },
  {
    img: "/images/Frame 196 (1).png",
    text: "Primary Division",
  },
  {
    img: "/images/image 14.png",
    text: "Secondary Division",
  },
  {
    img: "/images/image 19.png",
    text: "Secondary Division",
  },
  {
    img: "/images/image 18.png",
    text: "Secondary Division",
  },
  {
    img: "/images/image 16.png",
    text: "Secondary Division",
  },
];

const PhotoGallery = () => {
  return (
    <div className="bg-white py-16">
      <h1 className="flex items-center gap-2 px-10 mb-10">
        <span className="text-3xl text-gray-600 leading-none">•</span>
        <span>Photo Gallery</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center px-6 md:px-10">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
