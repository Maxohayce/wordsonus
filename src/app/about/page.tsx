import Image from "next/image";

export default function About() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center relative">
        <div className="w-full h-128 relative">
          <Image
            alt="about"
            src="/images/about.png"
            fill={true}
            objectFit="cover"
          ></Image>
        </div>
        <h3 className="text-5xl text-white z-20 font-bold absolute">
          About Us
        </h3>
      </section>
      <section className="flex flex-col justify-between items-center px-6 sm:px-12 md:px-24 lg:px-36 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8">
          <div className="flex flex-col justify-between items-start w-full lg:w-[32rem] h-96">
            <h5 className="text-sm sm:text-base">ABOUT OUR AGENCY</h5>
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Content Development Agency
            </h3>
            <p className="text-sm sm:text-base">
              Found in Lagos, Words On Us was created to help businesses and
              professionals tell their stories and more effectively. We
              understand the importance of clear, creative, and compelling
              content in today’s digital world.
            </p>
            <p className="text-sm sm:text-base">
              Our mission is to empower brands and individuals with content
              solutions that communicate their value and elevate their presence
              in their respective industries.
            </p>
            <span className="h-2 w-24 sm:w-32 bg-[#80011f] rounded-md"></span>
          </div>
          <div className="w-full lg:w-[40%] relative">
            <span className="absolute z-10 h-36 w-56 left-44 md:left-80">
              <Image
                alt="groupdot"
                src="/images/groupdot.svg"
                fill={true}
                objectFit="cover"
              />
            </span>
            <Image
              alt="lights"
              src="/images/lights.png"
              height={100}
              width={100}
              layout="responsive"
              objectFit="contain"
              className="z-30 relative"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full mt-12 gap-8">
          <div className="w-full md:w-3/5 h-auto relative">
            <span className="absolute z-0 h-36 w-56 top-[26rem] md:top-72 md:right-[34rem]">
              <Image
                alt="groupdot"
                src="/images/groupdot.svg"
                fill={true}
                objectFit="cover"
              />
            </span>
            <Image
              src="/images/woman.png"
              alt="woman"
              height={100}
              width={100}
              layout="responsive"
              objectFit="contain"
              className="relative"
            />
          </div>
          <div className="w-full md:w-2/5 h-auto relative">
            <Image
              src="/images/woman2.png"
              alt="woman2"
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 lg:flex-row justify-between px-6 sm:px-12 md:px-24 lg:px-36 items-center py-12">
        <div className="flex flex-col justify-between p-4 w-full lg:w-1/2">
          <h3 className="text-xl sm:text-2xl font-semibold">Our Values</h3>
          <div className="space-y-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="h-2 w-[12rem] bg-[#80011f] rounded-xl"></span>
              <p className="text-[#80011f] ml-2">Creativity</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="h-2 w-[12rem] bg-[#80011f] rounded-xl mr-2"></span>
              <p className="text-[#80011f]">Excellence</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="h-2 w-[12rem] bg-[#80011f] rounded-xl"></span>
              <p className="text-[#80011f] ml-2">Integrity</p>
            </div>

            <div className="flex justify-between items-center">
              <span className="h-2 w-[12rem] bg-[#80011f] rounded-xl"></span>
              <p className="text-[#80011f] ml-2 ">Constant Evolution</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between h-auto lg:h-40 w-full lg:w-2/5 px-4">
          <h3 className="text-xl sm:text-2xl font-semibold">
            Unique Selling Proposition
          </h3>
          <p className="mt-2 text-sm sm:text-base leading-relaxed">
            We don’t just create content, we craft stories that resonate. With a
            focus on delivering value and results, we ensure every piece of
            content is tailored to meet your objectives and engage your
            audience.
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-between items-center px-6 sm:px-12 md:px-24 lg:px-36 text-center h-auto">
        <h3 className="text-[#800117]">Why Choose Words on Us</h3>
        <p className="md:w-3/4">
          Whether you&apos;re building an audience, launching a product, a
          strengthening your brand presence, we create content that works.
        </p>
        <div className="flex flex-col md:flex-row justify-between flex-wrap mt-16">
          <div className="w-96 h-80 bg-white flex flex-col justify-evenly items-start shadow-xl text-start rounded-sm px-8 mb-12">
            <h5>Full-Service Advantage</h5>
            <p>
              Skip the hassle of juggling multiple vendors. Our integrated
              service approach keeps your message cohesive, clear, and
              compelling.
            </p>
          </div>
          <div className="w-96 h-80 bg-[#800117] text-white  flex flex-col justify-evenly items-start shadow-xl text-start rounded-sm px-8 mb-12">
            <h5 className="text-white ">Goal-Aligned Content</h5>
            <p>
              Every piece of content we create ties back to your business goals.
              We don’t post just to fill a calendar—we post to move your
              business forward.
            </p>
          </div>
          <div className="w-96 h-80 bg-white flex flex-col justify-evenly items-start shadow-xl text-start rounded-sm px-8 mb-12">
            <h5>You-Centered Strategy</h5>
            <p>
              We work closely with your brand standards and voice, sharing only
              relevant, timely, and tailored content.
            </p>
          </div>
          <div className="w-96 h-80 bg-[#800117] text-white flex flex-col justify-evenly items-start shadow-xl text-start rounded-sm px-12 mb-12">
            <h5 className="text-white">Audience Insight</h5>
            <p>
              Through research and analysis, we communicate your message in a
              way your audience will actually connect and engage with.
            </p>
          </div>
          <div className="w-96 h-80 bg-[#800117] text-white flex flex-col justify-evenly items-start shadow-xl text-start rounded-sm px-12">
            <h5 className="text-white">
              Feedback Driven
              <br /> Improvement
            </h5>
            <p>
              We collaborate, Your feedback shapes our process and helps us
              evolve with your business.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12 lg:flex-row justify-between px-6 sm:px-12 md:px-24 lg:px-36 items-center py-12 relative">
        <div className="w-full md:w-3/5 h-80 relative flex justify-center items-center">
          <div className="w-64 h-64 absolute z-20">
            <Image
              alt="Anita"
              src="/images/chinyere.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="w-64 h-64 relative top-4 left-4 md:left-8 xl:left-8 border-2 border-[#80011f] rounded-lg"></div>
        </div>

        <div className="flex flex-col justify-between items-start w-full lg:w-3/5 px-4">
          <h5>Meet the Founder</h5>
          <h3 className="text-xl sm:text-2xl font-semibold">
            Creative Director: Anita Izu Ohajinwa
          </h3>
          <p className="mt-2 text-sm sm:text-base leading-relaxed">
            I&apos;m Anita, the founder and creative director of Words on Us, a
            Lagos-based content development agency where storytelling combines
            with strategy to create visibility. I started out as a copywriter,
            but as my love for creating deepened, so did my skillset. Today, I
            lead my team through developing effective content strategies,
            directing social media video shoots, and producing high-impact
            creatives—from words to visuals and everything in between.
          </p>
          <br />
          <p>
            I’m also the author of The Self-Promotion Handbook and The
            Self-Improvement Handbook, and I run The Digital Academy Africa, an
            online school where I teach digital skills to creatives looking to
            grow their skill level and career toolkit. <br />I only take on
            projects I believe in, and work only with brands I genuinely connect
            with. If the work isn’t excellent, I won’t put it out; that’s the
            standard we keep around here.
          </p>
          <span className="h-2 w-20 bg-[#80011f] rounded-md mt-4"></span>
        </div>
      </section>
    </div>
  );
}
