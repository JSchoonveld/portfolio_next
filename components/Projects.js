import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import {useState} from "react";
import ProjectCategory from './ProjectCategory'
import PaginationTitle from "./PaginationTitle";
import {useSpring} from "react-spring";
import {Waypoint} from "react-waypoint";

const Projects = ({ blok }) => {

    const [activeCategory, setActiveCategory] = useState('All');

    const toggleActiveCategory = ((id)=> {
        setActiveCategory(id)
    })

    let active = blok.projects.filter(checkActive)

    function checkActive(category) {
        return category.title === activeCategory;
    }


    return (

        <section {...storyblokEditable(blok)} className={"content-section pt-5"} id="projects">
            <div className={'container'}>
                <div className="row my-lg-4 text-center">
                    <h2 className={"pt-2"}>
                        Projects
                    </h2>
                    <p className={"mt-5"}>These are some of the projects I made during my internship at NC-websites</p>
                </div>
                <div className="row text-center py-3">
                    <div className="d-flex d-sm-none flex-column">
                        <div>
                          <ul className={"category-list"}>
                              {blok.projects.map((category) => (
                                  <li className={"category-list-item"} key={category.title}>
                                      <PaginationTitle toggleActive={toggleActiveCategory} className={"px-2"} active={activeCategory === category.title} id={category.title} title={category.title}/>
                                  </li>
                              ))}
                          </ul>


                        </div>

                    </div>
                    <div className="col d-none d-sm-flex justify-content-center">

                        {blok.projects.map((category) => (
                            <PaginationTitle toggleActive={toggleActiveCategory} className={"px-2"} active={activeCategory === category.title} id={category.title} key={category.title} title={category.title}/>
                        ))}
                    </div>

                </div>
                {active.map((category) => (
                <ProjectCategory key={category.title} title={"HTML"} blok={category} />
                    ))}
            </div>
        </section>

    );
};

export default Projects;
