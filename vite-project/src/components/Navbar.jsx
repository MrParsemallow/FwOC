import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 mx-4 my-4 flex h-16 items-center justify-between rounded-full border-1 border-neutral-800 bg-neutral-950/80 p-4 text-white backdrop-blur-md transition-all duration-300">
      {/* Brand / Logo Section */}
      <Link
        to="/"
        className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
      >
        <img src="hero.png" alt="Logo" className="h-8 w-auto" />
        <span className="text-lg font-bold tracking-tight">My App</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-x-6 text-sm font-medium">
        <Link to="/" className="hover:text-stone-400 transition-colors">
          Home
        </Link>
        <Link to="/todo" className="hover:text-stone-400 transition-colors">
          ToDo
        </Link>
        <Link to="/clock" className="hover:text-stone-400 transition-colors">
          Clock
        </Link>
        <Link to="/users" className="hover:text-stone-400 transition-colors">
          Users
        </Link>
      </div>

      {/* Auth Actions */}
      <div className="flex items-center space-x-2">
        <button className="cursor-pointer px-4 py-2 text-sm font-medium text-stone-300 hover:text-white transition-colors">
          Login
        </button>
        <button className="cursor-pointer rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-stone-200 active:scale-95">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
