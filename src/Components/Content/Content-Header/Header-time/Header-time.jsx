import React from 'react';
import moment from 'moment';
import "moment/locale/ru";
import "./Header-time.scss";


moment.locale('ru');
export default function HeaderTime(){
    return(
        <div className='time-moment'>
            <div className='time-moment__time'>{moment().format('HH:mm')}</div>
            <div>{moment().format('D MMMM')}</div>
            <div>{moment().format('YYYY')} г.</div>
        </div>
    );
}