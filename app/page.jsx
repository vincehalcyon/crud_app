"use client";

import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function HomePage() {
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
          <div className="flex flex-col w-full">
            <textarea
              rows="4"
              className="resize-none rounded-md border border-primary w-full"
            ></textarea>
            <div className="flex justify-end pt-2">
              <button className="bg-primary px-3 py-1 text-white border border-primary hover:border-primary hover:bg-transparent hover:text-primary text-sm rounded-sm">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
