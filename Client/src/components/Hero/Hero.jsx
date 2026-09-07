import "./Hero.css";
import Reveal from "../Common/Animation/Reveal";
import { portfolioData } from "../../constants/portfolioData";

import { Typewriter } from "react-simple-typewriter";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { motion } from "framer-motion";
import Button from "../Common/Button/Button";
import profileImage from "../../assets/images/profile.png";
function Hero() {
  return (
    <section id="home" className="hero">
        <Reveal>
            <motion.div
                className="hero-left"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >

            <h3>👋 Hello, I'm</h3>

            <h1>{portfolioData.name}</h1>

            <h2>

            <Typewriter
                words={portfolioData.roles}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1500}
            />

            </h2>

            <p>{portfolioData.description}</p>

            <div className="hero-buttons">

            <Button
            onClick={() =>
                document
                .getElementById("projects")
                ?.scrollIntoView({
                    behavior: "smooth",
                })
            }
            >
            View Projects
            </Button>

            <Button variant="secondary">
                Download Resume
            </Button>

            </div>

            <div className="social-icons">

                <a
                    href={portfolioData.github}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>

                <a
                    href={portfolioData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin />
                </a>

                <a href={`mailto:${portfolioData.email}`}>
                    <FaEnvelope />
                </a>

                </div>

            </motion.div>
        </Reveal>
        <Reveal>
            <motion.div
                className="hero-right"
                initial={{ opacity: 0, x: 80 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -12, 0],   // Floating animation
                }}
                transition={{
                    opacity: { duration: 1 },
                    x: { duration: 1 },
                    y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                whileHover={{
                    scale: 1.05,
                    rotate: 2,
                }}
            >

                <div className="profile-image-container">
                    <img
                        src={profileImage}
                        alt="Anisha Sweety"
                        className="profile-image"
                    />
                    </div>

            </motion.div>
        </Reveal>
    </section>
  );
}

export default Hero;