import Image from "next/image";
import Article from "../../components/cards/article";

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
        <h3 className="text-5xl text-white z-20 font-bold absolute">Blog</h3>
      </section>
      <section className="container h-full item-center xl:h-128 px-4 xl:px-36 my-8">
        <h3 className="text-4xl font-bold">Related Articles</h3>
        <div className="flex flex-col w-full xl:flex-row justify-center items-center xl:justify-between">
          <Article />
          <Article />
          <Article />
        </div>
      </section>
    </div>
  );
}
