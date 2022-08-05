import React from 'react';
import img1 from '../img/contact.PNG';
import img2 from '../img/Capturewd.PNG';
import img3 from '../img/restaurant.PNG';
import img4 from '../img/github.PNG';
import img5 from '../img/game.PNG';
import img6 from '../img/music player.PNG';

function Projects(props) {
    return (
        <section className="container-fluid pt-5 page" id='project'>
            <div className="container pt-5 mt-5">
                <div className="row text-center">
                    <h1>PROJECTS</h1>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row d-flex justify-content-between">
                            <div className="card my-5 col-lg-3 col-md-5 col-12">
                                <a href='https://aayushi1852.github.io/contact-app/' target={'_blank'}>
                                    <div className="card-header d-flex justify-content-center">
                                        <img src={img1} className={'my-2 rounded'} height={'115'} />
                                    </div>
                                    <div className="card-body text-center h3">Contact App</div>
                                </a>
                            </div>
                            <div className="card my-5 col-lg-3 col-md-5 col-12">
                                <a href='https://aayushi1852.github.io/ASSIGNMENT1/' target={'_blank'}>
                                    <div className="card-header d-flex justify-content-center">
                                        <img src={img2} className={'my-2 rounded'} height={'115'} />
                                    </div>
                                    <div className="card-body text-center h3">Santa Website</div>
                                </a>
                            </div>
                            <div className="card my-5 col-lg-3 col-md-5 col-12">
                                <a href='https://aayushi1852.github.io/bootstrap-assignment/' target={'_blank'}>
                                    <div className="card-header  d-flex justify-content-center">
                                        <img src={img3} className={'my-2 rounded'} height={'115'} />
                                    </div>
                                    <div className="card-body text-center h3">Restaurant Website</div>
                                </a>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-between'>
                            <div className="card my-5 col-lg-3 col-md-5 col-12">
                                <a href='https://aayushi1852.github.io/Aayushi-api-/' target={'_blank'}>
                                    <div className="card-header  d-flex justify-content-center">
                                        <img src={img4} className={'rounded'} height={'108'} />
                                    </div>
                                    <div className="card-body text-center h3">Github API</div>
                                </a>
                            </div>
                            <div className="card my-5 col-lg-3 col-md-5 col-12">
                                <a href='https://aayushi1852.github.io/javascriptgame-assignment/' target={'_blank'}>
                                    <div className="card-header  d-flex justify-content-center">
                                        <img src={img5} className={'rounded'} height={'105'} />
                                    </div>
                                    <div className="card-body text-center h3">Number War Game</div>
                                </a>
                            </div>
                            <div className="card my-5 col-lg-3 col-md-5 col-12">
                                <a href='https://aayushi1852.github.io/wddm114-song-player/' target={'_blank'}>
                                    <div className="card-header bg-white d-flex justify-content-center">
                                        <img src={img6} className={'rounded'} height={'105'} />
                                    </div>
                                    <div className="card-body text-center h3">Music Player</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects