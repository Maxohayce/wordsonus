import Image from "next/image";
import Link from "next/link";

export default function Article({ post }) {
  if (!post || !post.slug) return null; // Avoid rendering if post is invalid

  return (
    <div className="flex flex-col items-center justify-center w-[24rem] h-100 my-2 shadow-md">
      <Link href={`/blog/${post.slug}`}>
        {post.featuredImage?.node?.sourceUrl && (
          <Image
            alt={post.title}
            src={post.featuredImage.node.sourceUrl}
            width={400}
            height={400}
            className="relative"
          />
        )}
        <div className="p-2 flex flex-col justify-between">
          <h5 className="font-bold text-black text-xl">{post.title}</h5>
          <div
            className="text-gray-700 text-sm my-2"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
          <div className="flex justify-between items-center w-5/6 mt-8">
            <Image
              alt="avatar"
              src="/images/Avatar.png"
              height={40}
              width={40}
            />
            <p className="text-[#80011F]">Admin</p> | <p>{post.date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
