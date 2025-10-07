import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Cards = [
  {
    id: 1,
    image: "/images/image 16.png",
    tag: "News Topic",
    heading: "First Big Announcement",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image: "/images/image 6.png",
    tag: "Updates",
    heading: "Important School Update",
    text: "Quasi animi maiores voluptatem earum distinctio rem eveniet.",
  },
  {
    id: 3,
    image: "/images/image 18.png",
    tag: "Events",
    heading: "Upcoming Inter-School Competition",
    text: "Join us for an exciting inter-school event next month!",
  },
  {
    id: 4,
    image: "/images/image 10.png",
    tag: "News Topic",
    heading: "New Facilities Commissioned",
    text: "Our new science labs and library are now open.",
  },
  {
    id: 5,
    image: "/images/image 19.png",
    tag: "Announcement",
    heading: "New Term Resumption Date",
    text: "School resumes on September 15 with exciting programs ahead!",
  },
];

const NewsAndEvents = () => {
  const navigate = useNavigate();

  // 🔍 Search state
  const [searchTerm, setSearchTerm] = useState("");

  // 📄 Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  // ✅ Filter cards by search term
  const filteredCards = Cards.filter(
    (card) =>
      card.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  const indexOfLast = currentPage * cardsPerPage;
  const indexOfFirst = indexOfLast - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirst, indexOfLast);

  // ✅ Handlers
  const handleCardClick = (id) => navigate(`/news/${id}`);

  const handleNext = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));

  const handlePrev = () =>
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  const handlePageClick = (page) => setCurrentPage(page);

  return (
    <>
      <Header />
      <div className="bg-gray-300 min-h-screen">
        {/* Banner Section */}
        <div className="py-10">
          <h1 className="md:hidden flex items-center gap-2 px-10 mb-10 mt-16">
            <span className="text-3xl text-gray-600 leading-none">•</span>
            <span>News & Events</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12 py-10 md:mt-20">
            <div className="text-center md:text-left">
              <h1 className="font-bold text-xl md:text-5xl mb-4">JITER BLOG</h1>
              <button className="bg-green-800 text-white py-2 px-4 text-sm rounded-lg cursor-pointer">
                See What's New
              </button>
            </div>
            <img
              src="/images/Rectangle 2.png"
              alt="about-img"
              className="w-full md:w-1/2 rounded-lg"
            />
          </div>
        </div>

        {/* News Cards Section */}
        <div className="px-2 md:px-12 py-10">
          {/* 🔍 Search Input */}
          <div className="flex justify-center md:justify-start mb-6">
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // reset pagination on new search
              }}
              className="rounded-xl p-2 border-2 w-1/2 md:w-2/3 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          {/* 📰 News Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentCards.length > 0 ? (
              currentCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  className="rounded-xl flex flex-col gap-4 bg-white p-4 cursor-pointer hover:shadow-lg transition-all"
                >
                  <img
                    src={card.image}
                    alt={card.heading}
                    className="rounded-lg h-44 object-cover"
                  />
                  <div className="bg-green-100 rounded-2xl md:p-1 w-20 py-1 md:w-24 text-sm md:font-medium font-light">
                    <p className="text-center text-sm text-green-800">
                      {card.tag}
                    </p>
                  </div>
                  <h1 className="font-semibold text-sm">{card.heading}</h1>
                  <p className="text-sm md:font-medium font-light">
                    {card.text}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-700 col-span-full">
                No results found.
              </p>
            )}
          </div>

          {/* 📄 Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`text-black border border-gray-300 shadow-xl/30 py-2 px-5 text-sm rounded-lg cursor-pointer transition ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`py-2 px-4 border rounded-lg cursor-pointer transition ${
                      page === currentPage
                        ? "bg-green-800 text-white"
                        : "hover:bg-gray-500 hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`bg-green-800 text-white py-2 px-6 text-sm rounded-lg cursor-pointer transition ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-green-700"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsAndEvents;
