import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg p-6 flex flex-col space-y-4">
      <nav className="flex flex-col space-y-2">
        <Link
          to="/admin"
          className="px-3 py-2 rounded hover:bg-indigo-100 font-medium text-gray-700"
        >
          Dashboard
        </Link>
        <Link
          to="/admin/users"
          className="px-3 py-2 rounded hover:bg-indigo-100 font-medium text-gray-700"
        >
          Users
        </Link>
        <Link
          to="/admin/settings"
          className="px-3 py-2 rounded hover:bg-indigo-100 font-medium text-gray-700"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
