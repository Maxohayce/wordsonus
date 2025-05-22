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
        <div className="flex flex-col justify-start  h-20 w-full text-white xl:w-1/2">
          <p className="text-xl text-start">STAY UP TO DATE</p>
          <h3 className="text-4xl mt-2">Subscribe to our Newsletter</h3>
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
            <div className="flex w-full md:w-4/5 justify-between">
              {[
                {
                  url: "https://www.instagram.com/wordsonus/ ",
                  text: "/images/instagram.svg",
                },
                {
                  url: "https://www.facebook.com/words.onus ",
                  text: "/images/facebook.svg",
                },
                {
                  url: "",
                  text: "/images/twitter.svg",
                },
                {
                  url: "https://ng.linkedin.com/company/wordsonus ",
                  text: "/images/linkedIn.svg",
                },
              ].map((stat, index) => (
                <a
                  href={stat.url}
                  key={index}
                  className="mb-4 md:mb-0 xl:flex flex-row items-center justify-between pt-1"
                >
                  <Image
                    alt={stat.text}
                    src={stat.text}
                    height={20}
                    width={20}
                  />
                </a>
              ))}
            </div>
          </ul>
        </div>
      </section>
    </footer>
  );
}
