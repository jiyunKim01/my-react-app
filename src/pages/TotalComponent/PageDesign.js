import React from "react";
import "../css/TopMenuStyle.css";
import IphoneImg from "../assets/IphoneImg.png";
import { motion, AnimatePresence } from "framer-motion";

function PageDesign({ myVariable }) {
  const renderContent = () => {
    if (myVariable === "IphoneImg") {
      return <img className="img-design" src={IphoneImg} alt="Iphone" />;
    } else {
      return <p>{myVariable}</p>;
    }
  };

  return <AnimatePresence exitBeforeEnter={false} mode="wait">
  <motion.div
    key={myVariable ? myVariable.label : "empty"}
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{ duration: 0.5 }}
  ><div className="page-design">{renderContent()}</div></motion.div></AnimatePresence>;
}

export default PageDesign;
