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
                                <h5>I'm a entry-level full stack engineer with a passion for creating innovative solutions.</h5>
                                <p>Software engineer with a passion for creating and innovating. Coding the future one line of code at a time! Working to bring innovative ideas to life as an entry-level full stack engineer. Ready to work with inspiring minds and grow my skill set. Ready to take ideas from concept to creation! Let 's work together and build something amazing!</p>

                                <div className="tf-funfact">
                                    <div className="tf-funfact-item">
                                        <h3><span>3</span>+</h3>
                                        <p>Projects Completed</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3><span>11</span>+</h3>
                                        <p>Courses completed</p>
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