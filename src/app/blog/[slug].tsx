import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!slug) return;

    fetch(`https://blogs.wordsonus.ng.com/wp-json/wp/v2/posts?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => setPost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
}
