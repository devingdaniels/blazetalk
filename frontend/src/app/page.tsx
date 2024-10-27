"use client";

import React from "react";

const URL = process.env.NEXT_PUBLIC_BACKEND_DEV_URL || "http://localhost:8089";

const Home: React.FC = () => {
  const [message, setMessage] = React.useState<string>("");

  const handleClick = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>{message}</h1>
        <button onClick={handleClick} className="bg-blue-500 text-white p-2 rounded">
          Test API
        </button>
        <button onClick={() => setMessage("")} className="bg-blue-500 text-white p-2 rounded">
          Reset
        </button>
      </div>
    </>
  );
};

export default Home;
