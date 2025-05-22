import Image from "next/image";

export default function Resource({ pic }) {
  return (
    <div className="flex flex-col items-center justify-center w-[24rem] h-80 my-6 shadow-md">
      <Image
        alt={"first-resource"}
        src={pic}
        width="400"
        height={400}
        className="relative"
      />
      <div className="p-2 flex flex-col mb-2">
        <h5 className="font-bold text-black text-xl">
          10 secret tips to managing a remote team
        </h5>
        <div className="flex justify-end items-center w-full">
          <Image
            alt="download"
            src="/images/download.svg"
            height={40}
            width={40}
          />
        </div>
      </div>
    </div>
  );
}
