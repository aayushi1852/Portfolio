import React from 'react';
import resume from "../img/resume.pdf";
import { NavLink as Link } from 'react-router-dom';

function Home() {
    return (
        <section className="container-fluid py-5 page" id='home'>
            <div className="container pt-5 mt-5 text-center">
                <div className="row">
                    <p className="uppercase text-sm tracking-widest text-gray-600 h3 py-5">  Web Design leaves a never-ending feeling.</p>
                    <h1 className="py-4 text-gray-700 h1">Hi, I'm <span style={{ color: '#3c8ffc' }}> Aayushi</span>
                    </h1><h1 className="py-2 text-gray-700 h1">A Fullstack Web Developer</h1>
                    <p className="py-4 text-gray-600 m-auto my-5 h2 max-w-\[330px\] ">
                      
                        Full Stack Developer familiar with wide range of programming utilities and languages. Eager to learn new technologies and methodologies.

                    </p>
                    <div className="col-md-5 d-flex justify-content-center mx-auto my-3">
                        <div className="card round-card p-3 mx-5">
                            <a href="https://www.linkedin.com/in/aayushi-shah-67a4281a4/">
                                <img src="https://img.icons8.com/color/35/000000/linkedin.png" />
                            </a>
                        </div>
                        <div className="card round-card p-3 mx-5">
                            <a href="https://github.com/aayushi1852">
                                <img src="https://img.icons8.com/tiny-color/35/000000/experimental-github-tiny-color.png" />
                            </a>
                        </div>
                        <div className="card round-card p-3 mx-5">
                            <a href="#contact">
                                <img src="https://img.icons8.com/officexs/35/000000/contact-card.png" />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 d-block d-md-none py-4">
                        <a href={resume} target={'_blank'} className=" btn btn-primary">View Resume</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home