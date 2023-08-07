import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';

function CustomersSay() {
    return (
        <main>
            <div className="container">
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h1>
                            People are Saying about us:
                        </h1>
                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-6 mx-auto">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={person1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Marlo Juan</h3>
                                    <p>incredible user experience</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={person2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Maria Juan</h3>
                                    <p>i love this website. there is all i need.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={person3}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Elon Musk</h3>
                                    <p>
                                        I haven't seen such a masterpiece in a while.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default CustomersSay;