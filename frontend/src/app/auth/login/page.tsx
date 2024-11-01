"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@radix-ui/themes";

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Redirect to the NestJS backend’s OAuth2 endpoint for Google
    router.push("http://localhost:5000/auth/google");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Welcome to ChatApp
        </h1>
        <Button
          className="w-full px-4 py-2 text-white font-medium bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={handleLogin}
        >
          Login with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
