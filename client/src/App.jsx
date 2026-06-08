import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen bg-[var(--qode-background-color)] text-white p-4 md:p-6 lg:p-8">
      {/* Luxury Frame */}
      <div className="relative min-h-[calc(100vh-2rem)] fidalgo-frame md:min-h-[calc(100vh-3rem)]">
{/* Vertical Lines */}
<div className="absolute top-24 md:top-32 bottom-16 md:bottom-20 left-4 md:left-8 lg:left-12 w-px bg-[#C9A581]/20"></div>

<div className="absolute top-24 md:top-32 bottom-16 md:bottom-20 right-4 md:right-8 lg:right-12 w-px bg-[#C9A581]/20"></div>

<div className="absolute bottom-4 left-8 md:left-16 lg:left-24 right-8 md:right-16 lg:right-24 h-px bg-[#C9A581]/20"></div>
{/* Top Left */}

<div className=" absolute top-1 left-5 lg:top-6 md:left-10 lg:left-16 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 border-t border-l border-[#C9A581]"></div>

{/* Top Right*/}


<div className="absolute  top-1 right-5 lg:top-6  md:right-10 lg:right-16 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 border-t border-r border-[#C9A581]"></div> 

{/* Bottom Left */}
<div className="absolute bottom-8 left-4 md:left-8 lg:left-12 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border-b border-l border-[#C9A581]"></div>

<div className="absolute bottom-10 left-6 md:left-10 lg:left-16 lg:bottom-12 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 border-b border-l border-[#C9A581]"></div>

{/* Bottom Right */}
<div className="absolute bottom-8 right-4 md:right-8 lg:right-12  w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border-b border-r border-[#C9A581]"></div>

<div className="absolute bottom-10 right-6 md:right-10 lg:right-16 lg:bottom-12 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 border-b border-r border-[#C9A581]"></div>


        {/* Content */}
        <div className="relative px-4 sm:px-6 md:px-10 lg:px-14">
          <Navbar />
<Hero/>
<AppRoutes />

{/* <Hero/>
<Hero/>
<Hero/>
<Hero/> */}
    
        </div>

      </div>
    </div>
  );
}

export default App;