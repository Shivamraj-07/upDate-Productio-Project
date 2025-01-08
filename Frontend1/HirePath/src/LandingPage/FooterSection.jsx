import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footersection = () => {
  return (
    <footer className="bg-red-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">upDate</h2>
            <p className="text-sm">Helping you to find your dream job</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {["About Us", "Contact Us", "Career", "Privacy Policy"].map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase().replace(/\s+/g, '')}`}
                  className="hover:text-red-200 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
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
                  className="hover:text-red-200 transition-colors duration-300"
                >
                  <Icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-red-400 text-center">
          <p className="text-sm">&copy; 2024 upDate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footersection;