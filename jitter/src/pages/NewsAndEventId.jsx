import { useParams } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/outline";
import { FaShare, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const allNews = [
  {
    id: 1,
    title:
      "Jiter Upgrades ICT Hub with 10 New State-of-the-Art Computers for Digital Learning",
    image: "/images/image 2.png",
    content:
      "As part of its continued investment in quality education, Jiter has completed a major upgrade to its ICT hub, installing 10 state-of-the-art computers to enhance digital learning for students across all grade levels. The new systems are equipped with the latest educational software, high-speed internet access, and student-friendly interfaces that support a wide range of learning activities — including coding, research, multimedia creation, and interactive academic tools. This upgrade aligns with Jiter’s broader mission to build a tech-savvy generation of learners who are prepared for the global digital economy. With this development, students will now have access to a more enriched digital learning environment, guided by trained ICT instructors who ensure the safe and productive use of technology in education. The ICT lab is also being integrated into cross-curricular activities, allowing students to apply technology skills across subjects such as Science, Math, and Arts. Jiter continues to raise the bar in providing modern learning facilities that foster creativity, critical thinking, and innovation.",
  },
  {
    id: 2,
    title:
      "Jiter Prepares for New Academic Session: Admissions Open, Staff Recruitment Ongoing",
    image: "/images/image 10.png",
    content:
      "Jiter Montessori Nursery, Primary and Secondary Schools is excited to announce  the resumption of a new academic session. As part of its growth and commitment to excellence, the school has officially opened its doors for student admissions and is actively engaged in staff recruitment across various academic and administrative roles. Prospective students are encouraged to apply early, as spaces are limited in certain key grades due to high demand. Jiter remains dedicated to offering a well-rounded curriculum that balances academics, technology, values, and creative expression. Meanwhile, the school’s recruitment process is ongoing, targeting qualified, passionate, and experienced educators and support staff. The minimum qualification required for teaching roles is a Bachelor of Education (B.Ed) or its equivalent in a relevant field. Candidates with a strong classroom presence, up-to-date teaching methods, and a child-friendly approach will be given priority. In addition to academic roles, the school is also looking to fill positions in administrative support and facility management, ensuring smooth operations for the new term. Interested applicants are invited to submit their CVs and credentials to the school’s official email or recruitment portal or in person. Shortlisted candidates will be contacted for interviews.",
  },
  {
    id: 3,
    title:
      "Two New School Buses Arrive in Effurun to Support Student and Staff Transport — Experienced Drivers Wanted",
    image: "/images/bus 1.png",
    content:
      "In a strategic move to improve accessibility and convenience, Jiter is proud to announce the arrival of two brand-new school buses in Effurun. These buses are part of the school’s growing transportation initiative designed to serve both students and staff during the school term. The buses, which have just been delivered to Effurun, are fully equipped with modern safety features, comfortable seating, air conditioning, and designated pick-up and drop-off points. This initiative will greatly reduce commuting stress for families and staff members who travel from various parts of the city. By offering this structured transportation service, Jiter aims to ensure punctuality, safety, and ease of movement, particularly during peak traffic hours. Professional drivers and bus attendants will be assigned to each route to ensure the wellbeing of all passengers. To support this service, Jiter is currently inviting applications from experienced and qualified drivers. Candidates must possess a valid driver’s license, have a strong safety record, and be familiar with driving routes in and around Effurun. Prior experience with school transportation or passenger vehicles will be an added advantage. Registration for the bus service is open, and interested parents, staff, or driver applicants are encouraged to contact the school office (via email or at the school premises) for more details on routes, schedules, and job requirements.",
  },
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
