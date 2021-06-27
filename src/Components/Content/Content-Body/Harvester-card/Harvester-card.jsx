import React from 'react';
import './Harvester-card.scss';

export default function HarvesterCard(props){
    function getStyle(side){
        switch (side) {
            case 'install':
                if(props.type.equip[0] === "2"){
                    return {
                        background: '#7a3706',
                        color: '#bec0be',
                        border: '3px dashed #e66c08'
                    }
                } else {
                    return {
                        background: '#203752',
                        color: '#c0c0b9',
                        border: '3px dashed #3c6598'
                    }
                }
            case 'build' || 'conv':
                if(props.type.equip[0] === "2"){
                    return {
                        background: '#eb6d08',
                        color: 'white',
                        border: '3px solid #ffc596'
                    }
                } else {
                    return {
                        background: '#396199',
                        color: 'white',
                        border: '3px solid #9cb9e0'
                    }
                }

        }
    }
    return(

        <div className={`harvester-card ${props.className}`} style={getStyle(props.side)}>
            <div>УК {props.type.code}</div>
            <div>{props.type.equip}</div>
            <div>{props.type.number}</div>
        </div>
    )
}