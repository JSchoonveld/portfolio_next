import Quality from "./Quality";
import SkillbarSection from "./SkillbarSection";
import {Button, Image} from "react-bootstrap";
import {animated, useSpring} from "react-spring";
import { Waypoint } from 'react-waypoint';
import {useState} from "react";
import QualitySection from "./QualitySection";

export default function AboutSection() {

    const [inView, setInview] = useState(false);

    const transition = useSpring({
        delay: 400,
        to: { opacity: !inView ? '0' : '1', left: !inView ? '-100px' : '0' },
    });

    return (
        <section className={"content-section"} id="about">
            <div className={'container'}>
                <div className="row my-4 pt-5">
                    <div className="col text-center pt-4">
                        <h2>About</h2>
                    </div>
                </div>
                <QualitySection/>
                <div className="row mt-5 mb-2">
                    <Waypoint onEnter={() => setInview(true)}>
                    <animated.div style={{ position: 'relative', ...transition }} className="col-lg-5 d-flex flex-column justify-content-center align-items-center">
                        <Image
                            src={"/images/jesse.webp"}
                            alt={"Jesse"}
                            width={250}
                            height={250}
                        />
                        <h3 className={"mt-4 mb-3"}>
                            Who am I?
                        </h3>
                        <p>My name is Jesse Schoonveld and I am currently studying web and software development at the
                            Noorderpoort in Groningen. Currently I am doing an internship at NC-Websites in Winschoten.
                            Focusing mainly on front-end web development I have a solid grasp of Bootstrap and Vue JS. Currenly I am also learning myself React.</p>
                    </animated.div>
                    </Waypoint>
                    <div className="col-lg-6 offset-lg-1 d-flex flex-column align-items-center ">
                        <h3 className={"mt-4 mt-lg-0 mb-3"}>
                            Skills
                        </h3>
                        <SkillbarSection/>
                    </div>
                </div>

            </div>
        </section>
    )
}
