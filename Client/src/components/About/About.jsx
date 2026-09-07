import "./About.css";

import { portfolioData } from "../../constants/portfolioData";

import SectionTitle from "../Common/SectionTitle/SectionTitle";
import Reveal from "../Common/Animation/Reveal";
import StatCard from "../Common/StatCard/StatCard";

function About() {

    return (
        
        <section id="about">

            <SectionTitle
                subtitle="Introduction"
                title="About Me"
            />

            <div className="container">
                <Reveal>
                    <div className="about-content">

                        <h3>

                            {portfolioData.about.title}

                        </h3>

                        <p>

                            {portfolioData.about.description}

                        </p>

                        <div className="stats-grid">

                            {portfolioData.stats.map((item,index)=>(

                                <StatCard
                                    key={index}
                                    number={item.number}
                                    title={item.title}
                                />

                            ))}

                        </div>

                    </div>
                </Reveal>
            </div>

        </section>

    )

}

export default About;