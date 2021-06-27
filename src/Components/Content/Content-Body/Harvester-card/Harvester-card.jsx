import React from 'react';
import './Harvester-card.scss';

export default function HarvesterCard(props){

    return(
        <div className={`harvester-card ${props.className}`}>
            <div>УК {props.type.code}</div>
            <div>{props.type.equip}</div>
            <div>{props.type.number}</div>
        </div>
    )
}