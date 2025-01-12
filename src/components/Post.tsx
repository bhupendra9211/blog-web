'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const Post = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/posts", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.data.status && Array.isArray(response.data.data)) {
          setPosts(response.data.data);
        } else {
          console.error("Unexpected response format:", response.data);
          setPosts([]);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-100 py-20 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to BlogVerse</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A space to explore, share, and connect through stories and knowledge.
        </p>
      </div>

      {/* Post Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post: any) => (
              <div
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-transform transform hover:scale-105"
              >
                <img
                  src={`http://127.0.0.1:8000/storage/${post.image_path}`}
                  alt={post.title}
                  className="rounded-t-lg h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {post.content.length > 120
                      ? `${post.content.slice(0, 120)}...`
                      : post.content}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>By: {post.user.username}</span>
                    <span>{new Date(post.created_at).toLocaleDateString()}</span>
                  </div>
                  <button className="block w-full bg-blue-600 text-white py-2 rounded-md text-center font-medium hover:bg-blue-700 transition">
                    Read More
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No posts available at the moment. Check back later!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
