import {Image} from "react-bootstrap";
import {animated, useSpring} from "react-spring";

export default function Quality(props) {
    const styles = useSpring({
            loop: true,
            from: { opacity: 0, bottom: '-100px' },
            to: { opacity: 1, bottom: '0' },
        })
    return (
        <animated.div style={{ position: 'relative', ...styles,}}
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

    )
}
