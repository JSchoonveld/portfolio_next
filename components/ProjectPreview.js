import {Image} from "react-bootstrap";

export default function ProjectPreview(props) {

    return (
            <a href={props.website} target={"_blank"} rel="noopener noreferrer">
                <div className="project">

                    <h3 className={"mb-3"}>{props.title}</h3>
                    <Image
                        src={props.imageUrl}
                        alt={props.title}
                        width={335}
                        height={210}
                    />

                </div>
            </a>


    )
}
