import Skillbar from "./Skillbar";
import {useState} from "react";
import {animated, useSpring} from "react-spring";
import {Waypoint} from "react-waypoint";

export default function SkillbarSection() {

    const [inView, setInview] = useState(false);

    const transition = useSpring({
        delay: 500,
        to: { opacity: !inView ? '0' : '1', right: !inView ? '-100px' : '0' },
    });

    return(
        <Waypoint onEnter={() => setInview(true)} onLeave={() => setInview(false)}>
        <animated.div style={{ position: 'relative', ...transition }} className={"w-100"}>
            <Skillbar title="CSS/Sass" percentage="85" />
            <Skillbar title="Bootstrap" percentage="95" />
            <Skillbar title="JavaScript" percentage="90" />
            <Skillbar title="NodeJS" percentage="75" />
            <Skillbar title="Vue/Vuex" percentage="75" />
            <Skillbar title="React" percentage="55" />
            <Skillbar title="PHP" percentage="60" />
            <Skillbar title="Laravel" percentage="20" />
        </animated.div>
        </Waypoint>
    )
}
