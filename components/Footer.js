import Link from "next/link";
import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
    faPhone,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer>
            <div className={'container'}>
                <div className="row py-5">
                    <div className="col-md-4 d-flex flex-column footer-contact-section">
                        <h3>Get in touch!</h3>
                        <div className="d-flex align-items-center my-2">
                            <FontAwesomeIcon
                                icon={faPhone}
                                style={{ fontSize: 100, color: "blue" }}
                            />
                            <a className={"contact-tel d-flex align-items-center"} href="tel:0638139603">+31 6 38 139 603</a>
                        </div>
                        <div className="d-flex align-items-center my-2">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                style={{ fontSize: 100, color: "blue" }}
                            />
                            <a className={"contact-mail d-flex align-items-center"} href="mailto:jesse.schoonveld@gmail.com">jesse.schoonveld@gmail.com</a>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <h3>Sitemap</h3>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="#about">
                                    <a>About</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#contact">
                                    <a>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-socials-section">
                        <h3>Socials</h3>
                        <a target={"_blank"} rel="noopener noreferrer" href="https://www.linkedin.com/in/jesse-schoonveld-423a1740/">
                            <Image
                                src="/icons/linkedin.svg"
                                alt="Linkedin logo"
                                width={40}
                                height={40}
                            />
                        </a>
                        <a target={"_blank"} rel="noopener noreferrer" href="https://www.instagram.com/jesseschoonveld/">
                            <Image
                                src="/icons/insta.svg"
                                alt="Instagram logo"
                                width={40}
                                height={40}
                            />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    )
}