"use client";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { FiLock } from "react-icons/fi";
import Link from "next/link";
import apiInstance from "@/config/axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const handleSubmit = async (e) => {
    console.log("ssss");
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await apiInstance.post("/api/login", {
        email: username,
        password: password, 
      });

      console.log("response", response);
      const { token } = response.data;
      setLoading(false);
      alert("Login successful!");
      router.push("/");
    } catch (err) {
      setLoading(false);
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <div className="flex h-[100vh]">
        <div className="w-3/4 bg-primary"></div>
        <div className="w-1/4 flex items-center justify-center px-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full text-center">
              <span className="pb-[30px] text-primary">USER LOGIN</span>
              {error && <p className="text-red-500">{error}</p>}
              <div class="mb-4">
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaRegUser className="text-primary" />
                  </span>
                  <input
                    className="border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div class="mb-10">
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FiLock className="text-primary" />
                  </span>
                  <input
                    className="border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="bg-primary p-3 text-white hover:bg-transparent border-2 border-primary hover:text-primary"
                type="submit"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
              <Link href="/register" className="pt-5 text-main-black">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
