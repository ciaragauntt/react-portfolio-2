import React, { Component } from "react";
import { projects } from "../data";

class Projects extends Component{
    render() {
    return (
        <section id="projects" className =" text-gray-400 body-font">
            <div className="conatiner">
                <div className ="flex">
                    <h1 className =" title-font text-white">
                        Projects
                    </h1>
                    <p>
                        Here you will find all of the projects I have worked on 
                        over the past 6 months. Enjoy!
                    </p>
                </div>
                <div className = "flex flex-wrap">
                    {projects.map((project) => (
                        <div>
                            <a
                            href={project.link}
                            key={project.image}>
                                <h1> {project.title} </h1>
                            </a>
                        
                            <div className = "row">
                                <div className="column">
                                <img src={project.image}/>
                                <h2>{project.subtitle}</h2>
                                <p>{project.description}</p>
                                </div>
                    
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
                    }
}

export default Projects;