import React, { useRef } from "react";
import opinionsData from '../data/opinions-data';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faStar);

export default function Opinions(props) {
      const slider = useRef(null);
      const sett = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
      };
	return (
		<section className="opinions" id="opinions">
            <h2 className="opinions__heading">Opinie</h2>
            <div className="opinions__box">
                <Slider ref={slider} {...sett}>
                    {opinionsData.map((item) => (
                        <div>
                            <div className="opinion" key={item.id}>
                            <div className="opinion__author">
                                <p className="opinion__author--name">{item.name}</p>
                                <p className="opinion__author--rate">
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                </p>
                                
                            </div>
                            <div className="opinion__box">
                                <p className="opinion__box--title">{item.title}</p>
                                <p className="opinion__box--description">{item.description}</p>
                            </div>
                            <div className="opinion__author">
                                <p className="opinion__author--location">{item.location}</p>
                                <p className="opinion__author--date">{item.date}</p>
                            </div>
                        </div>
                        </div>
                    ))}
                </Slider>
                
            </div>
            <a href="https://fixly.pl/profil/55j8bhat" target='_blank'><button className="button--main btn--opinion">Zobacz więcej opinii</button></a>
        </section>
	);
}