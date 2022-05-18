import Quality from "./Quality";
import SkillbarSection from "./SkillbarSection";
import {Image} from "react-bootstrap";
import {animated, useSpring} from "react-spring";
import { Waypoint } from 'react-waypoint';
import {useState} from "react";

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
                <div className="row mt-5 mb-0">
                    <div className="col-md-6 col-lg-3 d-flex justify-content-center text-center mb-5 mb-lg-0">
                        <Quality delay={200} title={"Fast"} description={"My websites are blazing fast"} imageUrl={"/icons/speedometer.png"}/>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex justify-content-center text-center  mb-5 mb-lg-0">
                        <Quality delay={300} title={"Intuitive"} description={"UX and UI design is always a priority"} imageUrl={"/icons/intuitive.png"} />
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex justify-content-center text-center  mb-5 mb-lg-0">
                        <Quality delay={400} title={"Responsive"} description={"Looks great on all devices"} imageUrl={"/icons/responsive.png"} />
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex justify-content-center text-center  mb-5 mb-lg-0">
                        <Quality delay={500} title={"Seo friendly"} description={"I combine server side and client side rendering for the best of both worlds"} imageUrl={"/icons/seo.png"} />
                    </div>
                </div>
                <div className="row mt-5 mb-2">
                    <Waypoint onEnter={() => setInview(true)} onLeave={() => setInview(false)}>
                    <animated.div style={{ position: 'relative', ...transition }} className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                        <Image
                            src={"/images/jesse.jpg"}
                            alt={"Jesse"}
                            width={250}
                            height={250}
                        />
                        <h3 className={"mt-3"}>
                            Who am I?
                        </h3>
                        <p>My name is Jesse Schoonveld and I am currently studying web and software development at the
                            Noorderpoort in Groningen. Currently I am doing an internship at NC-Websites in Winschoten.
                            Focusing mainly on front-end web development I have a solid grasp of Bootstrap and Vue JS. Currenly I am also learning myself React.</p>
                    </animated.div>
                    </Waypoint>
                    <div className="col-lg-6 d-flex flex-column align-items-center ">
                        <SkillbarSection/>
                    </div>
                </div>

            </div>
        </section>
    )
}
