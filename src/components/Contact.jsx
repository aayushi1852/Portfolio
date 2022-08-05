import React, { useState, useEffect } from 'react'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState();

    return (
        <section className="container-fluid pt-5">
           
            <div className="container pt-5 mt-5">
            <h1 className='text-center'>Contact Me</h1>
                <form id="contactForm" className='col-md-5 col-12 mx-auto'>
                    <div className="my-5 d-flex justify-content-between">
                        <div className="card">
            
                            <div className="card-body d-flex">
                                <img src="https://img.icons8.com/color/48/000000/circled-envelope.png" />
                                <h6 className='mr-3 my-auto'>aayushishah2972@gmail.com</h6>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body d-flex" style={{ width: '197.31px', height:'70px'}}>
                                <img style={{ height: '30px', width: '30px' ,margin:'8px'}} src="https://img.icons8.com/ultraviolet/38/000000/phone.png" />
                                <h6 className='mr-3 my-auto'>+(1)437-249-7766</h6>
                            </div>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="mb-3">
                            <label className="form-label h4" htmlFor="name">Name</label>
                            <input style={{ height: '50px', borderRadius: '10px', fontSize: '1.5rem' }} value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" type="text" placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label h4" htmlFor="emailAddress">Email Address</label>
                            <input style={{ height: '50px', borderRadius: '10px', fontSize: '1.5rem' }} value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
                        </div>
                        <div className="mb-3">
                            
                            <label className="form-label h4" htmlFor="message">Message</label>
                            <input style={{ height: '50px', borderRadius: '10px', fontSize: '1.5rem' }} value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" id="emailAddress" type="textarea" placeholder="Your Message" />
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