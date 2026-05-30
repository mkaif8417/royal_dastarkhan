import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[var(--qode-background-color)] text-white p-4 md:p-6 lg:p-8">
      {/* Luxury Frame */}
      <div className="relative min-h-[calc(100vh-2rem)] fidalgo-frame md:min-h-[calc(100vh-3rem)]">
{/* Vertical Lines */}
<div className="absolute top-20 bottom-20 left-18 w-px bg-[#C9A581]/20"></div>
<div className="absolute top-20 bottom-20 right-18 w-px bg-[#C9A581]/20"></div>

{/* Horizontal Lines */}
<div className="absolute left-20 right-20 top-6 h-px bg-[#C9A581]/20"></div>
<div className="absolute left-20 right-20 bottom-6 h-px bg-[#C9A581]/20"></div>

{/* Corners */}
{/* left top */}
<div className="absolute top-4 left-18 w-20 h-20 border-t border-l border-[#C9A581]"></div>
<div className="absolute top-8 left-22 w-10 h-10 border-t border-l border-[#C9A581]"></div>
{/* right top */}
<div className="absolute top-4 right-18 w-20 h-20 border-t border-r border-[#C9A581]"></div>
<div className="absolute top-8 right-22 w-10 h-10 border-t border-r border-[#C9A581]"></div>
{/* bottom left */}
<div className="absolute bottom-8 left-18 w-20 h-20 border-b border-l border-[#C9A581]"></div>
<div className="absolute bottom-12 left-22 w-10 h-10 border-b border-l border-[#C9A581]"></div>
{/* bottom right */}
<div className="absolute bottom-8 right-18 w-20 h-20 border-b border-r border-[#C9A581]"></div>
<div className="absolute bottom-12 right-22 w-10 h-10 border-b border-r border-[#C9A581]"></div>



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