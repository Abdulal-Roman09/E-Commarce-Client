import React from "react";
import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-orange-100 to-pink-100 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-4xl grid md:grid-cols-2">
        {/* Left Side (Brand / Welcome Text) */}
        <div className="hidden md:flex flex-col items-center justify-center bg-indigo-600 text-white rounded-l-2xl p-10">
          <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-center text-lg">
            Please login with your personal info or create a new account to get
            started.
          </p>
        </div>

        {/* Right Side (Form Area) */}
        <div className="flex flex-col items-center justify-center p-10">
          <div className="w-full max-w-md">
            {/* Nav Tabs (Login / Register) */}
            {/* <div className="flex justify-around mb-6">
              <Link
                to="/login"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Register
              </Link>
            </div> */}

            {/* Form will render here (Login or Register page) */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
