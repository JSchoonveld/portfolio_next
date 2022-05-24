import {useState} from "react";

export default function PaginationTitle(props) {

    const [categoryActive, toggleActive]  = useState(false);

   const handleClick = function() {

    }

    return(
        <h3 onClick={() => props.toggleActive(props.id)} id={props.id} className={props.active ? 'project-category-title active' : 'project-category-title'}>{props.title}</h3>
    )
}
