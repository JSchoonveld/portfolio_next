import ProjectPreview from "./ProjectPreview";
import {useState} from "react";
import {useSpring, animated} from "react-spring";
import {Waypoint} from 'react-waypoint';

export default function ProjectSection() {
    const [inView, setInview] = useState(false);

    const transition = useSpring({
        delay: 500,
        to: {opacity: !inView ? '0' : '1', bottom: !inView ? '-200px' : '0'},
    });

    return (
        <section className={"content-section pt-5"} id="projects">
            <div className={'container'}>
                <div className="row my-lg-4 text-center">
                    <h2 className={"pt-2"}>
                        Projects
                    </h2>
                    <p className={"mt-5"}>These are some of the projects I made during my internship at NC-websites</p>
                </div>
                <Waypoint onEnter={() => setInview(true)}>
                <animated.div style={{ position: 'relative', ...transition }} className="row justify-content-center mb-5 mt-3">
                    <div className="col-md-6 col-lg-4 px-0" data-aos="flip-left">
                        <ProjectPreview title={"ExoDevo"} content={"This was a website I built for ExoDevo"} techs={"HTML/CSS/JS"} imageUrl={"/images/exodevo.webp"} website={"https://www.exodevo.com"} />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <ProjectPreview title={"NjordIC"} techs={"HTML/CSS/JS"} imageUrl={"/images/njordic.webp"} website={"https://www.njordic.nl"} />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <ProjectPreview title={"Geotechniek Speelman"} techs={"HTML/CSS/JS"} imageUrl={"/images/geotechniek.webp"} website={"https://www.geotechniekspeelman.nl"} />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <ProjectPreview title={"Taxicentrale Oldambt"} techs={"HTML/CSS/JS"} imageUrl={"/images/taxi_oldambt.webp"} website={"https://www.taxicentraleoldambt.nl"} />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <ProjectPreview title={"DMG Uitvaartzorg"} techs={"HTML/CSS/JS"} imageUrl={"/images/dmg.webp"} website={"https://www.dmg-uitvaartzorg.nl/"} />
                    </div>
                </animated.div>
                </Waypoint>

            </div>
        </section>
    )
}
