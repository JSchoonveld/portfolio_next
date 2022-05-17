import {Image} from "react-bootstrap";

export default function Quality(props) {
    return (
        <div className={"text-center d-flex flex-column align-items-center"}>
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
        </div>

    )
}
