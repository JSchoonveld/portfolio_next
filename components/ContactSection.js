import {useState} from "react";
import {animated, useSpring} from "react-spring";
import {Waypoint} from "react-waypoint";
import {Button, Modal} from "react-bootstrap";

export default function ContactSection(){

    const [inView, setInview] = useState(false);

    const transition = useSpring({
        delay: 200,
        to: { opacity: !inView ? '0' : '1', transform: !inView ? 'scale(0)' : 'scale(1)' },
    });
    const swipeRight = useSpring({
        delay: 200,
        to: {opacity: !inView ? '0' : '1'},
    });

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [modalOpen, setOpenModal] = useState(false)

    const handleClose = (()=> {
        setOpenModal(false)
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')
        let data = {
            name,
            email,
            message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            console.log(res)
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('')
                document.getElementById("contact-form").reset();
                setOpenModal(true)
            } else {
                console.log('it didnt work')
            }
        })
    }

    let openModal = (()=> {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title className={"p-3"}>Your message has been sent!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Thank you for getting in touch! I will try to respond to your message as soon as possible</p>
                </Modal.Body>

                <Modal.Footer>
                    <div className={"w-100 d-flex align-items-end justify-content-center"}>
                        <Button onClick={handleClose} variant="primary">Close</Button>
                    </div>

                </Modal.Footer>
            </Modal.Dialog>
        )
    })

    return (
        <section id={"contact"} className={"contact-section"}>

            {modalOpen ? openModal() : ''}

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-3 text-center pt-4">
                        <Waypoint onEnter={() => setInview(true)}>
                            <animated.h2 style={{position: 'relative', ...swipeRight}}>Contact</animated.h2>
                        </Waypoint>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <Waypoint onEnter={() => setInview(true)}>
                            <animated.div style={{position: 'relative', ...transition}} className="form py-5">
                                <form  onSubmit={(e)=>{handleSubmit(e)}} id={"contact-form"} action="#" method="post" className={"d-flex flex-column align-items-center"}>
                                    <div className="mb-3 w-100">
                                        <input
                                            type="text"
                                            id="InputName"
                                            name="name"
                                            placeholder="Your name"
                                            required
                                            minLength="8"
                                            maxLength="20"
                                            onChange={(e)=>{setName(e.target.value)}}
                                        />
                                    </div>

                                    <div className="mb-3 w-100">
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            id="InputEmail"
                                            name="email"
                                            required
                                            minLength="5"
                                            aria-describedby="emailHelp"
                                            onChange={(e)=>{setEmail(e.target.value)}}
                                        />

                                    </div>
                                    <div className="mb-3 w-100">
                                    <textarea className="form-control" onChange={(e)=>{setMessage(e.target.value)}} name="message" required minLength={5} maxLength={2000} id="InputMessage" cols="30"
                                              rows="10" placeholder={"Your message"}/>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-tertiary mt-2" >Submit</button>
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
