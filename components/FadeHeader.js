import styles from "../styles/Home.module.css";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";

export default function FadeHeader() {
    return (
        <div id={"header"} className="header">
            <h1 className={styles.title}>
                Welcome! <br/> My name is <span className={"white"}>Jesse</span><br/>
                 I&apos;m a <span className="white">front-end </span>developer
            </h1>
            <Link href="#about">
                <a className={"btn btn-primary mt-3 d-flex align-items-center"}>
                    View my work
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ fontSize: 20, color: "white" }}
                    />
                </a>
            </Link>
        </div>
    )
}
