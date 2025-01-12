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
    <nav className="bg-blue-600 p-4 flex justify-between items-center shadow-lg">
      <div
        className="text-white font-bold text-lg cursor-pointer"
        onClick={() => router.push("/")}
      >
        BlogApp
      </div>
      <div className="relative">
        {isLoggedIn ? (
          <div className="relative group">
            <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold">
              {username || "User"}
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-md hidden group-hover:block">
              <button
                className="block px-4 py-2 text-left w-full text-gray-700 hover:bg-gray-100"
                onClick={() => router.push("/profile")}
              >
                Profile
              </button>
              <button
                className="block px-4 py-2 text-left w-full text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="space-x-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded"
              onClick={() => router.push("/signup")}
            >
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
