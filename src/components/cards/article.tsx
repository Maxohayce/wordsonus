import Image from "next/image";

export default function Article({ post }) {
  if (!post || !post.slug) return null;

  return (
    <div className="flex flex-col items-center justify-center w-[24rem] h-auto my-2 shadow-md overflow-hidden rounded-md">
      <div className="w-full">
        {post.featuredImage?.node?.sourceUrl && (
          <Image
            alt={post.title}
            src={post.featuredImage.node.sourceUrl}
            width={400}
            height={400}
            className="w-full h-[10rem] object-cover"
          />
        )}
        <div className="p-4 flex flex-col justify-between">
          <h5 className="font-bold text-black text-xl mb-2">{post.title}</h5>

          <div
            className="text-gray-700 text-sm mb-4 max-h-[4.5rem] overflow-hidden text-ellipsis"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />

          <div className="flex justify-between items-center w-full mt-auto">
            <div className="flex items-center gap-2">
              <Image
                alt="avatar"
                src="/images/Avatar.png"
                height={40}
                width={40}
              />
              <p className="text-[#80011F]">Admin</p>
            </div>
            <p className="text-sm text-gray-600">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
