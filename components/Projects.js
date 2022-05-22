import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import {Waypoint} from "react-waypoint";
import {animated, useSpring} from "react-spring";
import {useState} from "react";
import Preview from './Preview'

const Projects = ({ blok }) => {

    const [inView, setInview] = useState(false);

    const transition = useSpring({
        delay: 500,
        to: {opacity: !inView ? '0' : '1', bottom: !inView ? '-200px' : '0'},
    });


    return (
        <section {...storyblokEditable(blok)} className={"content-section pt-5"} id="projects">
            <div className={'container'}>
                <div className="row my-lg-4 text-center">
                    <h2 className={"pt-2"}>
                        Projects
                    </h2>
                    <p className={"mt-5"}>These are some of the projects I made during my internship at NC-websites</p>
                </div>
                <Waypoint onEnter={() => setInview(true)}>
                    <animated.div style={{ position: 'relative', ...transition }} className="row justify-content-center g-0 mb-5 mt-3">
                        {blok.projects.map((project) => (
                            <div key={project.website} className="col-md-6 col-lg-4 mb-3 mb-md-0" data-aos="flip-left">
                                <Preview blok={project} />
                            </div>
                        ))}
                    </animated.div>
                </Waypoint>

            </div>
        </section>
    );
};

export default Projects;
