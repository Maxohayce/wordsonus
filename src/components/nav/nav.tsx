import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "./routes";
import { Menu, X } from "lucide-react"; // Import icons for the mobile menu toggle
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { id: 1, label: "Home", href: Routes.home },
  { id: 2, label: "About", href: Routes.about },
  // { id: 3, label: "Services", href: Routes.services },
  { id: 4, label: "Blog", href: Routes.blog },
  { id: 5, label: "Resources", href: Routes.resources },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 sm:px-12 md:px-24 xl:px-36 w-full h-20 fixed top-0 z-40 bg-black">
      {/* Logo */}
      <div className="p-3 flex">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={80} height={80} />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex w-4/6 justify-between items-center">
        <ul className="flex justify-between items-center text-white w-full">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className="hover:text-[#800117] font-bold">
                {item.label}
              </Link>
            </li>
          ))}
          <Link href="/contact" scroll={true}>
            <button className="text-white border-2 border-white rounded-3xl py-3 px-12 bg-[#800117] font-bold hover:bg-white hover:text-[#800117]">
              Contact Us
            </button>
          </Link>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center py-4 md:hidden"
          >
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
              <Link href="/contact">Contact Us</Link>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
