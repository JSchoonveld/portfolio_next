import {useState} from "react";
import {animated, useSpring} from "react-spring";
import {Waypoint} from "react-waypoint";

export default function Skillbar(props){

    const transition = useSpring({
        delay: 400,
        to: { width: !props.filled ? '0' : props.percentage + '%' },
    });

    return (
        <div className="bar-container">
            <div className="title-container">
                <p>{props.title}</p>
            </div>
            <div className="progress-bar-container">
                <animated.div style={{ ...transition }} className="progress-bar" />
            </div>
            <div className="percentage-container">
                <p>{props.percentage}%</p>
            </div>
        </div>
    )
}
