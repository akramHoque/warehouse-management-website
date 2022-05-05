import React from 'react';
import {Carousel} from 'react-bootstrap' ;
import carousel1 from '../../../../images/Banner/carousel1.png'
import carousel2 from '../../../../images/Banner/carousel2.png'

const Banner = () => {
    return (
        <div>
              <div className='container'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={carousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Our fresh produce is sourced every morning, you get the best from us.</h3>
                        <p>All the fruits at an affordable price, And the best of quality. Tomatto, guava, papaya, oranges</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={carousel2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>At Your Doorstep anywhere in surat.</h3>
                        <p>Free Home delivery.</p>
                        <p>On orders of $200/- and avobe.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </div>
    );
};

export default Banner;