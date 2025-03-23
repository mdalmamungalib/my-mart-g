import React from "react";

const VerifyEmail = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        id="alert-additional-content-1"
        className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
        role="alert"
      >
        <div className="flex items-center">
          <svg
            className="w-4 h-4 shrink-0 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <h3 className="text-lg font-medium">Verify Your Email</h3>
        </div>
        <div className="mt-2 mb-4 text-sm">
          A verification email has been sent to your inbox. Please
          check your email and click on the verification link to
          activate your account.
        </div>
       
      </div>
    </div>
  );
};

export default VerifyEmail;
