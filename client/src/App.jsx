import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[var(--qode-background-color)] text-white">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;