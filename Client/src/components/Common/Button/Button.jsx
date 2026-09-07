import "./Button.css";
import { motion } from "framer-motion";
function Button({ children, variant = "primary", onClick }) {
  return (
    <motion.button
        whileHover={{scale: 1.05,}}
        whileTap={{scale: 0.95,}}
        className={`btn ${variant}`}
        onClick={onClick}
    >
        {children}
    </motion.button>
  );
}

export default Button;