import React from 'react';
import BodyHeader from './Body-header/Body-header';
import './Body.scss';
import BodySide from './Body-side/Body-side';
import InfoTable from './Info-table/Info-table';
import HarvesterCard from './Harvester-card/Harvester-card';

const Body = (props) => {
    const getCol = (num) => num < 5 ? 'color-red' : '';
    const getCol2 = (num) => num !== 8 ? 'color-red' : '';
    return(
        <div className={'content-body'}>
            <BodyHeader plan = {props.data.plan} fact = {props.data.fact} shiftEnds = {props.data.shiftEnds}/>

            <div className={'body-info'}>

                <div className={'left-side'}>
                    <BodySide classOfCards = {'side-cards'} type = {props.data.install} side = {'install'}/>

                    <div className={'left-info'}>
                        <div className={'side-info__counter'}>
                            <span className={`${getCol(props.data.install.length)}`}>{props.data.install.length}</span>
                            /5
                        </div>
                        <div className={'side-info__text'}>МОНТАЖ</div>
                    </div>
                </div>

                <div className={'body-table'}>
                    <InfoTable table = {props.data.table}/>
                    <div className={'body-conv'}>
                        {props.data.conv.map((el) => <HarvesterCard className = {'conv-cards'} type = {el} side = {'build'}/>) }
                    </div>
                    <div className={'conv-info'}>
                        <div className={'conv-info__wrapper'}>
                            <div></div>
                            <div className={'conv-info__count'}>
                                <div className={`conv-counter ${getCol2(props.data.conv.length)}`}>{props.data.conv.length}</div>
                                <div className={'conv-counter__text'}>
                                    на ГК
                                </div>
                            </div>
                            <div className={'conv-info__text'}>среднее Т такта за смену 1:55</div>
                        </div>
                    </div>
                </div>

                <div className={'right-side'}>
                    <BodySide classOfCards = {'side-cards'} type = {props.data.build} side = {'build'}/>

                    <div className={'right-info'}>
                        <div className={'side-info__counter'}>
                            <span className={`${getCol(props.data.build.length)}`}>{props.data.build.length}</span>
                            /5
                        </div>
                        <div className={'side-info__text'}>СБОРКА</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Body.defaultProps = {data:{
        install:[],
        conv:[],
        build:[],
    }
}
export default Body;