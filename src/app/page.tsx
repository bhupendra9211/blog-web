'use client';
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className="h-screen bg-gray-100 text-gray-800 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Welcome to BlogApp
        </h1>
        <p className="text-lg mb-8 text-gray-700">
          A platform to explore, create, and share your stories. Join our
          community to make your voice heard. Start your blogging journey today!
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => router.push("/posts")}
            className="px-6 py-3 text-white bg-blue-600 font-medium rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            View Posts
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="px-6 py-3 text-white bg-green-600 font-medium rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
