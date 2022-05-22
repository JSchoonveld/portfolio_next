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
        to: {opacity: !inView ? '0' : '1'},
    });

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

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
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setBody('')
            }
        })
    }

    return (
        <section id={"contact"} className={"contact-section"}>
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
                                <form action="#" method={"post"}>
                                    <div className="mb-3">
                                        <input type="text" onChange={(e)=>{setName(e.target.value)}} name={"name"} className="form-control" id="InputName"
                                               placeholder={"Name"}/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name={"email"} className="form-control" id="InputEmail1"
                                               aria-describedby="emailHelp" placeholder={"Email"}/>
                                    </div>
                                    <div className="mb-3">
                                    <textarea className="form-control" onChange={(e)=>{setMessage(e.target.value)}} name="message" id="InputMessage" cols="30"
                                              rows="10" placeholder={"Your message"}/>
                                    </div>
                                    <div className="d-flex justify-content-center form-submit-section">
                                        <button type="submit" onClick={(e)=>{handleSubmit(e)}} className="btn btn-tertiary mt-2">
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
