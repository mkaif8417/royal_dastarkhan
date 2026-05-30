const Hero = () => {
  return (
    <section className="h-screen   flex items-center justify-center text-center">
      <div>
        <p className="text-yellow-500 uppercase tracking-[5px] mb-4">
          Welcome To
        </p>

        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          Royal Dastarkhan
        </h1>

        <p className="text-gray-300 max-w-xl mx-auto">
          Experience authentic flavors crafted with passion and tradition.
        </p>

        <button className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded">
          Explore Menu
        </button>
      </div>
    </section>
  );
};

export default Hero;