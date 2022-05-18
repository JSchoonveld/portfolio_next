import {useState} from "react";
import {animated, useSpring} from "react-spring";
import {Waypoint} from "react-waypoint";

export default function ContactSection(){

    const [inView, setInview] = useState(false);

    const transition = useSpring({
        delay: 200,
        to: { opacity: !inView ? '0' : '1', transform: !inView ? 'scale(0)' : 'scale(1)' },
    });
    const swipeRight = useSpring({
        delay: 200,
        to: { opacity: !inView ? '0' : '1', transform: !inView ? 'translate(150px,0)' : 'translate(0px,0)' },
    });

    return (
        <section id={"contact"} className={"contact-section"}>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-3 text-center pt-4">
                        <Waypoint onEnter={() => setInview(true)} onLeave={() => setInview(false)}>
                        <animated.h2 style={{ position: 'relative', ...swipeRight }}>Contact</animated.h2>
                        </Waypoint>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <Waypoint onEnter={() => setInview(true)} onLeave={() => setInview(false)}>
                        <animated.div style={{ position: 'relative', ...transition }} className="form py-5">
                            <form action="#" method={"post"}>
                                <div className="mb-3">

                                    <input type="email" className="form-control" id="InputName" placeholder={"Name"}/>
                                </div>
                                <div className="mb-3">

                                    <input type="email" className="form-control" id="InputEmail1"
                                           aria-describedby="emailHelp" placeholder={"Email"}/>
                                </div>
                                <div className="mb-3">

                                    <textarea className="form-control" name="message" id="InputMessage" cols="30"
                                              rows="10" placeholder={"Your message"}/>
                                </div>
                                <div className="d-flex justify-content-center form-submit-section">
                                    <button type="submit" className="btn btn-tertiary mt-2">
                                        Submit
                                    </button>
                                </div>

                            </form>
                        </animated.div>
                        </Waypoint>
                    </div>
                </div>
            </div>
        </section>
    )
}
