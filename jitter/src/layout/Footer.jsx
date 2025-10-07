import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-10">
          <img src="/images/jiter-logo.png" alt="Logo" className="w-12" />
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-22">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex gap-8 w-56">
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Academics
                  </a>
                </li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    News & Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Photo Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">
              Email us:{" "}
              <a
                href="mailto:jiterontessorischool@gmail.com"
                className="hover:underline"
              >
                jitermontessorischool@gmail.com
              </a>
            </p>
            <div className="text-sm flex gap-2 w-72">
              <h1>Call us:</h1>
              <div className="text-sm space-y-1">
                <p>+234 816 500 6086</p>
                <p>+234 907 892 5841</p>
                <p>+234 915 926 5466</p>
                <p>+234 807 818 2612</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-2">
              <a href="#" className="p-2 rounded-full bg-gray-700">
                <FaInstagram className="text-xl hover:text-green-600" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-700">
                <FaTiktok className="text-xl hover:text-green-600" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-700">
                <FaLinkedin className="text-xl hover:text-green-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12">
          <h3 className="font-semibold mb-2 text-center md:text-right">
            Subscribe To Our News Letter
          </h3>
          <div className="relative flex justify-center md:justify-end">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="p-2 rounded-md text-gray-700 bg-white w-full md:w-96"
            />
            <button className="absolute right-1 top-1 bg-green-800 px-5 text-sm text-white rounded-md hover:bg-green-700 h-8">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-xs mt-10 border-t border-gray-700 pt-6 text-gray-400">
          © 2025 Jiter Nursery/Primary and Secondary School. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
