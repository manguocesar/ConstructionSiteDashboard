import React,{useContext} from "react";
import {motion} from 'framer-motion'

//context
import { AnimationsContext } from "../../../contexts/AnimationsContext";

export default function ExportButton(props) {

  const { buttonVariants } = useContext(AnimationsContext);

  const { onClickButton, button_style } = props;

  return (
    <motion.button onClick={onClickButton} className={button_style}
    variants={buttonVariants}
          whileHover ="hover"
    >
      <span style={{ margin: "0% auto" }}>导出</span>
    </motion.button>
  );
}
