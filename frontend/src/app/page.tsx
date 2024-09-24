"use client";

import React from "react";

const Home = () => {
  const [message, setMessage] = React.useState("");

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:8089");
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error calling API:", error);
      alert("Failed to call the API");
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
