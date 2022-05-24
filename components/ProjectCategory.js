import {Waypoint} from "react-waypoint";
import {animated, useSpring} from "react-spring";
import Preview from "./Preview";
import {useState} from "react";

export default function ProjectCategory({blok}) {

    return (
            <animated.div className="row justify-content-center mb-5 mt-3">
                {blok.projects.map((project) => (
                    <div key={project.website} className="col-md-6 col-lg-4 mb-3 mb-md-3" data-aos="flip-left">
                        <Preview blok={project} />
                    </div>
                ))}
            </animated.div>
    )
}
