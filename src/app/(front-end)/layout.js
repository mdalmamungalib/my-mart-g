import Navbar from "components/frontend/Navbar/Navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 mx-auto max-w-screen-2xl sm:p-6 lg:p-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-4 bg-gray-100">
        <div className="text-sm text-center text-gray-500">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
