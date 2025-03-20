const LoadingPage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
        {/* Logo or Icon */}
        <div className="flex items-center gap-2 text-3xl font-bold text-gray-800 dark:text-white">
          🛍️ ShopEase
        </div>
  
        {/* Animated Dots */}
        <div className="flex mt-4 space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
        </div>
  
        {/* Loading Message */}
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Preparing your shopping experience...
        </p>
      </div>
    );
  };
  
  export default LoadingPage;
  