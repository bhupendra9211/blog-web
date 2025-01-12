'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Post from "@/components/Post";

const Posts = () => {
  const router = useRouter();
  const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("token");

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  return isLoggedIn ? (
    <div className="p-8">
      <Post />
    </div>
  ) : null;
};

export default Posts;
