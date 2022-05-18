import {Image} from "react-bootstrap";
import {animated, useSpring} from "react-spring";
import { Waypoint } from 'react-waypoint';
import { useState } from "react";

export default function Quality( props ) {

    const [inView, setInview] = useState(false);

    const transition = useSpring({
        delay: props.delay,
        to: { opacity: !inView ? '0' : '1', bottom: !inView ? '-200px' : '0' },
    });

    return (
        <Waypoint onEnter={() => setInview(true)} onLeave={() => setInview(false)}>
        <animated.div style={{ position: 'relative', ...transition }}
                      className={"text-center d-flex flex-column align-items-center"}>
            <div className={"quality-bg"}>
                <div className="quality-content">

                    <Image
                        src={props.imageUrl}
                        alt={props.title}
                        width={75}
                        height={75}
                    />
                </div>
            </div>
            <h3 className={"my-3"}>{props.title}</h3>
            <p className={"mt-2"}>{props.description}</p>
        </animated.div>
        </Waypoint>
    )
}
