import Link from "next/link";
import Image from "next/image";

const Services = [
  "Content Strategy",
  "Social Media Management",
  "Social Media Marketing Consulting",
  "Content  Creation",
  "Content Writing",
];
const QuickLinks = [
  "Home",
  "About Us",
  "Service",
  "Blog",
  "Resources",
  "Contact",
];
const ContactUs = [
  "jacobchinyere@gmail.com",
  "wordsonus@gmail.com",
  "07036406453",
];

export default function Footer() {
  return (
    <footer className="w-full  flex flex-col item-center">
      <section className="flex flex-col xl:flex-row justify-around item-center xl:justify-between bg-[#800117] h-72 px-4 xl:px-32 xl:items-center">
        <div className=" w-full xl:w-1/2">
          <p className="text-xl text-start">STAY UP TO DATE</p>
          <h3 className="text-5xl">Subscribe to our Newsletter</h3>
        </div>
        <div className="w-full xl:w-1/2 flex">
          <input
            type="text"
            className="p-5 w-2/3"
            placeholder="perfectman@gmail.com"
          ></input>
          <button className="p-5 bg-black text-white w-1/3 xl:w-52">
            Subscribe
          </button>
        </div>
      </section>
      <section className="flex flex-col xl:flex-row justify-between xl:items-start p-8 xl:p-32">
        <div className="container-custom p-3 flex flex-col items-center">
          <Link href="/">
            <Image src="/images/logo.jpg" alt="logo" width={49} height={47} />
          </Link>
          <p>Your Ideas our perfection</p>
        </div>
        <div className="pb-6 ">
          <h5>SERVICES</h5>
          <ul>
            {Services.map((item) => (
              <li key={item} className="pt-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="pb-6">
          <h5>QUICKLINKS</h5>
          <ul>
            {QuickLinks.map((item) => (
              <li key={item} className="pt-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="pb-6 ">
          <h5>CONTACT US</h5>
          <ul>
            {ContactUs.map((item) => (
              <li key={item} className="pt-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
}
