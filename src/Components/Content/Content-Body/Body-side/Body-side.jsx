import React from 'react';
import './Body-side.scss';

import HarvesterCard from '../Harvester-card/Harvester-card';

export default function BodySide(props){
    const getCol = (num) => num < 5 ? 'color-red' : '';
    return(
        <div className='body-side'>
            <div className='body-side__cards'>
                {props.type.map((el, index) => index < 8 ? <HarvesterCard type = {el} className = {props.classOfCards} size = {1.2} side = {props.side}/>: '')}
            </div>

            <div className={'side-info'}>
                <div className='side-info__wrapper'>
                    <div className={'side-info__counter'}>
                        <span className={`${getCol(props.type.length)}`}>{props.type.length}</span>
                        /5
                    </div>
                    <div className={'side-info__text'}>МОНТАЖ</div>
                </div>
            </div>

        </div>
    )
}