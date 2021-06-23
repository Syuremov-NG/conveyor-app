import React from 'react';
import './Body-header.scss';

export default function BodyHeader(props){
    return(
        <div className = 'body-header'>
            <div className = 'titles'>
                <div className = 'planTime-text'>Время такта:</div>
                <div className = 'endTime-text'>Плановое время ожидания смены:</div>
            </div>
            <div className = 'current-status'>
                <div className = 'planTime-stat'> 
                    ПЛАН {props.planTime} мин.
                </div>
                <div>
                    {props.endTime}
                </div>
            </div>
            <div className = 'actual-status'>
                ФАКТ {props.actualTime} мин
            </div>
        </div>
    )
}