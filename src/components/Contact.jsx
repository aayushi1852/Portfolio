import React from 'react'

function Contact() {
    return (
        <section className="hero-section">

            <div className="container py-4">
                <form id="contactForm" className='col-md-5 col-12 mx-auto'>
                    <div className="my-5 d-flex justify-content-between">
                        <div className="card">
                            <div className="card-body">
                                aayushishah2972@gmail.com
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                            90822905
                            </div>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Name</label>
                            <input className="form-control" id="name" type="text" placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="emailAddress">Email Address</label>
                            <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="message">Message</label>
                            <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact