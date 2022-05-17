import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";

export default function ContactSection(){
    return (
        <section id={"contact"} className={"contact-section"}>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-3 text-center">
                        <h2>Contact</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="form py-5">
                            <form action="#" method={"post"}>
                                <div className="mb-3">

                                    <input type="email" className="form-control" id="InputName" placeholder={"Name"}/>
                                </div>
                                <div className="mb-3">

                                    <input type="email" className="form-control" id="InputEmail1"
                                           aria-describedby="emailHelp" placeholder={"Email"}/>
                                </div>
                                <div className="mb-3">

                                    <textarea className="form-control" name="message" id="InputMessage"cols="30" rows="10" placeholder={"Your message"} />
                                </div>
                                <div className="d-flex justify-content-center form-submit-section">
                                    <button type="submit" className="btn btn-tertiary mt-2">
                                        Submit
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}