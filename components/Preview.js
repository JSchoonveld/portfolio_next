import { storyblokEditable } from "@storyblok/react";
import {Button, Image, Modal, Carousel, CarouselItem} from "react-bootstrap";
import {useState} from "react";
import {animated, useSpring} from "react-spring";

const Preview = ({ blok }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [inView, setInView] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = (()=> {
        setShow(false)
        setShowDetails(false)
    })
    const handleShow = (()=> {
        setShow(true)
    })


    const transitionUp = useSpring({
        delay: 100,
        to: {opacity: !inView ? '0' : '1', bottom: !inView ? '0px' : '20px'},
    });

    const transitionDown = useSpring({
        delay: 100,
        to: {opacity: !inView ? '0' : '1', top: !inView ? '0px' : '20px'},
    });

    let showButton = (() => {

        return (
            <div onMouseOver={() => setInView(true)} onMouseOut={() => setInView(false)}  className={"project-preview-overlay"}>
                <div className="content">
                    <animated.div style={{ position: 'relative', ...transitionDown }}>
                        <h3>{blok.title}</h3>
                    </animated.div>

                    <animated.div style={{ position: 'relative', ...transitionUp }}>
                        <Button variant="primary" onClick={handleShow}>
                            Read more
                        </Button>
                    </animated.div>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header>
                            <Carousel indicators={false}>
                                {blok.images.map((image) => (
                                    <Carousel.Item  key={image.filename}>
                                        <Image
                                            src={image.filename}
                                            alt={image.title}
                                            width={335}
                                            height={210}
                                        />
                                    </Carousel.Item>
                                ))}

                            </Carousel>

                        </Modal.Header>
                        <Modal.Body>
                            <Modal.Title><b>{blok.title}</b></Modal.Title>
                            <p><b>Techstack:</b> {blok.techs}</p>

                            {blok.body}
                        </Modal.Body>
                        <Modal.Footer>
                            <div>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </div>
                            <div>
                                <a className={"btn btn-primary"} href={blok.website} target={"_blank"} rel="noopener noreferrer">Visit website</a>
                            </div>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        )
    })


    return (
        <div tabIndex={0} onMouseOver={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)} style={{position: 'relative'}} className="project col-md-4">
            {showDetails ? showButton() : ''}
            <Image
                src={blok.thumbnail.filename}
                alt={blok.title}
                width={335}
                height={210}
            />

        </div>
    )
};

export default Preview;
