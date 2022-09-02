import React, { useEffect, useState, } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router'
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'


const Login = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <div>
            <h1>CloudDj</h1>
            <div>
                <h3>Top Creations Today</h3>
                <section className="slider">

                    <FaArrowAltCircleLeft classname="left-arrow" />
                    {SliderData.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (<img src={slide.image} alt='music image' className="image" />)}
                            </div>
                        )
                    })}
                    <FaArrowAltCircleRight classname="right-arrow" onClick={nextSlide} />
                </section>
            </div>
        </div>
    )
}

export default Login;