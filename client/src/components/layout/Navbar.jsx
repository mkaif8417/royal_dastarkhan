const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50  /70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-500">
          Royal Dastarkhan
        </h1>

        <ul className="hidden md:flex gap-8 text-white">
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;