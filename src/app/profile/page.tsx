'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

const Profile = () => {
  const router = useRouter();
  const username = typeof window !== "undefined" && localStorage.getItem("username");

  const [newUsername, setNewUsername] = useState(username || "");

  const handleSave = () => {
    localStorage.setItem("username", newUsername);
    alert("Profile updated!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
      <input
        type="text"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        className="border w-full max-w-md p-2 mb-4 rounded"
      />
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Profile;
