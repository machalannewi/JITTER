import { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const About = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const tabs = {
    vision: {
      title: "Our Vision",
      content: `At Jiter Schools, our vision is to become a leading and distinguished center of academic excellence, renowned for delivering world-class education that nurtures both intellectual growth and strong moral character. We aspire to raise generations of confident, innovative, and responsible learners by providing a dynamic and inclusive learning environment. Guided by global educational best practices, we are committed to equipping our students with the knowledge, skills, and values they need to thrive in an ever-evolving world and to contribute meaningfully to society.`,
      image: (
        <img
          src="/images/Subtract (1).png"
          alt="Our Vision"
          className="w-full md:w-1/3 rounded-xl mt-6 md:mt-0"
        />
      ),
    },
    mission: {
      title: "Our Mission",
      content: `Our mission at Jiter Schools is to provide holistic, high-quality education through effective teaching, mentorship, and guidance that inspire students to achieve their full potential. We are dedicated to cultivating an environment where curiosity, creativity, critical thinking, and character development are actively encouraged. Through the tireless efforts of our passionate educators, we aim to shape young minds to become morally upright, academically accomplished, and socially responsible individuals who are prepared to create lasting, positive change in their communities and beyond.`,
      image: (
        <img
          src="/images/Subtract.png"
          alt="Our Mission"
          className="w-full md:w-1/3 rounded-xl mt-6 md:mt-0"
        />
      ),
    },
    values: {
      title: "Our Core Values",
      content: (
        <div className="flex flex-row md:gap-10">
          <ul className="list-disc md:pl-6 space-y-2 text-sm md:text-md">
            <li>Respect for God and humanity</li>
            <li>Punctuality</li>
            <li>Regularity</li>
            <li>Hard work</li>
            <li>Commitment to Success</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-md">
            <li>Self-esteem</li>
            <li>Integrity</li>
            <li>Stewardship</li>
            <li>Accountability</li>
            <li>Transparency</li>
          </ul>
        </div>
      ),
      image: (
        <img
          src="/images/Subtract (2).png"
          alt="Our Values"
          className="w-full md:w-1/3 rounded-xl mt-6 md:mt-0"
        />
      ),
    },
  };

  return (
    <>
      <Header />
      <div className="text-gray-800 mt-20">
        {/* Banner */}
        <div className="flex flex-col md:flex-row gap-6 px-6 md:px-20 py-10">
          <img
            src="/images/image 24.png"
            alt="about-img"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="md:w-1/2">
            <h1 className="font-bold text-center md:text-left md:text-xl mb-4">
              JITER NURSERY/PRIMARY & SECONDARY SCHOOL
            </h1>
            <div className="text-sm md:text-base leading-relaxed">
              <p className="mb-8">
                Jiter Nursery/ Primary School is an ultra modern school situated
                at the heart of Efuru, Delta State. The school takes pride in
                its nurturing environment is a testament to its commitment in
                excellence.
              </p>
              <p>
                Here, your child explores the learning curve to also enhance
                their social development. A home away from home. A facility
                where the kids experience elite facilities without a sweat from
                their wards.
              </p>
            </div>
          </div>
        </div>

        {/* History section */}
        <div className="py-16">
          <h1 className="flex items-center gap-2 px-10 mb-10">
            <span className="text-3xl text-gray-600 leading-none">•</span>
            <span>History</span>
          </h1>
          <h1 className="font-bold text-center text-xl md:text-2xl">
            HISTORY OF JITER
          </h1>
          <div className="px-6 md:px-20 py-10">
            <p className="text-sm md:text-base leading-relaxed">
              The emergence of this school named: Jiter Montessori Schools,
              Effurun was driven by the passion of the Proprietress to impact
              knowledge on children from tender age. This was as a result of the
              exposures and satisfactions that she derived from the opportunity
              she had in teaching and caring for babies little children years
              ago which actually groomed her passion to build lives. Again, the
              consistent increase in behavioural abnormalities and indecencies
              arisina from our decaving society where these abnormalities are
              now considered to be normal also led to her quest to finding
              permanent solution to this societal It is this vision that lead to
              the establishment of Jiter Montessori Schools, Effurun which
              commenced her academic operations on September 11, 2023 with the
              aim of ditching out guality education and good morals within the
              global educational standard practices by way of teaching.
              instructing. guiding and impacting the quality knowledge on our
              learners and breeding them in the right direction that will enable
              them to effect positive changes both in th society and the world
              at large.
            </p>

            {/* Tabs */}
            <div className="flex justify-center md:justify-between md:px-32 mt-16 gap-4">
              {Object.keys(tabs).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`px-2 md:px-12 py-2 w-44 md:w-56 text-sm rounded-2xl transition-all duration-200 
                ${
                  activeTab === tabKey
                    ? "bg-green-800 text-white"
                    : "bg-green-200 text-black hover:bg-green-300"
                }`}
                >
                  {tabKey === "vision"
                    ? "Vision"
                    : tabKey === "mission"
                    ? "Mission"
                    : "Core Values"}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex flex-col md:flex-row gap-10 mt-8 items-center">
              <div className="flex-1 text-sm md:text-base leading-relaxed">
                {tabs[activeTab].content}
              </div>
              {tabs[activeTab].image}
            </div>
          </div>
        </div>

        {/* Principal Message */}
        <div className="bg-green-200 py-16">
          <h1 className="flex items-center gap-2 px-10 mb-10">
            <span className="text-3xl text-gray-600 leading-none">•</span>
            <span>Principal Message</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-6 px-6 md:px-10">
            <img
              src="/images/Rectangle 33.png"
              alt="principal-img"
              className="w-full md:w-1/2 rounded-lg"
            />
            <div className="text-sm md:text-base leading-relaxed md:w-1/2">
              <h1 className="hidden font-bold md:text-left text-xl mb-6">
                Principal's Message
              </h1>
              <div className="">
                <p>
                  At Jiter Montessori Secondary School, we pride ourselves on
                  being more than just a school - we are a center of academic
                  excellence and character formation. Our academic programs are
                  carefully structured to provide a strong foundation in
                  literacy, numeracy, science, and critical thinking, while also
                  fostering creativity and problem-solving skills.
                </p>
                <p className="mt-8">
                  One of our unique strengths is our robust grading system,
                  modeled closely to equip the student for the University
                  system. This ensures that our students are not only evaluated
                  fairly but also prepared early for the kind of academic rigor
                  they will encounter in higher institutions. Our system rewards
                  consistency, hard work, and excellence, helping every child
                  develop a growth mindset and a spirit of resilience.
                </p>

                <p className="mt-8">
                  We are proud to state that Jiter Montessori School is
                  incorporated by the Corporate Affairs Commission (CAC) and is
                  fully accredited and registered with the Delta state
                  Government, Ministry of Basic and Secondary Education. This
                  official recognition is a testament to the high standards we
                  uphold in academics, discipline, and overall school
                  management.
                </p>

                <p className="mt-8">
                  Our success is also driven by a dedicated team of passionate
                  teachers who go beyond classroom instruction to mentor and
                  guide our pupils. With modern teaching facilities, a conducive
                  learning environment, and a well-structured academic calendar,
                  we ensure that every child entrusted to us excels both in
                  their studies and in personal development.
                </p>

                <p className="mt-8">
                  At Jiter Montessori School, we believe that education is the
                  greatest investment in a child's future - and we remain
                  committed to producing graduates who stand out academically,
                  morally, and socially, fully prepared to succeed in secondary
                  school and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Headmistress message */}
        <div className="py-12">
          <h1 className="flex items-center gap-2 px-10 mb-10">
            <span className="text-3xl text-gray-600 leading-none">•</span>
            <span>Headmistress Message</span>
          </h1>

          <h1 className="font-bold text-center text-xl md:text-2xl mb-6">
            TITLE OF MESSAGE
          </h1>

          <div className="text-sm md:text-base leading-relaxed px-6 md:px-10">
            <p>
              At Jiter Montessori Primary School, our greatest strength lies in
              the balance we maintain between sound academics and the true
              spirit of the Montessori approach. We believe that education
              should not only impact knowledge but also awaken curiosity,
              independence, and a lifelong love for learning.
            </p>

            <p className="mt-8">
              Our academic programs are structured to give every child a strong
              foundation in reading, writing, mathematics, and science, while
              also integrating critical thinking, creativity, and
              problem-solving into daily learning. The Montessori philosophy
              guides us to respect each child's pace of growth, providing
              opportunities for hands-on exploration. discovery and
              self-expression. This way, our pupils learn not just for exams but
              for life.
            </p>

            <p className="mt-8">
              We operate with a well-organized grading system that recognizes
              both effort and achievement ensuring that every child's progress
              is carefully monitored and nurtured. With dedicated teachers,
              modern learning resources, and a supportive environment, our
              pupils develop confidence and the discipline needed to excel
              academically and socialy.
            </p>

            <p className="mt-8">
              At Jiter Montessori school, we see each child as unique, gifted,
              and full of potential. Our mission is to cultivate that potential
              through an academic program that is both rigorous and
              child-centered, preparing them for future academic success and
              responsible living.
            </p>
          </div>
          <div className="text-center mt-10">
            <p className="font-bold">Ejarune Efe Priscilia</p>
            <p>HEADMISTRESS</p>
          </div>
        </div>

        {/* Manager message */}
        <div className=" py-12">
          <h1 className="flex items-center gap-2 px-10 mb-10">
            <span className="text-3xl text-gray-600 leading-none">•</span>
            <span>Manager Message</span>
          </h1>
          <h1 className="font-bold text-center text-xl md:text-2xl mb-6">
            TITLE OF MESSAGE
          </h1>

          <div className="text-sm md:text-base leading-relaxed px-6 md:px-10">
            <p>
              At Jiter Montessori school. we take pride in providing a nurturing
              and stimulating learning environment that reflects our commitment
              to excellence. Our Burset Primary section is equipped with modern
              infrastructure and state-of-the-art facilities designed to support
              both academic and personal development.
            </p>

            <p className="mt-8">
              Our classrooms are spacious, well-ventilated, and fitted with
              interactive learning tools that make lessons engaging and
              effective. The school boasts a full stocked library that
              encourages a culture of reading and research from an early age,
              alongside modern science and computer laboratories where pupils
              exolore innovation and creativity.
            </p>
            <p className="mt-8">
              For Physical and social development. we have a well-maintained
              playground, standard sporting facilities, and multipurpose hall
              that host cultural, artistic, and extracurricular activities.
              Safety is our top priority, and our secure learning environment is
              complemented by 24/7 surveillance svstems and dedicated health
              service.
            </p>
            <p className="mt-8">
              At Jiter Montessori school, our goal is not only to impart
              knowledge but also to inspire confidence, creativity, and
              character. With world-class infrastructure and a team or
              passionate educators. we are confident that everv child here is
              prepared for a bright future
            </p>
          </div>
          <div className="text-center mt-10">
            <p className="font-bold">Victoria Ataine</p>
            <p>MANAGER</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
