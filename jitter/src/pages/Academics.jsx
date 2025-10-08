import { useState } from "react";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

const ImagesExtracurricular = [
  {
    img: "/images/Rectangle 18 (6).png",
    text: "Debate Club",
  },
  {
    img: "/images/Rectangle 18 (5).png",
    text: "Press Club",
  },
  {
    img: "/images/Rectangle 18 (4).png",
    text: "Red Cross Society",
  },
  {
    img: "/images/Rectangle 18 (3).png",
    text: "Theatre Art/ Drama Club",
  },
  {
    img: "/images/Rectangle 18 (7).png",
    text: "Cooking",
  },
  {
    img: "/images/image 6.png",
    text: "Sport",
  },
  {
    img: "/images/image 17.png",
    text: "Excursion",
  },
  {
    img: "/images/image 19.png",
    text: "Drama Club",
  },
];

const ImagesFacilities = [
  {
    img: "/images/image 9.png",
    text: "Elegant Architecture",
  },
  {
    img: "/images/image 1.png",
    text: "Comfortable Classrooms",
  },
  {
    img: "/images/Rectangle 18 (2).png",
    text: "Library",
  },
  {
    img: "/images/image 2.png",
    text: "Computer Lab",
  },
  {
    img: "/images/image 4.png",
    text: "Medical Room",
  },
  {
    img: "/images/Rectangle 21.png",
    text: "Entertainment Corner",
  },
  {
    img: "/images/Rectangle 18.png",
    text: "Uninterrupted Electricity",
  },
  {
    img: "/images/Rectangle 7.png",
    text: "Modern Restrooms",
  },
];

const SubjectImages = [
  {
    img: "/images/image 18.png",
    text: "Nursery Section",
    list: [
      "Literacy",
      "Numeracy",
      "Science Practice",
      "Social Skills",
      "Quantitative Reasoning",
      "Verbal Reasoning",
      "Computer",
      "Creative Arts",
      "Bible Talks",
      "Health Talks",
      "French",
      "Handwriting",
    ],
  },
  {
    img: "/images/Rectangle 8.png",
    text: "Primary Section",
    list: [
      "English Studies",
      "Mathematics",
      "Basic Science and Technology",
      "National Values",
      "Quantitative Reasoning",
      "Verbal Reasoning",
      "Literature",
      "Christian Religious Studies",
      "Cultural and Creative Arts",
      "French",
      "History",
      "Handwriting",
      "Prevocational Studies",
    ],
  },
  {
    img: "/images/Rectangle 9 (1).png",
    text: "Secondary Section",
    list: [
      "English Language",
      "Mathematics",
      "Basic Science and Technology",
      "Business Studies",
      "Prevocational Studies",
      "Christian Religious Studies",
      "Cultural and Creative Arts",
      "National Values",
      "History",
      "French",
    ],
  },
];

const Academics = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  return (
    <>
      <Header />
      <div className="mt-20">
        {/* Banner */}
        <div className="flex flex-col md:flex-row items-center gap-6 px-6 md:px-12 py-10">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="font-bold md:text-xl mb-4">
              JITER NURSERY/PRIMARY & SECONDARY SCHOOL
            </h1>
            <p className="text-sm md:text-base leading-relaxed">
              Jiter is a comprehensive educational institution encompassing
              nursery, primary, and secondary levels. Our mission is to foster
              lifelong learning within a supportive, inclusive, and nurturing
              environment. We are committed to excellence through dedicated and
              skilled educators who inspire young minds to excel-academically,
              morally, and personally-guiding them toward self-fulfillment,
              strong character, and a purpose-driven life.
            </p>
          </div>
          <img
            src="/images/image 9.png"
            alt="about-img"
            className="w-full md:w-1/2 rounded-lg"
          />
        </div>

        {/* Subject Offered */}
        <div className="py-16">
          <h1 className="flex items-center gap-2 px-10 mb-10">
            <span className="text-3xl text-gray-600 leading-none">•</span>
            <span className="text-lg">Subjects Offered</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center px-6 md:px-10">
            {SubjectImages.map((item, index) => {
              const isFlipped = flippedIndex === index;

              return (
                <div
                  key={index}
                  className="relative w-full max-w-sm h-96 perspective"
                  onClick={() => setFlippedIndex(isFlipped ? null : index)}
                >
                  {/* Card container */}
                  <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                      isFlipped ? "rotate-y-180" : ""
                    }`}
                  >
                    {/* Front side (Image) */}
                    <div className="absolute w-full h-full backface-hidden">
                      <img
                        src={item.img}
                        alt={item.text}
                        className="w-full h-full object-cover rounded-xl shadow-md"
                      />
                      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 font-semibold text-center mt-4 bg-green-800 text-white px-2 py-1 rounded-md">
                        {item.text}
                      </p>
                    </div>

                    {/* Back side (List) */}
                    <div className="absolute w-full h-full bg-green-800 text-white rounded-xl shadow-md rotate-y-180 backface-hidden flex flex-col p-6">
                      <h2 className="text-lg font-bold mb-4 text-center">
                        {item.text}
                      </h2>
                      <ul className="">
                        {item.list.map((subject, i) => (
                          <li key={i} className="text-sm md:text-base">
                            • {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why choose us */}
        <div className="bg-green-100 py-16">
          <h1 className="font-bold text-xl md:text-2xl mb-10 px-10">
            Why Choose Us
          </h1>

          <div className="grid md:grid-cols-2 gap-10 px-8">
            <div className="flex items-center gap-4">
              <div className="text-7xl text-gray-600 leading-none">•</div>
              <div>
                <h1 className="font-bold text-lg md:text-xl mb-2">
                  Academic Excellence & Reputation
                </h1>
                <p>
                  The School is recognized for its high standards, strong
                  curriculum, and success of its graduates.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-7xl text-gray-600 leading-none">•</div>
              <div>
                <h1 className="font-bold text-lg md:text-xl mb-2">
                  Supportive Learning Environment
                </h1>
                <p>
                  The school provides a community that encourages growth
                  throught experienced faculty, student support services and
                  extracurricular opportunities.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-7xl text-gray-600 leading-none">•</div>
              <div>
                <h1 className="font-bold text-lg md:text-xl mb-2">
                  Specialized Programs & Resources
                </h1>
                <p>
                  It offers courses, facilities, and mentorship in areas
                  directly aligned with yout career or academic goals.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-7xl text-gray-600 leading-none">•</div>
              <div>
                <h1 className="font-bold text-lg md:text-xl mb-2">
                  Learning & Growth
                </h1>
                <p>
                  The School provides extracurricular activities, clubs, sports,
                  and leadership opportunities that help students build
                  confidence, teamwork, and life skills beyond academics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className="bg-white py-16">
          <h1 className="flex items-center gap-2 px-10 mb-10">
            <span className="text-3xl text-gray-600 leading-none">•</span>
            <span className="text-lg">Extracurricular Activities</span>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center px-6 md:px-10">
            {ImagesExtracurricular.map((image, index) => (
              <div
                key={index}
                className="w-full max-w-xs flex flex-col items-center"
              >
                <img
                  src={image.img}
                  className="w-full h-60 object-cover rounded-xl shadow-md"
                  alt="image-division"
                />
                <p className="font-semibold text-center mt-3">{image.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Facilities */}
        <div className="bg-green-800 py-16 mb-20">
          <h1 className="flex items-center gap-2 px-10 mb-10 text-white">
            <span className="text-3xl text-white leading-none">•</span>
            <span className="text-lg">Our Facilities</span>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center px-6 md:px-10">
            {ImagesFacilities.map((image, index) => (
              <div
                key={index}
                className="w-full max-w-xs flex flex-col items-center"
              >
                <img
                  src={image.img}
                  className="w-full h-60 object-cover rounded-xl shadow-md"
                  alt="image-division"
                />
                <p className="font-semibold text-center mt-3 text-white">
                  {image.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Academics;
