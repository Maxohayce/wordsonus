"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useBlog } from "../../context/BlogProvider";
import Article from "../../components/cards/article";
import CommentBox from "../../components/commentBox/commentBox";

function decodeGraphQLPostId(encodedId: string): number {
  try {
    const decoded = atob(encodedId);
    const parts = decoded.split(":");
    return parseInt(parts[1], 10);
  } catch (error) {
    console.error("Failed to decode post ID:", encodedId, error);
    return NaN;
  }
}

export default function BlogPage() {
  const { posts, loading } = useBlog();
  const [selectedPost, setSelectedPost] = useState(null);

  const postRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedPost && postRef.current) {
      postRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedPost]);

  return (
    <div className="mt-20">
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

      {/* Conditionally Render Selected Article */}
      {selectedPost && (
        <section
          ref={postRef}
          className="container px-4 xl:px-36 my-8 scroll-mt-20"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">{selectedPost.title}</h2>
            <div className="flex justify-between items-center w-full max-w-[26rem] mt-8 gap-4">
              <Image
                alt="avatar"
                src="/images/Avatar.png"
                height={40}
                width={40}
                className="rounded-full"
              />
              <p className="text-[#80011F]">John Birmingham</p>
              <span className="text-gray-400">|</span>
              <p>{new Date(selectedPost.date).toLocaleString()}</p>
            </div>
            <div className="relative w-full h-96 my-4 ">
              <Image
                alt="selected-article"
                src={selectedPost.featuredImage.node.sourceUrl}
                fill
                className="object-cover md:object-contain"
              />
            </div>
            <div
              className="prose mb-8 px-6 sm:px-12 md:px-24 lg:px-72"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />

            <div className="flex items-center px-6 sm:px-12 md:px-24 lg:px-36 ">
              <Image
                alt="strategy"
                src="/images/ellipse29.png"
                height={50}
                width={50}
                className="object-contain"
              />
              <div className="flex flex-col w-full md:w-1/3 items-start justify-center ml-8">
                <h5>WRITTEN BY</h5>
                <p>John Birmingham</p>
                <p>
                  COO at Team. Author of the upcoming book on Team Management
                  and Leadership.
                </p>
              </div>
            </div>
            <CommentBox
              postId={decodeGraphQLPostId(selectedPost?.id)}
              key={decodeGraphQLPostId(selectedPost?.id)}
            />
          </div>
        </section>
      )}

      {/* Blog Card List */}
      <section className="container px-6 sm:px-12 md:px-24 lg:px-36 my-8">
        <h3 className="text-4xl font-bold pb-8">Related Articles</h3>
        <div className="flex flex-col xl:flex-row flex-wrap gap-8 justify-center">
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
