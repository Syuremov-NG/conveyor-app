import React from 'react';
import './Body-info.scss';
import InfoTable from "./Info-table/Info-table";

export default function BodyInfo(props){
    return(
        <InfoTable data = {props.res}/>
    )
}