"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getPosts } from "../api/fetchposts";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const fetched = await getPosts();
      setPosts(fetched);
      setLoading(false);
    }
    loadPosts();
  }, []);

  return (
    <BlogContext.Provider value={{ posts, loading }}>
      {children}
    </BlogContext.Provider>
  );
}

export const useBlog = () => useContext(BlogContext);
