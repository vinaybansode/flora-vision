import { useState } from "react";
import { FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="max-w-[1500px] mx-auto px-6 py-6 flex justify-between items-center text-white">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold">
          🌿 FloraVision
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-12 text-lg">
          <li className="cursor-pointer hover:text-green-300 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-green-300 transition">
            Plants Type
          </li>

          <li className="cursor-pointer hover:text-green-300 transition">
            More
          </li>

          <li className="cursor-pointer hover:text-green-300 transition">
            Contact
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-xl">

          <FaSearch className="cursor-pointer hover:scale-110 transition" />

          <FaShoppingBag className="cursor-pointer hover:scale-110 transition" />

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}

      {open && (
        <div className="lg:hidden bg-black/80 backdrop-blur-md">

          <ul className="flex flex-col items-center gap-8 py-8 text-xl">

            <li onClick={() => setOpen(false)}>Home</li>

            <li onClick={() => setOpen(false)}>
              Plants Type
            </li>

            <li onClick={() => setOpen(false)}>
              More
            </li>

            <li onClick={() => setOpen(false)}>
              Contact
            </li>

          </ul>

        </div>
      )}
    </>
  );
}