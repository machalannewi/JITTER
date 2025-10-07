import { useParams } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/outline";
import { FaShare, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const allNews = [
  {
    id: 1,
    title: "First Big Announcement",
    image: "/images/image 16.png",
    content:
      "This is the detailed version of the first news. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Important School Update",
    image: "/images/image 6.png",
    content:
      "Here’s everything you need to know about the recent updates and activities happening in our school.",
  },
  {
    id: 3,
    title: "Important School Update",
    image: "/images/image 18.png",
    content:
      "Here’s everything you need to know about the recent updates and activities happening in our school.",
  },
  {
    id: 4,
    title: "Important School Update",
    image: "/images/image 10.png",
    content:
      "Here’s everything you need to know about the recent updates and activities happening in our school.",
  },
  {
    id: 5,
    title: "Important School Update",
    image: "/images/image 19.png",
    content:
      "Here’s everything you need to know about the recent updates and activities happening in our school.",
  },
  // add more news here
];

const NewsAndEventId = () => {
  const { id } = useParams();
  const news = allNews.find((item) => item.id === parseInt(id));

  if (!news) {
    return (
      <>
        <Header />
        <div className="my-32 text-center text-lg font-semibold">
          No News not found 😢
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 md:px-12 py-10 mt-20 w-full max-w-5xl mx-auto">
        <h1 className="font-bold text-2xl sm:text-3xl mb-6 sm:mb-10 text-center md:text-left">
          {news.title}
        </h1>

        <img
          src={news.image}
          alt={news.title}
          className="w-full rounded-lg object-cover max-h-[400px] mb-6"
        />

        <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 mb-6 gap-3">
          <div className="flex items-center gap-2">
            <EyeIcon className="w-5 h-5" />
            <p>1k views</p>
          </div>
          <p>1 Hour Ago</p>
        </div>

        <p className="leading-relaxed text-justify text-gray-800 mb-10 text-sm sm:text-base">
          {news.content}
        </p>

        {/* Keep your share, reactions, and comments sections as-is */}
        {/* Share + Reactions */}
        <div className="flex flex-wrap items-center justify-end gap-6 mb-12">
          <FaShare className="cursor-pointer w-5 h-5 text-gray-700 hover:text-black" />
          <div className="flex items-center gap-1">
            <FaThumbsUp className="cursor-pointer text-green-700" />
            <p>10</p>
          </div>
          <div className="flex items-center gap-1">
            <FaThumbsDown className="cursor-pointer text-red-700" />
            <p>10</p>
          </div>
        </div>

        {/* Comments Section */}
        <div className="w-full">
          <h1 className="font-semibold text-lg sm:text-xl mb-8">Comments</h1>

          {/* Example comment */}
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="mb-8">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-3">
                <img
                  src="/images/mission.jpg"
                  alt="thumbnail"
                  className="rounded-full w-12 h-12 object-cover"
                />
                <div>
                  <h2 className="text-base sm:text-lg font-bold">
                    Amaka Vivian
                  </h2>
                  <p className="text-gray-500 text-sm">15 mins ago</p>
                </div>
              </div>
              <div className="ml-0 sm:ml-16 text-sm sm:text-base text-gray-800">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          ))}

          {/* Add Comment */}
          <h1 className="font-semibold text-lg sm:text-xl mb-6">Add Comment</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Input Text"
              className="rounded-2xl bg-blue-50 flex-1 p-3 w-full text-sm sm:text-base"
            />
            <button className="bg-green-800 text-white py-2 px-6 text-sm rounded-lg cursor-pointer hover:bg-green-700 transition w-full sm:w-auto">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsAndEventId;
