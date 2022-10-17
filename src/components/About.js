import React, { Component } from "react";
import profilephoto from '../images/profile-pic.jpg';


class About extends Component {
    render () {
    return(
            <div>
                <h1>
                    Welcome to my React Portfolio
                </h1>
                <React.Fragment>
                <img className="profile-photo" src={profilephoto} alt={"Ciara Gauntt"}/>
                </React.Fragment>
                <p>
                    I recently graduated from the Trilogy Coding Bootcamp at the <br/>
                    University of Utah. With no prior knowledge of coding, I have<br/>
                    been able to quickly learn all the tools and skills required <br/>
                    to be a full stack software developer. Throughout this website <br/>
                    you will see how much I have learned and what I am capable of <br/>
                    as a software developer.
                </p>
            </div>
    );
    }
}

export default About;