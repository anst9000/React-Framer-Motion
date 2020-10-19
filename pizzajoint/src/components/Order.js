import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { containerVariants, childVariants } from "../variants";

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.div
      variants={containerVariants}
      className="container order"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order.</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
