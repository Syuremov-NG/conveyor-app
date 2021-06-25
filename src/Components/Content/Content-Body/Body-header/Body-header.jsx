import React from 'react';
import './Body-header.scss';

export default function BodyHeader(props){
    function getCol(num){
        if(+num > props.data.plan){
            return 'red'
        }
        else {
            return 'none'
        }
    }
    return(
        <div className = 'body-header'>
            <div className = 'titles'>
                <div className = 'planTime-text'>Время такта:</div>
                <div className = 'endTime-text'>Плановое время ожидания смены:</div>
            </div>
            <div className = 'current-status'>
                <div className = 'planTime-stat'>
                    ПЛАН {Array.isArray(props.data) ? "-" : props.data.plan} мин.
                </div>
                <div className = 'endTime-stat'>
                    {Array.isArray(props.data) ? "-" : props.data.shiftEnds}
                </div>
            </div>
            <div className = 'actual-status' style={{background: getCol(props.data.fact)}}>
                ФАКТ {Array.isArray(props.data) ? "-" : props.data.fact} мин
            </div>
        </div>
    )
}