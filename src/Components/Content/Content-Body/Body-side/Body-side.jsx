import React from 'react';
import './Body-side.scss';

import HarvesterCard from '../Harvester-card/Harvester-card';

export default function BodySide(props){
    return(
        <div className={'body-side'}>
            {props.type.map((el) => <HarvesterCard type = {el} className = {props.classOfCards}/>)}
        </div>
    )
}