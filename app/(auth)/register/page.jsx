import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { BsPencil } from "react-icons/bs";

export default function RegisterPage() {
  return (
    <>
      <div className="flex h-[100vh]">
        <div className="w-3/4 bg-primary"></div>
        <div className="w-1/4 flex items-center justify-center px-10">
          <form action="">
            <div className="flex flex-col w-full text-center">
              <span className="pb-[30px] text-primary">
                Create your account
              </span>
              <div class="mb-4">
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <BsPencil className="text-primary" />
                  </span>
                  <input
                    class="border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div class="mb-4">
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaRegUser className="text-primary" />
                  </span>
                  <input
                    class="border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div class="mb-10">
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FiLock className="text-primary" />
                  </span>
                  <input
                    class="border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="text"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button
                className="bg-primary p-3 text-white hover:bg-transparent border-2 border-primary hover:text-primary"
                type="button"
              >
                Sign Up
              </button>
              <div className="flex items-center pt-[20px]">
                <span className="text-main-black">
                  Already have an account? &nbsp;
                </span>
                <Link
                  href="/login"
                  className=" text-main-black hover:text-primary"
                >
                  Login here
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
