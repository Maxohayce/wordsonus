"use client";

import Article from "../components/cards/article";
import Resource from "../components/cards/resource";
import TestimonialsCarousel from "../components/carousel/TestimonialsCrousel";
import Image from "next/image";
import { useBlog } from "../context/BlogProvider";
import Link from "next/link";

export default function Home() {
  const { posts, loading } = useBlog();
  return (
    <main>
      <section className="relative text-white flex flex-col items-center justify-center mt-20">
        <div className="w-full h-screen relative">
          <Image
            alt="landing"
            src="/images/landing.png"
            fill
            className="object-cover"
          />
        </div>
        <div className=" flex justify-center items-center absolute z-20 top-0 left-0 px-6 sm:px-12 md:px-24 lg:px-36 h-full ">
          <div className="flex flex-col justify-evenly items-start w-full h-4/5 ">
            <h1 className="text-4xl md:text-6xl w-full md:w-4/6">
              Connecting brands with their target audience through authentic
              storytelling
            </h1>
            <p className="w-5/6 md:w-3/6 text-xl">
              Transform your ideas into compelling narratives with Words On Us,
              the leading content development agency in Lagos, Nigeria.
            </p>
            <div className="w-4/5 md:w-2/5 flex justify-between items-center">
              <button className="py-3 px-12 bg-[#800117] font-bold rounded-3xl hover:bg-white hover:text-[#800117]">
                Get in Touch
              </button>
              <button className="py-3 px-12 bg-inherit font-bold  border-2 border-white  rounded-3xl text-white hover:text-[#800117] hover:bg-white">
                Learn more
              </button>
            </div>
            <div className="flex w-4/5 md:w-2/5 items-center justify-between">
              <div className="flex relative">
                <Image
                  alt=""
                  src="/images/Ellipse 29.png"
                  width={50}
                  height={50}
                  objectFit="contain"
                  className="absolute z-50 top-0 left-0"
                />
                <Image
                  alt=""
                  src="/images/Ellipse 30.png"
                  width={50}
                  height={50}
                  objectFit="contain"
                  className=" absolute z-40 top-0 left-8"
                />
                <Image
                  alt=""
                  src="/images/Ellipse 31.png"
                  width={50}
                  height={50}
                  objectFit="contain"
                  className="absolute left-16 z-30"
                />
                <Image
                  alt=""
                  src="/images/Ellipse 32.png"
                  width={50}
                  height={50}
                  objectFit="contain"
                  className="absolute z-20 top-0 left-24"
                />
                <Image
                  alt=""
                  src="/images/Ellipse 33.png"
                  width={50}
                  height={50}
                  objectFit="contain"
                  className="z-10 top-0 ml-32"
                />
              </div>
              <p>+20k satisfied clients</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f5]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4 sm:px-8 md:px-24 xl:px-36 py-20">
          {[
            {
              title: "content strategy",
              desc: "Tailored strategies that amplify your brand’s message and drive meaningful audience engagement.",
              img: "strategy",
            },
            {
              title: "Social Media management",
              desc: "Elevating your online presence with expert curation and data-driven social media management.",
              img: "management",
            },
            {
              title: "content creation",
              desc: "High-quality content developed to captivate, engage, and turn viewers into a loyal audience.",
              img: "creation",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-between items-center shadow-xl text-center rounded-md px-8 py-4"
            >
              <Image
                alt={card.title}
                src={`/images/${card.img.toLowerCase().replace(/ /g, "")}.svg`}
                height={100}
                width={100}
              />
              <h5 className="text-lg font-semibold mt-4">{card.title}</h5>
              <p className="mt-2 text-md">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 md:px-24 xl:px-36 pb-28">
          <div className="relative md:ml-20 mb-12 md:mb-0">
            <div className="absolute z-0 h-56 w-40 top-0 left-72">
              <Image
                alt="group-dot"
                src="/images/groupdot.svg"
                fill={true}
                objectFit="cover"
              />
            </div>
            <div className="w-96 z-20 h-128">
              <Image
                alt="brand"
                src="/images/brand.png"
                fill={true}
                objectFit="contain"
              />
            </div>
            <span className="bg-[#800117] rounded-full absolute z-20 h-36 w-36 p-6 text-white top-96 right-80 flex flex-col justify-between items-center">
              <h3>5+</h3>
              <p>
                Years of <br /> efficiency
              </p>
            </span>
          </div>
          <div className="flex flex-col justify-between items-start h-80 w-[32rem]">
            <h3>Elevate Your Brand Story</h3>
            <p>
              We believe in the power of storytelling to increase brand
              visibility and connect you with your target audience. We know that
              your brand is online to be seen and heard, and we know how to make
              it happen.
            </p>
            <p>
              Whether you&apos;re a small business, a startup, or an individual
              professional, the Words on Us team is dedicated to developing
              content that not only engages but also converts.
            </p>
            <button className="py-3 px-12 bg-[#800117] font-bold  text-white rounded-3xl hover:text-black"></button>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="bg-[#800117] text-white py-12  px-6 sm:px-12 md:px-24 lg:px-72 flex flex-row items-center justify-around text-center scroll-mt-16"
      >
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
            url: "https://ng.linkedin.com/company/wordsonus ",
            text: "/images/linkedIn.svg",
          },
          {
            url: "https://www.tiktok.com/@wordsonus.content ",
            text: "/images/tiktok.svg",
          },
        ].map((stat, index) => (
          <a href={stat.url} key={index}>
            <Image alt={stat.text} src={stat.text} height={50} width={50} />
          </a>
        ))}
      </section>
      <section className="flex flex-col justify-between items-center px-6 sm:px-12 md:px-24 lg:px-36 text-center h-auto">
        <h5>service</h5>
        <h3>What we Offer</h3>
        <p className="md:w-3/4">
          With the following comprehensive content development services, the
          Words on Us team combines creativity and strategy to achieve our goal
          of connecting brands to their target audience
        </p>
        <div className="flex flex-col md:flex-row justify-between flex-wrap mt-16">
          <div className="w-96 h-80 bg-white flex flex-col justify-evenly items-center shadow-xl text-start rounded-sm px-8 mb-12">
            <div className="flex justify-around items-center w-full">
              <Image
                alt="strategy"
                src="/images/strategy.svg"
                height={100}
                width={100}
              />
              <h5>
                content <br /> strategy
              </h5>
            </div>
            <p>
              Align Your Message, Amplify Your Impact. We develop comprehensive
              content strategies that align with your business goals and engage
              your target audience.
            </p>
          </div>
          <div className="w-96 h-80 bg-white flex flex-col justify-evenly items-center shadow-xl text-start rounded-sm px-8 mb-12">
            <div className="flex justify-around items-center w-full">
              <Image
                alt="management"
                src="/images/management.svg"
                height={100}
                width={100}
              />
              <h5>
                Social Media <br /> management
              </h5>
            </div>
            <p>
              We&apos;ll manage your social media accounts from the professional
              platforms to the entertainment platforms, we’ll create engaging
              content, and build a loyal online community.
            </p>
          </div>
          <div className="w-96 h-80 bg-white flex flex-col justify-evenly items-center shadow-xl text-start rounded-sm px-8 mb-12">
            <div className="flex justify-around items-center w-full">
              <Image
                alt="consulting"
                src="/images/consulting.svg"
                height={100}
                width={100}
              />
              <h5>
                social media <br /> marketing <br /> consulting
              </h5>
            </div>
            <p>
              We’ll provide consultation services to help you develop an
              effective social media strategy, and train your team to capture
              the moments that make an impact on viewers’ minds.
            </p>
          </div>
          <div className="w-96 h-80 bg-white flex flex-col justify-evenly items-center shadow-xl text-start rounded-sm px-12 mb-12">
            <div className="flex justify-around items-center w-full">
              <Image
                alt="creation"
                src="/images/creation.svg"
                height={100}
                width={100}
              />
              <h5>
                content <br /> creation
              </h5>
            </div>
            <p>
              We develop visual content that grabs attention. The Words on Us
              team is equipped to shoot content that converts, for both goods
              and services.
            </p>
          </div>
          <div className="w-96 h-80 bg-white flex flex-col justify-evenly items-center shadow-xl text-start rounded-sm px-12">
            <div className="flex justify-around items-center w-full">
              <Image
                alt="writing"
                src="/images/writing.svg"
                height={100}
                width={100}
              />
              <h5>
                Social Media <br /> management
              </h5>
            </div>
            <p>
              The Words on Us team includes incredible writers who can take your
              message and turn it into content that people actually enjoy
              reading; whether as social media captions, blog articles,
              newsletters, books or scripts.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-8 md:flex-row justify-between items-center px-6 sm:px-12 md:px-24 lg:px-36 py-28">
          <div className="flex flex-col justify-between items-start h-96 w-[32rem]">
            <h5>about us</h5>
            <h3>Bridging the Gap Between Ideas and Expression</h3>

            <p>
              In today’s digital marketplace, visibility is currency. With
              technology at the core of modern business, your ability to
              communicate clearly and effectively across digital platforms can
              make or break your brand. At Words on Us, we help businesses and
              individuals express their message with clarity, creativity, and
              strategy.
            </p>
            <button className="py-3 px-12 bg-[#800117] text-white rounded-3xl"></button>
          </div>
          <div className="relative">
            <span className="absolute z-0 h-56 w-36 top-72 left-72">
              <Image
                alt="groupdot"
                src="/images/groupdot.svg"
                fill={true}
                objectFit="cover"
              />
            </span>
            <div className="w-96 h-128">
              <Image
                alt="brand"
                src="/images/agency.png"
                fill={true}
                objectFit="contain"
              />
            </div>
            <span className="bg-[#800117] rounded-md absolute z-20 h-40 w-40 p-4 text-white text-center top-[22rem] right-72 flex flex-col justify-between items-center">
              <div>
                <Image
                  alt="brand"
                  src="/images/award.svg"
                  height={100}
                  width={100}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <p className="mb-1">Award Winning Agency</p>
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <TestimonialsCarousel />
        <div className="flex flex-col justify-between items-center ">
          <h5>blog</h5>
          <h3>Our Recent News</h3>
          <p>Stay up-to-date with Industry Insights</p>
        </div>
        <div className="flex flex-col justify-between py-16  px-6 sm:px-12 md:px-24 lg:px-36">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-center w-full ">
            {loading ? (
              <p>Loading...</p>
            ) : posts.length > 0 ? (
              posts.slice(0, 3).map((post) => (
                <div key={post.id} className="cursor-pointer">
                  <Article post={post} />
                </div>
              ))
            ) : (
              <p>No posts available.</p>
            )}
          </div>
          <button className="py-3 px-12 mt-4 font-bold text-white rounded-3xl bg-[#800117] hover:text-black  self-end">
            <Link href="/blog"> Visit blog {">>>"} </Link>
          </button>
        </div>
        <div className="flex flex-col justify-between items-start w-full  px-6 sm:px-12 md:px-24 lg:px-36 ">
          <h3>Resources</h3>
          <p className="w-4/5 md:w-1/3">
            Free Resources to Enhance Your Content E-books, whitepapers,
            webinars, or other downloadable resources
          </p>
        </div>
        <div className="flex flex-col justify-between items-center py-8  px-6 sm:px-12 md:px-24 lg:px-36">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-center w-full">
            <Resource pic="/images/firstresource.png" />
            <Resource pic="/images/2ndresource.png" />
            <Resource pic="/images/3rdresource.png" />
          </div>
          <button className="py-3 px-12 mt-4 font-bold text-white rounded-3xl bg-[#800117] hover:text-black self-end">
            <Link href="/resources"> View more{"..."} </Link>
          </button>
        </div>
      </section>
    </main>
  );
}
