import React from 'react'
import "./Dish.css";
import { iconsImgs } from '../../utils/images';
import { NavLink } from 'react-router-dom';

const Dish = ({id, title}) => {

    return (
        <div className="subgrid-two-item grid-common-1">
            <div className="grid-c-title-1">
                <h3 className="grid-c-title-text-1">{title}</h3>
                <NavLink to={`/dish/${id}`} className="grid-c-title-icon"><img src={iconsImgs.plus} /></NavLink>
                <NavLink to={`/dish/${id}`} className="grid-c-title-icon"><img src={iconsImgs.gears} /></NavLink>
                <NavLink to={`/dish/${id}`} className="grid-c-title-icon"><img src={iconsImgs.alert} /></NavLink>
            </div>
            <img src="http://localhost:3000/static/media/person_two.348b2fcc3bf8c629eea7.jpg" alt="" />
            <div className="grid-c8-content">
                <p className="text text-silver-v1">Ipsum dolor sit amet consectetur, adipisicing elit.
                    Iste, vitae.....</p>
            </div>
        </div>
    )
}

export default Dish