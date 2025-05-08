import Image from "next/image";

export default function Article() {
  return (
    <div className="flex flex-col items-center justify-center w-[24rem] h-100 my-2 shadow-md">
      <Image
        alt="about"
        src="/images/article1.png"
        width="400"
        height={400}
        className="relative"
      ></Image>
      <div className="p-2 flex flex-col justify-between">
        <h5 className="font-bold text-black text-xl">
          10 secret tips to managing a remote team
        </h5>
        <p>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin...
        </p>
        <div className="flex justify-between items-center w-5/6 mt-8">
          <Image
            alt="avatar"
            src="/Images/Avatar.png"
            height={40}
            width={40}
          ></Image>
          <p className="text-[#80011F]">John Birmingham</p> |
          <p>25 January 2025</p>
        </div>
      </div>
    </div>
  );
}
