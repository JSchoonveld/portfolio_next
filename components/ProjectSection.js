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
                    <h2>
                        Projects
                    </h2>
                    <p className={"mt-5"}>These are some of the projects I made during my internship at NC-websites</p>
                </div>
                <Waypoint onEnter={() => setInview(true)} onLeave={() => setInview(false)}>
                <animated.div style={{ position: 'relative', ...transition }} className="row justify-content-center mb-5 mt-3">
                    <div className="col-lg-4" data-aos="flip-left">
                        <ProjectPreview title={"ExoDevo"} imageUrl={"/images/exodevo.png"} website={"https://www.exodevo.com"} />
                    </div>
                    <div className="col-lg-4">
                        <ProjectPreview title={"NjordIC"} imageUrl={"/images/njordic.png"} website={"https://www.njordic.nl"} />
                    </div>
                    <div className="col-lg-4">
                        <ProjectPreview title={"Geotechniek Speelman"} imageUrl={"/images/geotechniek.png"} website={"https://www.geotechniekspeelman.nl"} />
                    </div>
                    <div className="col-lg-4">
                        <ProjectPreview title={"Taxicentrale Oldambt"} imageUrl={"/images/taxi_oldambt.png"} website={"https://www.taxicentraleoldambt.nl"} />
                    </div>
                    <div className="col-lg-4">
                        <ProjectPreview title={"DMG Uitvaartzorg"} imageUrl={"/images/dmg.png"} website={"https://www.dmg-uitvaartzorg.nl/"} />
                    </div>
                </animated.div>
                </Waypoint>

            </div>
        </section>
    )
}
