import Quality from "./Quality";

export default function QualitySection() {
    return (
        <div className="row mt-5 mb-0">
            <div className="col-6 col-lg-3 d-flex justify-content-center text-center mb-3 mb-lg-5 mb-lg-0">
                <Quality delay={200} title={"Fast"} description={"My websites are lightning fast"} imageUrl={"/icons/speedometer.webp"}/>
            </div>
            <div className="col-6 col-lg-3 d-flex justify-content-center text-center mb-3 mb-lg-5 mb-lg-0">
                <Quality delay={300} title={"Intuitive"} description={"A modern website should be easy to use"} imageUrl={"/icons/intuitive.webp"} />
            </div>
            <div className="col-6 col-lg-3 d-flex justify-content-center text-center mb-3 mb-lg-5 mb-lg-0">
                <Quality delay={400} title={"Responsive"} description={"Looks great on all devices and screen sizes"} imageUrl={"/icons/responsive.webp"} />
            </div>
            <div className="col-6 col-lg-3 d-flex justify-content-center text-center mb-3 mb-lg-5 mb-lg-0">
                <Quality delay={500} title={"Seo friendly"} description={"I combine server side and client side rendering for the best of both worlds"} imageUrl={"/icons/seo.webp"} />
            </div>
        </div>
    )
}
