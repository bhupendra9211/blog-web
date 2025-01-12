'use client';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    setIsLoggedIn(!!token);
    if (storedUsername) setUsername(storedUsername);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div
          className="text-2xl text-white font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          BlogVerse
        </div>
        <div>
          {isLoggedIn ? (
            <div className="relative group">
              <button className="bg-gray-700 text-white px-4 py-2 rounded">
                {username || "User"}
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-md hidden group-hover:block">
                <button
                  className="block px-4 py-2 text-gray-700 w-full hover:bg-gray-100"
                  onClick={() => router.push("/profile")}
                >
                  Profile
                </button>
                <button
                  className="block px-4 py-2 text-gray-700 w-full hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex space-x-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                onClick={() => router.push("/login")}
              >
                Login
              </button>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400"
                onClick={() => router.push("/signup")}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
