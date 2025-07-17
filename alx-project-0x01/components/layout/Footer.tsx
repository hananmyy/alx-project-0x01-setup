import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-auto">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">© {new Date().getFullYear()} Daily Contents. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;