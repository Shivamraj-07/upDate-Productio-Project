import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-700 flex flex-col justify-center items-center text-white p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl mb-12">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="bg-white bg-opacity-20 p-8 rounded-lg backdrop-filter backdrop-blur-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Get notified when we launch
          </h2>
          <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-64 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-red-600 hover:bg-red-700 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Notify Me
            </button>
          </form>
        </div>
        <div className="mt-12 space-x-6">
          {[
            { Icon: FaInstagram, href: "https://www.instagram.com/update_edu/profilecard/?igsh=bDF3eDUxOG1wbHZ2" },
            { Icon: FaTwitter, href: "https://x.com/update_edu?t=kOObnmQ39MvdZXlH8Og_Ng&s=09" },
            { Icon: FaLinkedin, href: "https://www.linkedin.com/company/updateedu/" },
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-2xl hover:text-red-200 transition-colors duration-300"
            >
              <Icon />
            </a>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/"
            className="text-lg hover:underline transition duration-300 ease-in-out"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;