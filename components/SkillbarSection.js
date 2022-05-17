import Skillbar from "./Skillbar";

export default function SkillbarSection() {
    return(
        <div className={"w-100"}>
            <Skillbar title="CSS/Sass" percentage="85" />
            <Skillbar title="Bootstrap" percentage="95" />
            <Skillbar title="JavaScript" percentage="90" />
            <Skillbar title="NodeJS" percentage="75" />
            <Skillbar title="Vue/Vuex" percentage="75" />
            <Skillbar title="React" percentage="55" />
            <Skillbar title="PHP" percentage="60" />
            <Skillbar title="Laravel" percentage="20" />
        </div>
    )
}
