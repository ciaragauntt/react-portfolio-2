import React, { Component } from "react";
import resumepic from '../images/resumescreenshot.jpg';

class Resume extends Component{
    render(){
    return (
        <section id="resume">
            <div>
                <h2>
                    RESUME
                </h2>
                <img className="resumepic" src={resumepic}></img>
            </div>
        </section>
    );
    }
}

export default Resume;