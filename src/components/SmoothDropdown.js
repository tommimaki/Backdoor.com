// components/SmoothDropdown.js
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SmoothDropdown = ({ description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggle = () => {
    setShowFullDescription(!showFullDescription);
  };

  const dropdownVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <>
      <AnimatePresence>
        {showFullDescription && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={dropdownVariants}
            transition={{ duration: 0.4 }}
          >
            {description.split("\n").map((paragraph, index) => {
              if (index === 0) {
                return null;
              }
              return (
                <p key={index} className="text-xl font-text mb-4">
                  {paragraph}
                </p>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="text-sm font-text underline text-accent"
        onClick={handleToggle}
      >
        {showFullDescription ? "Show less" : "Show more"}
      </button>
    </>
  );
};

export default SmoothDropdown;
