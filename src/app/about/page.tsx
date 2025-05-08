import Image from "next/image";

export default function About() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center">
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
          <div className="flex flex-col justify-between items-start w-full lg:w-[32rem] h-auto">
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
            <span className="h-2 w-24 sm:w-32 bg-[#80011f] mt-4"></span>
          </div>
          <div className="w-full lg:w-[40%]">
            <Image
              alt="lights"
              src="/images/lights.png"
              height={100}
              width={100}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full mt-12 gap-8">
          <div className="w-full md:w-3/5 h-auto">
            <Image
              src="/images/woman.png"
              alt="woman"
              height={100}
              width={100}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className="w-full md:w-2/5 h-auto">
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
          <h3 className="text-xl sm:text-2xl font-semibold">Core Values</h3>
          <div className="space-y-4 mt-4">
            <div>
              <h6 className="text-sm sm:text-base font-medium">Creativity</h6>
              <div className="flex justify-between items-center">
                <span className="h-2 w-[26rem] bg-[#80011f] rounded-xl"></span>
                <p className="text-[#80011f] ml-2">95%</p>
              </div>
            </div>
            <div>
              <h6 className="text-sm sm:text-base font-medium">Excellence</h6>
              <div className="flex justify-between items-center">
                <span className="h-2 w-[28rem] bg-[#80011f] rounded-xl mr-2"></span>
                <p className="text-[#80011f]">100%</p>
              </div>
            </div>
            <div>
              <h6 className="text-sm sm:text-base font-medium">
                Customer-Centered Approach
              </h6>
              <div className="flex justify-between items-center">
                <span className="h-2 w-[24rem] bg-[#80011f] rounded-xl"></span>
                <p className="text-[#80011f] ml-2">90%</p>
              </div>
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

      <section className="flex flex-col gap-12 lg:flex-row justify-between px-6 sm:px-12 md:px-24 lg:px-36 items-center py-12 relative">
        <div className="w-full md:w-3/5 h-80 relative flex justify-center items-center">
          <div className="w-64 h-64 absolute z-20">
            <Image
              alt="Anita"
              src="/images/ceo.png"
              height={100}
              width={100}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className="w-64 h-64 relative top-4 left-4 md:left-8 xl:left-20 border-2 border-[#80011f] rounded-lg"></div>
        </div>

        <div className="flex flex-col justify-between items-start w-full lg:w-2/5 px-4">
          <h5 className="text-sm sm:text-base uppercase text-gray-600">
            Meet the Founder
          </h5>
          <h3 className="text-xl sm:text-2xl font-semibold">
            CEO: Anita Izu Ohajinwa
          </h3>
          <p className="mt-2 text-sm sm:text-base leading-relaxed">
            Found in Lagos, Words On Us was created to help businesses and
            professionals tell their stories more effectively. We understand the
            importance of clear, creative, and compelling content in today’s
            digital world.
          </p>
          <span className="h-2 w-20 bg-[#80011f] rounded-md mt-4"></span>
        </div>
      </section>
    </div>
  );
}
