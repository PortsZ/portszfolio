"use client";
import React from "react";
import { motion } from "framer-motion";
import StackIcon from "./StackIcon";
import StackInfo from "./StackInfo";

const Stack = () => {
  return (
    <div className="flex w-full flex-col sm:flex-row justify-center items-center">
      {/* <div className="flex w-full justify-end p-24">
        <StackIcon />
      </div> */}

      <StackInfo />
    </div>
  );
};

export default Stack;
