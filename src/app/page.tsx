'use client';
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className="h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold mb-6">Welcome to BlogApp</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        Explore, write, and share your stories with the world. Join our community today to start your blogging journey!
      </p>
      <div className="space-x-4">
        <button
          onClick={() => router.push("/posts")}
          className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-200"
        >
          View Posts
        </button>
        <button
          onClick={() => router.push("/register")}
          className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-yellow-600"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
