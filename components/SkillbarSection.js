import Skillbar from "./Skillbar";
import {useState} from "react";
import {animated, useSpring} from "react-spring";
import {Waypoint} from "react-waypoint";

export default function SkillbarSection() {

    const [inView, setInview] = useState(false);

    const transition = useSpring({
        delay: 500,
        to: { opacity: !inView ? '0' : '1', transform: !inView ? 'scale(0)' : 'scale(1)' },
    });

    return(
        <Waypoint onEnter={() => setInview(true)} onLeave={() => setInview(false)}>
        <animated.div style={{ position: 'relative', ...transition }} className={"w-100"}>
            <Skillbar delay={"100"} title="CSS/Sass" percentage="85" />
            <Skillbar delay={"150"} title="Bootstrap" percentage="95" />
            <Skillbar delay={"200"} title="JavaScript" percentage="90" />
            <Skillbar delay={"250"} title="Git" percentage="75" />
            <Skillbar delay={"300"} title="NodeJS" percentage="80" />
            <Skillbar delay={"350"} title="Vue/Vuex" percentage="75" />
            <Skillbar delay={"400"} title="React" percentage="55" />
            <Skillbar delay={"450"} title="PHP" percentage="60" />
            <Skillbar delay={"500"} title="Laravel" percentage="20" />
        </animated.div>
        </Waypoint>
    )
}
