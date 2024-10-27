"use client";

import React from "react";

const Home: React.FC = () => {
  const [message, setMessage] = React.useState<string>("");

  const handleClick = async () => {
    try {
      const response = await fetch("https://realtalk-bfza.onrender.com");
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  return (
    <>
      <button onClick={handleClick} className="bg-blue-500 text-white p-2 rounded">
        Test API
      </button>
      <h1>{message}</h1>
    </>
  );
};

export default Home;
