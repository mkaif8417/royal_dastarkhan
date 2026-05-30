import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[var(--qode-background-color)] text-white p-4 md:p-6 lg:p-8">

      {/* Luxury Frame */}
      <div className="relative min-h-[calc(100vh-2rem)] fidalgo-frame md:min-h-[calc(100vh-3rem)]">

        {/* Top Left */}
        <div className="absolute top-6 left-26 w-12 h-[2px] md:w-16  md:h-16 border-t border-l border-[#C9A581]/70"></div>

        {/* Top Right */}
        <div className="absolute top-6 right-16 w-12 md:w-16 h-12 md:h-16 border-t border-r border-[#C9A581]/70"></div>

        {/* Bottom Left */}
        <div className="absolute bottom-12 left-12 w-12 md:w-16 h-12 md:h-16 border-b border-l border-[#C9A581]/70"></div>

        {/* Bottom Right */}
        <div className="absolute bottom-12 right-12 w-12 md:w-16 h-12 md:h-16 border-b border-r border-[#C9A581]/70"></div>

        {/* Thin Border */}
        <div className="absolute inset-0 border border-[#C9A581]/20 pointer-events-none"></div>

        {/* Content */}
        <div className="relative px-6 md:px-10 lg:px-14">
          <Navbar />

          <Hero />
          <Hero />
          <Hero />
          <Hero />

          <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;