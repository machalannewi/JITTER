import React, { useState } from "react";

const Welcome = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const tabs = {
    vision: {
      title: "Our Vision",
      content: `At Jiter Schools, our vision is to become a leading and
        distinguished center of academic excellence, renowned for delivering
        world-class education that nurtures both intellectual growth and
        strong moral character. We aspire to raise generations of confident,
        innovative, and responsible learners by providing a dynamic and
        inclusive learning environment. Guided by global educational best
        practices, we are committed to equipping our students with the
        knowledge, skills, and values they need to thrive in an
        ever-evolving world and to contribute meaningfully to society.`,
      image: (
        <img
          src="/images/vision.jpg"
          alt="Our Vision"
          className="w-full md:w-1/3 border-4 border-green-600 rounded-lg 
            [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%,0%_75%,15%_75%,15%_25%,0%_25%)]"
        />
      ),
    },
    mission: {
      title: "Our Mission",
      content: `Our mission at Jiter Schools is to provide holistic, high-quality education through effective teaching, mentorship, and guidance that inspire students to achieve their full potential. We are dedicated to cultivating an environment where curiosity, creativity, critical thinking, and character development are actively encouraged. Through the tireless efforts of our
passionate educators, we aim to shape young minds to become morally upright, academically accomplished, and socially responsible individuals who are prepared to create lasting, positive change in their communities and beyond.`,
      image: "/images/mission.jpg",
    },
    values: {
      title: "Our Core Values",
      content: (
        <div className="flex gap-20">
          <ul className="list-disc pl-6 space-y-2">
            <li>Respect for God and humanity</li>
            <li>Punctuality</li>
            <li>Regularity</li>
            <li>Hard work</li>
            <li>Commitment to Success</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2">
            <li>Self-esteem</li>
            <li>Integrity</li>
            <li>Stewardship</li>
            <li>Accountability</li>
            <li>Transparency</li>
          </ul>
        </div>
      ),
    },
  };

  return (
    <div>
      <h1 className="list-item p-5">Welcome</h1>
      <div className="px-6 md:px-20 py-10">
        <p>
          Jiter is a comprehensive educational institution encompassing nursery,
          primary and secondary levels. Our mission is to foster lifelong
          learning within a supportive, inclusive, and nurturing environment.
        </p>

        {/* Tabs */}
        <div className="flex justify-center md:justify-between px-4 md:px-32 mt-16 gap-4">
          {Object.keys(tabs).map((tabKey) => (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`px-6 md:px-12 py-2 text-sm rounded-2xl transition-all duration-200 
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
          <p className="flex-1">{tabs[activeTab].content}</p>
          <img
            src={tabs[activeTab].image}
            alt={tabs[activeTab].title}
            className="w-full md:w-1/3 rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
