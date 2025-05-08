import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "./routes";
import { Menu, X } from "lucide-react"; // Import icons for the mobile menu toggle

const navItems = [
  { id: 1, label: "Home", href: Routes.home },
  { id: 2, label: "About", href: Routes.about },
  { id: 3, label: "Services", href: Routes.services },
  { id: 4, label: "Blog", href: Routes.blog },
  { id: 5, label: "Resources", href: Routes.resources },
  { id: 6, label: "Contact", href: Routes.contact },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 sm:px-12 md:px-24 xl:px-36 w-full h-20 fixed top-0 z-40 bg-black">
      {/* Logo */}
      <div className="p-3 flex">
        <Link href="/">
          <Image src="/images/navlogo.png" alt="logo" width={49} height={47} />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex w-4/6 justify-between items-center">
        <ul className="flex justify-between text-white w-5/6">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className="hover:text-gray-400">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="text-white border-2 border-white rounded-3xl py-1 px-6 ml-4 bg-[#800117]">
          <Link href="/SignUp"> Sign Up</Link>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center py-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="py-2 hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className="mt-4 text-white border-2 border-white rounded-3xl py-2 px-6 bg-[#800117]">
            <Link href="/SignUp">Sign Up</Link>
          </button>
        </div>
      )}
    </nav>
  );
}
