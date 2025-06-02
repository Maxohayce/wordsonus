// src/context/BlogProvider.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getPosts } from "../app/api/fetchposts";

// Reuse this type from your fetchPosts file or define it here
type Post = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
};

type BlogContextType = {
  posts: Post[];
  loading: boolean;
};

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <BlogContext.Provider value={{ posts, loading }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog(): BlogContextType {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
}
