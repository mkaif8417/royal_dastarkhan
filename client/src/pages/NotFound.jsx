import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pt-40 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl text-[#C9A581] mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>

      <Link
        to="/"
        className="border border-[#C9A581] px-6 py-3 text-[#C9A581] hover:bg-[#C9A581] hover:text-black transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;