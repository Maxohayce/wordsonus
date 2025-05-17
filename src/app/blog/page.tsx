"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useBlog } from "../../context/blogcontext";
import Article from "../../components/cards/article";

export default function BlogPage() {
  const { posts, loading } = useBlog();
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    if (posts.length > 0 && !selectedPost) {
      setSelectedPost(posts[0]);
    }
  }, [posts]);

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center relative">
        <div className="w-full h-128">
          <Image
            alt="blog"
            src="/images/about.png"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-5xl text-white z-20 font-bold absolute">Blog</h3>
      </section>
      <section className="container px-4 xl:px-36 my-8 ">
        {selectedPost ? (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">{selectedPost.title}</h2>

            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: selectedPost.excerpt }}
            />

            <div className="flex justify-between items-center w-full max-w-md mt-8 gap-4">
              <Image
                alt="avatar"
                src="/images/Avatar.png"
                height={40}
                width={40}
                className="rounded-full"
              />
              <p className="text-[#80011F]">John Birmingham</p>
              <span className="text-gray-400">|</span>
              <p>{selectedPost.date}</p>
            </div>
            <div className="relative w-full  h-96 mt-8 mx-auto">
              <Image
                alt="selectedarticlebg"
                src={selectedPost.featuredImage.node.sourceUrl}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex justify-between items-center py-8  w-full md:w-3/5 px-6 sm:px-12 md:px-24 lg:px-36 bg-red-500">
              <Image
                alt=" strategy"
                src="/images/star.svg"
                height={50}
                width={50}
              />
              <div className="flex flex-col w-2/3  items-start justify-center">
                <h5>WRITTEN BY</h5>
                <p>John Birmingham</p>
                <p>
                  COO at Team. Author of the upcoming book on Team Management
                  and Leadership.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading article...</p>
        )}
      </section>

      <section className="container px-6 sm:px-12 md:px-24 lg:px-36 my-8">
        <h3 className="text-4xl font-bold">Related Articles</h3>
        <div className="flex flex-col xl:flex-row flex-wrap gap-4 justify-center">
          {loading ? (
            <p>Loading...</p>
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="cursor-pointer"
              >
                <Article post={post} />
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </section>
    </div>
  );
}
