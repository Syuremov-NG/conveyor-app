import React from 'react';
import BodyHeader from './Body-header/Body-header';
import './Body.scss';
import BodyInfo from "./Body-info/Body-info";

// let data = {
//     header:{
//         planTime: 90,
//         endTime: "16:00",
//         actualTime: 130
//     },
//     table:{
//         first_1: 5,
//         first_2: 3,
//         first_3: 2,
//         first_4: -1,
//         first_5: 3,
//         second_1: 82,
//         second_2: 62,
//         second_3: 61,
//         second_4: 1,
//         second_5: 21
//     }
// }


export default function Body(props){

    return(
        <div className={'content-body'}>
            <BodyHeader data = {props.data}/>
            <div className={''}>
                <BodyInfo data = {props.data}/>
            </div>
        </div>
    )
}