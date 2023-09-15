"use client";
import React from "react";
import { motion } from "framer-motion";
import StackIcon from "./StackIcon";
import StackInfo from "./StackInfo";

const Stack = () => {
  return (
    <div className="flex w-full flex-col sm:flex-row ">
      {/* <div className="flex w-full justify-end p-24">
        <StackIcon />
      </div> */}

      <StackInfo />
    </div>
  );
};

export default Stack;
