import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonVariants, homeVariants } from "../variants";
import Loader from "./Loader";

const Home = () => {
  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
