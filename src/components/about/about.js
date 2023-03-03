import React from 'react'
import aImg from '../../images/about/img-1.jpg'

const About = (props) => {
    return (

        <section className="tf-about-section section-padding">
            <div className="container">
                <div className="tf-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-img">
                                <img src={aImg} alt="" />
                                <div className="tf-about-img-text">
                                    <div className="tf-about-icon">
                                        <h3>1+</h3>
                                        <span>Years Exprience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-text">
                                <small>about Me</small>
                                <h2>Welcome to My Portfolio</h2>
                                <h5> I am entry-level full-stack engineer </h5>
                                <p>I am passionate about creating innovative solutions and bringing new ideas to life through software engineering, and I strive to code the future one line at a time. I am eager to work alongside inspiring minds while continuing to grow my skill set. Are you ready to go from concept to creation? Let’s work together and create something extraordinary!</p>

                                <div className="tf-funfact">
                                    <div className="tf-funfact-item">
                                        <h3><span>3</span>+</h3>
                                        <p>Projects Completed</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3><span>11</span>+</h3>
                                        <p>Certifications</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3><span>3</span>+</h3>
                                        <p>Happy clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>About Me</h1>
            </div>
        </section>
    )
}

export default About;