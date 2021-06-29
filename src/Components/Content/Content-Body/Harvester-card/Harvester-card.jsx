import React from 'react';
import './Harvester-card.scss';

export default function HarvesterCard(props){
    function getStyle(side){
        switch (side) {
            case 'МОНТАЖ':{
                const foo = () => props.type.equip[0] === '2' ? 'install-2' : 'install-3';
                return foo();
            }
            case 'СБОРКА':{
                const foo = () => props.type.equip[0] === '2' ? 'build-2' : 'build-3';
                return foo();
            }
        }
    }
    return(

        <div className={`harvester-card ${props.className} ${getStyle(props.side)}`}>
            <div className='card-code'>УК {props.type.code}</div>
            <div className='card-equip'>{props.type.equip}</div>
            <div className='card-number'>№ {props.type.number}</div>
        </div>
    )
}