import Image from "next/image";
import React from "react";

type SuccessProps = {
  client: string;
  quote: string;
  about: string;
};

export default function Success({ client, quote, about }: SuccessProps) {
  return (
    <div className="w-80 h-96 bg-white flex flex-col justify-around text-start shadow-xl rounded-sm p-4 mb-12">
      <div className="flex justify-between items-start w-2/5">
        <Image alt=" strategy" src="/images/star.svg" height={20} width={20} />
        <Image alt=" strategy" src="/images/star.svg" height={20} width={20} />
        <Image alt=" strategy" src="/images/star.svg" height={20} width={20} />
        <Image alt=" strategy" src="/images/star.svg" height={20} width={20} />
        <Image alt=" strategy" src="/images/star.svg" height={20} width={20} />
      </div>
      <p>{quote}</p>
      <div className="flex justify-between items-center  w-5/6 ">
        {/* <Image
          alt=" strategy"
          src="/images/Ellipse 33.png"
          height={50}
          width={50}
        /> */}
        <div className="flex flex-col w-2/3  items-start justify-center">
          <h6>{client}</h6>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
}
