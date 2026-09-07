import { motion } from "framer-motion";

function Reveal({ children, direction = "up" }) {

  const animations = {

    up: {
      y: 40,
    },

    left: {
      x: -40,
    },

    right: {
      x: 40,
    },

  };


  return (

    <motion.div

      initial={{
        opacity: 0,
        ...animations[direction],
      }}

      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}

      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}

      viewport={{
        once: true,
      }}

    >

      {children}

    </motion.div>

  );

}


export default Reveal;