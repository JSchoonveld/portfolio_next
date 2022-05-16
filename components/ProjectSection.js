import ProjectPreview from "./ProjectPreview";

export default function ProjectSection() {
    return (
        <section className={"content-section"} id="projects">
            <div className={'container'}>
                <div className="row my-4 text-center">
                    <h2>
                        Bekijk hier mijn recente projecten
                    </h2>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <ProjectPreview/>
                    </div>
                    <div className="col-lg-4">
                        <ProjectPreview/>
                    </div>
                    <div className="col-lg-4">
                        <ProjectPreview/>
                    </div>
                </div>

            </div>
        </section>
    )
}