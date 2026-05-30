import { useState } from "react";
import logo from "../../assets/images/final_logo.png";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="relative w-full h-24">

        {/* Logo */}
        <div className="absolute left-[8%] md:left-[10%] lg:left-[10%] top-1/2 -translate-y-1/2">
          <img
            src={logo}
            alt="Royal Dastarkhan"
            className="h-16 md:h-35 lg:h-45  w-auto object-contain"
          />
        </div>

        {/* Hamburger */}
        <button
          aria-label="Menu"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="absolute right-[8%] md:right-[10%] lg:right-[10%] top-1/2 -translate-y-1/2 flex flex-col items-end gap-2 cursor-pointer"
        >
          <span
            className={`h-[2px] bg-[#C9A581] transition-all duration-300 ${
              hovered ? "w-8" : "w-12"
            }`}
          />

          <span
            className={`h-[2px] bg-[#C9A581] transition-all duration-300 ${
              hovered ? "w-12" : "w-8"
            }`}
          />
        </button>

      </div>
    </header>
  );
};

export default Navbar;