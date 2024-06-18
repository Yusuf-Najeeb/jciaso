import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ErrorPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="oops font-bold">Oops!</h1>
        <p className="-mt-10 text-xl">404 Page Not Found!</p>
        <p className="text-xl my-4">
          The page you are looking for might have been removed, has its name
          changed or temporarily unavailable.
        </p>
        <button className="bg-[#EC4B14] text-white rounded-xl px-4 py-2 animate-bounce my-4">
          <Link to={"/"}>Go to Home</Link>
        </button>
      </div>
    </main>
  );
};

export default ErrorPage;
