import React from 'react';
import { NavLink as Link } from 'react-router-dom';

function Home() {
    return (
        <section className="container-fluid pt-5">
            <div className="container pt-5 mt-5 text-center">
                <div className="row">
                    <p className="uppercase text-sm tracking-widest text-gray-600 h3 pt-5">LET'S BUILD SOMETHING TOGETHER</p>
                    <h1 className="py-4 text-gray-700 h1">Hi, I'm <span style={{ color: '#3c8ffc' }}> Aayushi</span>
                    </h1><h1 className="py-2 text-gray-700 h1">A Fullstack Web Developer</h1>
                    <p className="py-4 text-gray-600 m-auto h2 max-w-\[330px\] ">
                        I am focused on building responsive websites while learning and exploring other technologies.
                    </p>
                    <div className="col-md-3 d-flex justify-content-between mx-auto">
                        <div className="card round-card p-3">
                            <a href="">
                                <img src="https://img.icons8.com/color/35/000000/linkedin.png" />
                            </a>
                        </div>
                        <div className="card round-card p-3">
                            <a href="https://github.com/aayushi1852">
                                <img src="https://img.icons8.com/tiny-color/35/000000/experimental-github-tiny-color.png" />
                            </a>
                        </div>
                        <div className="card round-card p-3">
                            <Link to={"/contact"}>
                                <img src="https://img.icons8.com/officexs/35/000000/contact-card.png" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home