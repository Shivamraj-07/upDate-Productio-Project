import React from "react";
import { Link } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <div className="space-x-6">
          <Link
            to="/admin"
            className="text-lg hover:text-blue-500 transition-colors"
          >
            Jobs
          </Link>
          <Link
  to="/admin/courses"
  className="text-lg hover:text-blue-500 transition-colors"
>
  Courses
</Link>
          <Link
            to="/admin/users"
            className="text-lg hover:text-blue-500 transition-colors"
          >
            Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminNavBar;
