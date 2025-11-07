

import React, { useState } from "react";
import { Menu, X, Cog } from "lucide-react";
import { navLinks } from "../utils/data";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  

  return (
    <header className="font-body text-amber-500 fixed top-0 left-0 w-full z-50 bg-[rgba(255,253,245,0.8)] backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    
        
        <a href="/" className="text-2xl flex font-bold font-title bg-gradient-to-r from-yellow-900 to-slate-900 bg-clip-text text-transparent">
          Jossy <span className=" text-yellow-700 font-light text-sm md:font-large -mt-1 -ml-2"><Cog size={24} className="animate-spin-slow" /></span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ id, label, href, Icon }) => (
            <li key={id}>
              <a
                href={href}
                className="flex items-center gap-2 text-gray-700 hover:text-yellow-700 transition"
              >
                <Icon size={18} />
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden h-screen bg-[rgba(255,253,245,0.95)] shadow-md backdrop-blur-md">
          <ul className="flex flex-col items-start  gap-4 py-6">
            {navLinks.map(({ id, label, href, Icon }) => (
              <li key={id} className="py-2">
                <a
                  href={href}
                  className="flex px-4 items-center gap-2 text-gray-800 hover:text-yellow-700 transition"
                  onClick={() => setOpen(false)}
                >
                  <Icon size={18} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
