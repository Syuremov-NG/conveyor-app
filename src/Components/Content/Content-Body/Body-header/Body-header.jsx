import React from 'react';
import './Body-header.scss';

export default function BodyHeader(props){
    const getCol = (num) => +num > props.plan ? 'background-red' : '';

    return(
        <div className = 'body-header'>
            <div className = 'body-header__first-stroke'>
                <div className = 'planTime-text'>Время такта:</div>
                <div className = 'planTime-stat'>
                    ПЛАН {props.plan} мин.
                </div>
                <div className = {`actual-status ${getCol(props.fact)}`}>
                    ФАКТ {props.fact} мин
                </div>
            </div>
            <div className = 'body-header__second-stroke'>
                <div className = 'endTime-text'>Плановое время ожидания смены:</div>
                <div className = 'endTime-stat'>
                    {props.shiftEnds}
                </div>

            </div>
        </div>
    )
}
BodyHeader.defaultProps = {plan: 0, fact: 0, shiftEnds: "--:--"}