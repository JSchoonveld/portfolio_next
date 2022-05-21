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

    const imgUrlsExo = {
        image1: '/images/exodevo.webp',
        image2: '/images/njordic.webp',
        image3: '/images/geotechniek.webp',
    }
    const imgUrlsNjordic = {
        image1: '/images/njordic.webp',
        image2: '/images/exodevo.webp',
        image3: '/images/geotechniek.webp',
    }
    const imgUrlsJepma = {
        image1: '/images/jepma.webp',
        image2: '/images/njordic.webp',
        image3: '/images/geotechniek.webp',
    }
    const imgUrlsGeo = {
        image1: '/images/geotechniek.webp',
        image2: '/images/njordic.webp',
        image3: '/images/geotechniek.webp',
    }
    const imgUrlsTaxi = {
        image1: '/images/taxi_oldambt.webp',
        image2: '/images/njordic.webp',
        image3: '/images/geotechniek.webp',
    }
    const imgUrlsDmg = {
        image1: '/images/dmg.webp',
        image2: '/images/njordic.webp',
        image3: '/images/geotechniek.webp',
    }

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
                <animated.div style={{ position: 'relative', ...transition }} className="row justify-content-center g-0 mb-5 mt-3">
                    <div className="col-md-6 col-lg-4 mb-3 mb-md-0" data-aos="flip-left">
                        <ProjectPreview title={"ExoDevo"} content={"This was a website I built for ExoDevo during my internship at NC-Websites."} techs={"HTML/CSS/JS"} {...imgUrlsExo} website={"https://www.exodevo.com"} />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-3 mb-md-0">
                        <ProjectPreview title={"NjordIC"} techs={"HTML/CSS/JS"} {...imgUrlsNjordic} website={"https://www.njordic.nl"} />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-3 mb-md-0" data-aos="flip-left">
                        <ProjectPreview title={"Jepma Belastingsadviseurs"}  content={"This was a website I built for Jepma Belastingsadviseurs during my internship at NC-Websites."} techs={"HTML/CSS/JS"} {...imgUrlsJepma} website={"https://www.jepmabelastingadviseurs.nl/"} />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-3 mb-md-0">
                        <ProjectPreview title={"Geotechniek Speelman"} techs={"HTML/CSS/JS"} {...imgUrlsGeo} website={"https://www.geotechniekspeelman.nl"} />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-3 mb-md-0">
                        <ProjectPreview title={"Taxicentrale Oldambt"} techs={"HTML/CSS/JS"} {...imgUrlsTaxi} website={"https://www.taxicentraleoldambt.nl"} />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-3 mb-md-0">
                        <ProjectPreview title={"DMG Uitvaartzorg"} techs={"HTML/CSS/JS"} {...imgUrlsDmg} website={"https://www.dmg-uitvaartzorg.nl/"} />
                    </div>
                </animated.div>
                </Waypoint>

            </div>
        </section>
    )
}
