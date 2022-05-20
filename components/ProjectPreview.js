import {Button, Image, Modal, Carousel, CarouselItem} from "react-bootstrap";
import {useState} from "react";
import {animated, useSpring} from "react-spring";
import { Waypoint } from 'react-waypoint';


export default function ProjectPreview(props) {
    const [showDetails, setShowDetails] = useState(false);
    const [inView, setInView] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const transitionUp = useSpring({
        delay: 100,
        to: {opacity: !inView ? '0' : '1', bottom: !inView ? '0px' : '20px'},
    });

    const transitionDown = useSpring({
        delay: 100,
        to: {opacity: !inView ? '0' : '1', top: !inView ? '0px' : '20px'},
    });

    const test = props.images;

    let showButton = (() => {

        return (
            <div onMouseEnter={() => setInView(true)} onMouseLeave={() => setInView(false)} className={"project-preview-overlay"}>
                <div className="content">
                    <animated.div style={{ position: 'relative', ...transitionDown }}>
                        <h3>{props.title}</h3>
                        <p>{props.techs}</p>
                    </animated.div>

                    <animated.div style={{ position: 'relative', ...transitionUp }}>
                        <Button variant="primary" onClick={handleShow}>
                            Read more
                        </Button>
                    </animated.div>


                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header>
                            <Carousel indicators={false}>
                                <Carousel.Item>
                                    <Image
                                        src={props.image1}
                                        alt={props.title}
                                        width={335}
                                        height={210}
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        src={props.image2}
                                        alt={props.title}
                                        width={335}
                                        height={210}
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        src={props.image3}
                                        alt={props.title}
                                        width={335}
                                        height={210}
                                    />

                                </Carousel.Item>
                            </Carousel>

                        </Modal.Header>
                        <Modal.Body>
                            <Modal.Title><b>{props.title}</b></Modal.Title>
                            <p><b>Techstack:</b> {props.techs}</p>
                     
                            {props.content}
                        </Modal.Body>
                        <Modal.Footer>
                                <div>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </div>
                                <div>
                                    <a className={"btn btn-primary"} href={props.website} target={"_blank"} rel="noopener noreferrer">Visit website</a>
                                </div>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>

        )
    })

    return (
        // <a href={props.website} target={"_blank"} rel="noopener noreferrer">
        <div onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}  style={{position: 'relative'}} className="project">
            {showDetails ? showButton() : ''}
            {/*<h3 className={"mb-3 text-center"}>{props.title}</h3>*/}
            <Image
                src={props.image1}
                alt={props.title}
                width={335}
                height={210}
            />

        </div>
        // </a>


    )


}
