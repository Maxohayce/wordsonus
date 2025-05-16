"use client";

import Article from "../components/cards/article";
import Success from "../components/cards/success";
import Resource from "../components/cards/resource";
import Image from "next/image";
import { useBlog } from "../context/blogcontext";

export default function Home() {
  const { posts, loading } = useBlog();
  return (
    <main>
      <section className="relative text-white flex flex-col items-center justify-center">
        <div className="w-full h-screen relative">
          <Image
            alt="landing"
            src="/images/landing.png"
            fill
            className="object-cover"
          />
        </div>
        <div className=" flex justify-center items-center absolute z-20 top-10 left-0 px-6 sm:px-12 md:px-24 lg:px-36 h-full ">
          <div className="flex flex-col justify-evenly items-start w-full h-4/5 ">
            <h1 className="text-5xl md:text-7xl w-full md:w-4/5">
              Connecting brands with their target audience through authentic
              storytelling
            </h1>
            <p className="w-full md:w-3/5 text-xl">
              Transform your ideas into compelling narratives with Words On Us,
              the leading content development agency in Lagos, Nigeria.
            </p>
            <div className="w-4/5 md:w-2/5 flex justify-between items-center">
              <button className="py-3 px-12 bg-[#800117] rounded-3xl">
                Get in Touch
              </button>
              <button className="py-2 px-12 bg-inherit border-2 border-white  rounded-3xl text-white">
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
              <p>+120k satisfied clients</p>
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
              At Words on Us, we believe in the power of storytelling to elevate
              brands and connect them with their target audience.
            </p>
            <p>
              Whether you&apos;re a corporate giant, a startup, or an individual
              professional, our expert team is here to craft content that not
              only engages but delivers results.
            </p>
            <button className="py-3 px-12 bg-[#800117] text-white rounded-3xl">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <div className="bg-[#800117] text-white py-12  px-6 sm:px-12 md:px-24 lg:px-36 flex flex-col md:flex-row items-center justify-around text-center mb-12">
        {[
          { number: "120K+", text: "Clients worldwide" },
          { number: "200K+", text: "Projects completed" },
          { number: "100K+", text: "Satisfied clients" },
        ].map((stat, index) => (
          <div
            key={index}
            className="mb-4 md:mb-0 xl:flex flex-row items-center justify-between xl:w-1/5"
          >
            <h3 className="text-2xl md:text-4xl xl:text-5xl font-bold">
              {stat.number}
            </h3>
            <p className="text-sm md:text-lg text-end">{stat.text}</p>
          </div>
        ))}
      </div>
      <section className="flex flex-col justify-between items-center px-6 sm:px-12 md:px-24 lg:px-36 text-center h-auto">
        <h5>service</h5>
        <h3>What we Offer</h3>
        <p className="md:w-3/4">
          Elevate your brand&apos;s narrative with our comprehensive content
          development services. Our experts combine creativity and strategy to
          produce high-quality content that informs, educates, and inspires.
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
              content strategies that align with your business goals and target
              audience.
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
              We&apos;ll manage your social media accounts, create engaging
              content, and grow your online community.
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
              Align Your Message, Amplify Your ImpactWe develop comprehensive
              content strategies that align with your business goals and target
              audience.
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
              Our team crafts high-quality content that captivates your audience
              and drives results.
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
              Our experienced writers deliver well-researched, engaging content
              that meets your needs.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-8 md:flex-row justify-between items-center px-6 sm:px-12 md:px-24 lg:px-36 py-28">
          <div className="flex flex-col justify-between items-start h-80 w-[32rem]">
            <h5>about us</h5>
            <h3>Content Development agency</h3>

            <p>
              Found in Lagos,Words On Us was created to help businesses and
              professionals tell their stories and more effectively. We
              understand the importance of clear, creative, and compelling
              content in today’s digital world.
            </p>
            <button className="py-3 px-12 bg-[#800117] text-white rounded-3xl">
              Learn More
            </button>
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
        <div className="flex justify-between items-center w-full px-6 sm:px-12 md:px-24 lg:px-36">
          <div>
            <h5>portfolio</h5>
            <h3>Our Amazing Works</h3>
            <p>Explore real results from our clients</p>
          </div>
          <div className="flex items-center justify-between w-28">
            <Image
              alt="arrow_back"
              src="/images/arrow_back.svg"
              width={50}
              height={50}
              className="border-2 border-[#800117] rounded-full"
            />
            <Image
              alt="arrow_forward"
              src="/images/arrow_forward.svg"
              width={50}
              height={50}
              className="rounded-full bg-[#800117]"
            />
          </div>
        </div>
        <div className="flex flex-col h-[65rem] md:h-auto md:flex-row justify-between items-center w-full my-20 px-6 sm:px-12 md:px-24 xl:px-36 ">
          <div className="bg-red-500 h-60 w-96">
            <Image
              alt="work1"
              src="/images/works1.png"
              width={100}
              height={100}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className="h-60 w-96">
            <Image
              alt="work2"
              src="/images/works2.png"
              width={100}
              height={100}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className="h-60 w-auto">
            <Image
              alt="work3"
              src="/images/works3.png"
              width={100}
              height={100}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center px-6 sm:px-12 md:px-24 xl:px-36 ">
        <div className="flex flex-col justify-between items-center">
          <h5>testimonials</h5>
          <h3>Our Clients Success Stories</h3>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full py-16">
          <Success />
          <Success />
          <Success />
        </div>
        <div className="flex flex-col justify-between items-center">
          <h5>blog</h5>
          <h3>Our Recent News</h3>
          <p>Stay up-to-date with Industry Insights</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full py-16">
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
        <div className="flex flex-col justify-between items-start w-full">
          <h3>Resources</h3>
          <p className="w-4/5 md:w-1/3">
            Free Resources to Enhance Your Content E-books, whitepapers,
            webinars, or other downloadable resources
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full py-16">
          <Resource pic="/images/firstresource.png" />
          <Resource pic="/images/2ndresource.png" />
          <Resource pic="/images/3rdresource.png" />
        </div>
      </section>
    </main>
  );
}
