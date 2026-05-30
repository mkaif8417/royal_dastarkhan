import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/final_logo.png";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reservation", path: "/reservation" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="relative w-full">

        {/* Navbar */}
        <div className="relative h-32">

          {/* Logo */}
          <div className="absolute left-[8%] md:left-[10%] lg:left-[10%] top-1/2 -translate-y-1/2">
            <img
              src={logo}
              alt="Royal Dastarkhan"
              className="h-16 mt-3 md:h-[90px] lg:h-[110px] w-auto object-contain"
            />
          </div>

          {/* Menu Button */}
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="absolute right-[8%] md:right-[10%] lg:right-[10%] top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center cursor-pointer"
          >
            {menuOpen ? (
              <div className="relative w-10 h-10">
                <svg
                  key={menuOpen}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0"
                >
                  {/* Line 1: top-left to bottom-right (drawn first) */}
                  <line
                    x1="8" y1="8" x2="32" y2="32"
                    stroke="#C9A581"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: 34,
                      strokeDashoffset: 34,
                      animation: "drawLine1 0.3s ease forwards",
                    }}
                  />
                  {/* Line 2: top-right to bottom-left (drawn second, after delay) */}
                  <line
                    x1="32" y1="8" x2="8" y2="32"
                    stroke="#C9A581"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: 34,
                      strokeDashoffset: 34,
                      animation: "drawLine2 0.3s ease 0.3s forwards",
                    }}
                  />
                </svg>

                <style>{`
                  @keyframes drawLine1 {
                    to { stroke-dashoffset: 0; }
                  }
                  @keyframes drawLine2 {
                    to { stroke-dashoffset: 0; }
                  }
                `}</style>
              </div>
            ) : (
              <div className="flex flex-col items-end gap-2">

                {/* Top Line */}
                <span
                  className={`h-[1.5px] bg-[#C9A581] transition-all duration-300 ${
                    hovered ? "w-8" : "w-12"
                  }`}
                />

                {/* Bottom Line */}
                <span
                  className={`h-[1.5px] bg-[#C9A581] transition-all duration-300 ${
                    hovered ? "w-12" : "w-8"
                  }`}
                />
              </div>
            )}
          </button>
        </div>

        {/* Sliding Menu */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            menuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-8 py-10">

            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="
                  text-[#C9A581] text-3xl
                  md:text-4xl
                  font-light
                  tracking-wide
                  transition-all
                  duration-300
                  hover:tracking-[8px]
                  hover:scale-105
                "
              >
                {link.name}
              </Link>
            ))}

          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;