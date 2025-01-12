'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react';

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
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8">
            <h1 className="text-3xl font-extrabold text-white text-center mb-8">Latest Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.length > 0 ? (
                    posts.map((post: any) => (
                        <div 
                            key={post.id} 
                            className="bg-white p-4 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                        >
                            <div className="rounded overflow-hidden mb-4">
                                <img
                                    src={`http://127.0.0.1:8000/storage/${post.image_path}`}
                                    alt="Post"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 line-clamp-3 mb-4">
                                {post.content.length > 100 ? `${post.content.slice(0, 100)}...` : post.content}
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <p>By: {post.user.username}</p>
                                <p>{new Date(post.created_at).toLocaleDateString()}</p>
                            </div>
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-500 transition">
                                Read More
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-white text-lg text-center col-span-full">No posts available</p>
                )}
            </div>
        </div>
    );
}

export default Post;
