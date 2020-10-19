import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  containerVariants,
  nextVariants,
  buttonVariants,
  listVariants,
} from "../variants";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              variants={listVariants}
              whileHover="hover"
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.toppings.length !== 0 && (
        <motion.div variants={nextVariants} className="next">
          <Link to="/order">
            <motion.button variants={buttonVariants} whileHover="hover">
              Order
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Toppings;
