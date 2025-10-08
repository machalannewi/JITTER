import { FaInstagram, FaTiktok, FaLinkedin, FaFacebook } from "react-icons/fa";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      {/* Banner */}
      <div className="flex flex-col md:flex-row items-center gap-6 px-6 md:px-12 py-10 mt-20">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-xl md:text-4xl mb-4">Stay In Touch</h1>
          <p className="text-sm md:text-base leading-relaxed">
            We'd love to hear from you! Whether you have a question, feedback,
            or simply want to connect, our team is here to help.
          </p>
          <p className="text-sm md:text-base leading-relaxed mt-8">
            Reach out to us via email, phone, or the form below, and we'll get
            back to you as quickly as possible.
          </p>
          <p className="text-sm md:text-base leading-relaxed mt-8">
            Follow us on our social media platforms to stay updated on news,
            events, and special offers.
          </p>
        </div>
        <img
          src="/images/Rectangle 7 (7).png"
          alt="about-img"
          className="w-full md:w-1/2 rounded-lg"
        />
      </div>

      {/* Contact us */}
      <div className="py-10 w-[100%]">
        <h1 className="flex items-center gap-2 px-10 mb-10">
          <span className="text-3xl text-gray-600 leading-none">•</span>
          <span>Contact Us</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-10 px-6 md:px-12">
          <div>
            <h1 className="text-2xl mb-6 -mt-4">Contact us</h1>
            <p className="mb-10">
              Have questions, want to book a consultation, or just say hello?
              We're here to help. Fill out the form below and our team will
              respond promptly.
            </p>

            <p>Email us: jitermontessorischool@gmail.com</p>

            <p className="mt-4">
              Address: No. 1 Paul Ataine Street, behind POWA, DSC Roundabout,
              Effurun.
            </p>

            <div className="text-sm flex gap-2 mt-4 mb-10">
              <h1>Call us:</h1>
              <div className="text-sm space-y-1">
                <p>+234 816 500 6086</p>
                <p>+234 907 892 5841</p>
                <p>+234 915 926 5466</p>
                <p>+234 807 818 2612</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold mb-4">Find us on social media</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/jiterschools?utm_source=qr&igsh=MThyenFzeWR4bm9pdA=="
                  className="p-2 rounded-full bg-gray-500"
                >
                  <FaInstagram className="text-xl text-white" />
                </a>
                <a
                  href="https://www.tiktok.com/@jiterschools?_t=ZS-90NAsWccoyI&_r=1"
                  className="p-2 rounded-full bg-gray-500"
                >
                  <FaTiktok className="text-xl text-white" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61581799777643"
                  className="p-2 rounded-full bg-gray-500"
                >
                  <FaFacebook className="text-xl text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#b0c4b1] pt-10 px-10 rounded-xl md:w-[50%]">
            <div className="flex flex-col gap-4 mb-4 text-white">
              <label htmlFor="name">Full Name*</label>
              <input
                className="border border-white text-white rounded-lg p-2"
                type="text"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="flex flex-col gap-4 mb-4 text-white">
              <label htmlFor="email">Email Address*</label>
              <input
                className="border border-white text-white rounded-lg p-2"
                type="email"
                placeholder="Enter Email Address"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4 text-white">
              <label htmlFor="phone">Phone Number*</label>
              <input
                className="border border-white text-white rounded-lg p-2"
                type="phone"
                placeholder="Enter Phone Number"
              />
            </div>

            <button className="bg-green-800 text-white py-2 px-6 text-sm rounded-lg mb-10 cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
