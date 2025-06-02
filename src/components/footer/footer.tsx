import Link from "next/link";
import Image from "next/image";
import Newsletter from "../newsletter/newsletter";

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
      <Newsletter />
      <section className="flex flex-col xl:flex-row justify-between xl:items-start p-8 xl:p-32">
        <div className="container-custom p-3 flex flex-col items-center">
          <Link href="/">
            <Image src="/images/logo.jpg" alt="logo" width={50} height={50} />
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
