import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faStar);

export default function Opinion(props) {
	
	return (
		<div className="opinion">
            <div className="opinion__author">
                <p className="opinion__author--name">{props.name}</p>
                <p className="opinion__author--location">{props.location}</p>
                <p className="opinion__author--rate">
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                </p>
                <p className="opinion__author--date">{props.date}</p>
            </div>
            <div className="opinion__box">
                <p className="opinion__box--title">{props.title}</p>
                <p className="opinion__box--description">{props.description}</p>
            </div>
        </div>
	);
}