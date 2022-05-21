import ProjectPreview from "./ProjectPreview";
import {useState} from "react";
import {useSpring, animated} from "react-spring";
import {Waypoint} from 'react-waypoint';
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function ProjectSection() {
    const [inView, setInview] = useState(false);

    const transition = useSpring({
        delay: 500,
        to: {opacity: !inView ? '0' : '1', bottom: !inView ? '-200px' : '0'},
    });


    const { data, error } = useSwr('/api/projects', fetcher)

    if (error) return <div>Failed to load projects</div>
    if (!data) return <div>Loading...</div>

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
                    {data.map((project) => (
                            <div key={project.id} className="col-md-6 col-lg-4 mb-3 mb-md-0" data-aos="flip-left">
                                <ProjectPreview title={project.title} content={project.content} techs={project.tech} {...project.images} website={project.website} />
                            </div>
                    ))}
                </animated.div>
                </Waypoint>

            </div>
        </section>
    )
}
