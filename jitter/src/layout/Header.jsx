import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "News & Events", href: "/news" },
  { name: "Academics", href: "/academics" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current path

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 md:h-20 bg-green-200 shadow-sm">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-4 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link
            to="/"
            className="-m-1.5 p-1.5 flex cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img src="/images/jiter-logo.png" className="h-12 w-12" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-colors"
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close menu" : "Open main menu"}
            </span>
            {mobileMenuOpen ? (
              <XMarkIcon aria-hidden="true" className="size-6" />
            ) : (
              <Bars3Icon aria-hidden="true" className="size-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-4 right-4 bg-white rounded-lg shadow-lg border border-gray-200 py-2 lg:hidden">
            {navigation.map((item) => {
              const isActive =
                location.pathname === item.href ||
                (item.href !== "/" && location.pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-semibold transition-colors duration-200 rounded-md ${
                    isActive
                      ? "bg-green-800 text-white"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="border-t border-gray-200 mt-2 pt-2 px-4 pb-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`inline-block text-sm font-semibold px-4 py-2 rounded-md transition-colors ${
                  location.pathname === "/contact"
                    ? "bg-green-800 text-white"
                    : "bg-green-800 text-white hover:bg-green-700"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-2 rounded-lg h-10 bg-white">
          {navigation.map((item) => {
            const isActive =
              location.pathname === item.href ||
              (item.href !== "/" && location.pathname.startsWith(item.href));

            return (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm/6 text-gray-900 transition-all duration-200 cursor-pointer"
              >
                <div
                  className={`h-10 px-6 flex items-center rounded-md transition-all duration-200 ${
                    isActive ? "bg-green-800 text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Contact Button (Right Side) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
          <Link
            to="/contact"
            className={`text-sm/6 px-5 py-2 rounded-md transition-colors ${
              location.pathname === "/contact"
                ? "bg-green-800 text-white"
                : "bg-green-800 text-white hover:bg-green-700"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
