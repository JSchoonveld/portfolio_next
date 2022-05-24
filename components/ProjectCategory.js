import {Waypoint} from "react-waypoint";
import {animated, useSpring} from "react-spring";
import Preview from "./Preview";
import {useState} from "react";
import PaginationTitle from "./PaginationTitle";


export default function ProjectCategory({blok}) {

    const [inView, setInview] = useState(false);

    const transition = useSpring({
        delay: 150,
        to: {opacity: !inView ? '0' : '1', transform: !inView ? 'scale(0)' : 'scale(1)'},
    });

    return (
        <Waypoint onEnter={() => setInview(true)}>
            <animated.div style={{ position: 'relative', ...transition }} className="row justify-content-center mb-5 mt-3">
                {blok.projects.map((project) => (
                    <div key={project.website} className="col-md-6 col-lg-4 mb-3 mb-md-3" data-aos="flip-left">
                        <Preview blok={project} />
                    </div>
                ))}
            </animated.div>
        </Waypoint>
    )
}
