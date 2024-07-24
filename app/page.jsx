"use client";

import React, { useEffect, useState } from "react";
import apiInstance from "@/config/axios";

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch("http://localhost:3333/api/me");
      console.log("response", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("data", data);
      setUser(data);
    } catch (error) {
      setError(error.message);
    }
  };

  // Use useEffect to fetch user details on component mount
  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      <section>
        <div className="sticky top-0 z-10 w-full px-5 bg-primary">
          <div className="flex max-w-[1142px] w-full lg:mx-auto h-[100px] items-center">
            <div className="flex flex-row w-full justify-between">
              <div>LOGO HERE</div>
              <div>TEST HERE</div>
            </div>
          </div>
        </div>
        <div className="max-w-[1142px] w-full lg:mx-auto px-5 pt-[50px]">
          <div>
            <textarea
              rows="4"
              className="resize-none rounded-md border border-primary w-full"
            ></textarea>
            <button>Post</button>
          </div>
        </div>
      </section>
    </>
  );
}
