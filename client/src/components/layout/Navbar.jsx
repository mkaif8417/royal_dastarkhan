import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/final_logo.png";
import '../../styles/animations.css';

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [crossHovered, setCrossHovered] = useState(false); // ✅ moved inside

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

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div className="relative w-full">

        <div className="relative h-24 md:h-28 lg:h-32">

          <div className="absolute left-[8%] md:left-[10%] lg:left-[10%] top-1/2 -translate-y-1/2">
            <img
              src={logo}
              alt="Royal Dastarkhan"
              className="h-16 mt-3 md:h-[90px] lg:h-[110px] w-auto object-contain"
            />
          </div>

          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="absolute right-[8%] md:right-[10%] lg:right-[10%] top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center cursor-pointer z-50"
          >
            {menuOpen ? (
              <div
                className="w-12 h-12 flex flex-col items-center justify-center gap-1"
                onMouseEnter={() => setCrossHovered(true)}
                onMouseLeave={() => setCrossHovered(false)}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cross-svg"
                >
                  <line x1="8" y1="8" x2="32" y2="32" stroke="#C9A581" strokeWidth="3.5" strokeLinecap="round" className="cross-line-1" />
                  <line x1="32" y1="8" x2="8" y2="32" stroke="#C9A581" strokeWidth="3.5" strokeLinecap="round" className="cross-line-2" />
                </svg>
                <span
                  className="block h-[1.5px] bg-[#C9A581] transition-all duration-500 ease-in-out"
                  style={{ width: crossHovered ? "36px" : "0px" }}
                />
              </div>
            ) : (
              <div className="flex flex-col items-end gap-2">
                <span className={`h-[1.5px] bg-[#C9A581] transition-all duration-300 ${hovered ? "w-8" : "w-12"}`} />
                <span className={`h-[1.5px] bg-[#C9A581] transition-all duration-300 ${hovered ? "w-12" : "w-8"}`} />
              </div>
            )}
          </button>
        </div>

        <div className="absolute top-20 md:top-28 lg:top-32 left-8 right-8 md:left-16 md:right-16 lg:left-40 lg:right-40 h-px bg-[#C9A581]/20"></div>

        <div
          className={`relative z-50 overflow-hidden transition-all duration-700 ease-in-out ${
            menuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-8 py-10">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="relative text-[#C9A581] text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light tracking-wide transition-all duration-300 hover:tracking-[8px] hover:scale-105 group"
              >
                {link.name}
                {/* ✅ underline on each nav link */}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#C9A581] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-4 md:top-4 left-1/2 -translate-x-1/2 w-[65%] sm:w-[65%] md:w-[70%] lg:w-[75%] h-px bg-[#C9A581]/20"></div>
    </header>
  );
};

export default Navbar;