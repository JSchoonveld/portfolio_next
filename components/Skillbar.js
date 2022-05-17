export default function Skillbar(props){
    return (
        <div className="bar-container">
            <div className="title-container">
                <p>{props.title}</p>
            </div>
            <div className="progress-bar-container">
                <div style={{width: props.percentage + '%'}} className="progress-bar" />
            </div>
            <div className="percentage-container">
                <p>{props.percentage}%</p>
            </div>
        </div>
    )
}
