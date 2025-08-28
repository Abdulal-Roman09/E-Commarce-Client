import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md flex justify-between items-center px-6 py-4">
      {/* Logo */}
      <div className="text-xl font-bold text-indigo-600">Admin Panel</div>

      {/* Right Side - Profile / Logout */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 font-medium">Admin</span>
        <button className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
