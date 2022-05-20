import Skillbar from "./Skillbar";
import {useState} from "react";
import {animated, useSpring} from "react-spring";
import {Waypoint} from "react-waypoint";

export default function SkillbarSection() {

    const [inView, setInview] = useState(false);
    const [data, setData] = useState(false);

    const fillBar = () => {
        setData(true);
    }

    const transition = useSpring({
        delay: 500,
        to: { opacity: !inView ? '0' : '1', transform: !inView ? 'scale(0)' : 'scale(1)' },
    });

    return(
        <Waypoint onEnter={() => { setInview(true); fillBar()  }}>
        <animated.div style={{ ...transition }} className={"w-100 d-flex flex-column align-items-center"}>
            <Skillbar delay={"100"} filled={data} title="CSS/Sass" percentage="85" />
            <Skillbar delay={"150"} filled={data} title="Bootstrap" percentage="95" />
            <Skillbar delay={"200"} filled={data} title="JavaScript" percentage="90" />
            <Skillbar delay={"250"} filled={data} title="Git" percentage="75" />
            <Skillbar delay={"300"} filled={data} title="NodeJS" percentage="80" />
            <Skillbar delay={"350"} filled={data} title="Vue/Vuex" percentage="75" />
            <Skillbar delay={"400"} filled={data} title="React" percentage="55" />
            <Skillbar delay={"450"} filled={data} title="PHP" percentage="60" />
            <Skillbar delay={"500"} filled={data} title="Laravel" percentage="20" />
        </animated.div>
        </Waypoint>
    )
}
