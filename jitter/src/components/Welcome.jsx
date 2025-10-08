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
          src="/images/Subtract (1).png"
          alt="Our Vision"
          className="w-full md:w-1/3 rounded-xl"
        />
      ),
    },
    mission: {
      title: "Our Mission",
      content: `Our mission at Jiter Schools is to provide holistic, high-quality education through effective teaching, mentorship, and guidance that inspire students to achieve their full potential. We are dedicated to cultivating an environment where curiosity, creativity, critical thinking, and character development are actively encouraged. Through the tireless efforts of our
passionate educators, we aim to shape young minds to become morally upright, academically accomplished, and socially responsible individuals who are prepared to create lasting, positive change in their communities and beyond.`,
      image: (
        <img
          src="/images/Subtract.png"
          alt="Our Mission"
          className="w-full md:w-1/3 rounded-xl"
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
          className="w-full md:w-1/3 rounded-xl"
        />
      ),
    },
  };

  return (
    <div className="py-16">
      <h1 className="flex items-center gap-2 px-10 md:mb-10">
        <span className="text-3xl text-gray-600 leading-none">•</span>
        <span>Welcome</span>
      </h1>
      <div className="px-6 md:px-20 py-10">
        <p>
          Jiter is a comprehensive educational institution encompassing nursery,
          primary, and secondary levels. Our mission is to foster lifelong
          learning within a supportive, inclusive, and nurturing environment. We
          are committed to excellence through dedicated and skilled educators
          who inspire young minds to excel-academically, morally, and
          personally-guiding them toward self-fulfillment, strong character, and
          a purpose-driven life.
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
          <div className="flex-1">{tabs[activeTab].content}</div>
          {tabs[activeTab].image}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
