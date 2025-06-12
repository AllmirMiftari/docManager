const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex items-center space-x-2">
        <div className="h-2.5 w-2.5 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-2.5 w-2.5 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-2.5 w-2.5 bg-black rounded-full animate-bounce"></div>
        <span className="text-sm text-gray-800 ml-3">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
