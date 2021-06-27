import React from 'react';
import BodyHeader from './Body-header/Body-header';
import './Body.scss';
import BodySide from './Body-side/Body-side';
import InfoTable from './Info-table/Info-table';
import HarvesterCard from './Harvester-card/Harvester-card';

export default function Body(props){
    function getCol(num, cond){
        if (num < cond){
            return 'red'
        } else {
            return 'white'
        }
    }
    function getCol2(num){
        if (num !== 8){
            return 'red'
        } else {
            return 'white'
        }
    }
    return(
        <div className={'content-body'}>
            <BodyHeader data = {props.data}/>

            <div className={'body-info'}>

                <div className={'left-side'}>
                    {Array.isArray(props.data) ? '-' : (props.data.install.length === 0 ? "-" : <BodySide classOfCards = {'side-cards'} type = {props.data.install} side = {'left'}/>)}
                    <div className={'left-info'}>
                        <div className={'side-info__counter'}>
                            {Array.isArray(props.data) ? '-' : <span style={{color: getCol(props.data.install.length, 5)}}>{props.data.install.length}</span>}
                            /5
                        </div>
                        <div className={'side-info__text'}>МОНТАЖ</div>
                    </div>
                </div>

                <div className={'body-table'}>
                    <InfoTable data = {props.data}/>
                    <div className={'body-conv'}>
                        {Array.isArray(props.data) ? '-' : props.data.conv.map((el) => <HarvesterCard className = {'conv-cards'} type = {el}/>) }
                    </div>
                    <div className={'conv-info'}>
                        <div className={'conv-info__wrapper'}>
                            <div></div>
                            <div className={'conv-info__count'}>
                                {Array.isArray(props.data) ? '-' : <div className={'conv-counter'} style={{color: getCol2(props.data.conv.length)}}>{props.data.conv.length}</div>}
                                <div className={'conv-counter__text'}>
                                    на ГК
                                </div>
                            </div>
                            <div className={'conv-info__text'}>среднее Т такта за смену 1:55</div>
                        </div>
                    </div>
                </div>

                <div className={'right-side'}>
                    {Array.isArray(props.data) ? '-' : (props.data.build.length === 0 ? "-" : <BodySide classOfCards = {'side-cards'} type = {props.data.build} side = {'right'}/>)}
                    <div className={'right-info'}>
                        <div className={'side-info__counter'}>
                            {Array.isArray(props.data) ? '-' : <span style={{color: getCol(props.data.build.length, 5)}}>{props.data.build.length}</span>}
                            /5
                        </div>
                        <div className={'side-info__text'}>СБОРКА</div>
                    </div>
                </div>

            </div>
        </div>
    )
}