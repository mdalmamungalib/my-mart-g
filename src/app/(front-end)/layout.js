import Footer from "components/frontend/Footer/Footer";
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
      <Footer/>
    </div>
  );
};

export default Layout;
