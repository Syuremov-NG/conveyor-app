import React from 'react';
import './Info-table.scss';

let styles = {
    table_H:{
        background: 'grey',
        color: 'white',
    }
}

export default function InfoTable(props){
    function getCol(num){
        if(num < 0){
            return 'red'
        } else {
            return 'white'
        }
    }

    return(
        <div className={'info-table'}>
            <table>
                <tr>
                    <th rowSpan={2} style = {styles.table_H}></th>
                    <th rowSpan={2} style = {styles.table_H}>План</th>
                    <th colSpan={3}>На текущий момент</th>
                    <th rowSpan={2} style = {styles.table_H}>Осталось</th>
                </tr>
                <tr>
                    <td>План</td>
                    <td>Факт</td>
                    <td>Отклонение</td>
                </tr>
                <tr>
                    <td>Смена</td>
                    <td className={'el first first-1'}>{props.table.day.plan}</td>
                    <td className={'el first first-2'}>{props.table.day.planCurr}</td>
                    <td className={'el first first-3'}>{props.table.day.factCurr}</td>
                    <td className={'el first first-4'} style={{color: getCol(props.table.day.factCurr - props.table.day.planCurr)}}>{props.table.day.factCurr - props.table.day.planCurr}</td>
                    <td className={'el first first-5'}>{props.table.day.plan - props.table.day.factCurr}</td>
                </tr>
                <tr>
                    <td>Месяц</td>
                    <td className={'el second second-1'}>{props.table.month.plan}</td>
                    <td className={'el second second-2'}>{props.table.month.planCurr}</td>
                    <td className={'el second second-3'}>{props.table.month.factCurr}</td>
                    <td className={'el second second-4'} style={{color: getCol(props.table.month.factCurr - props.table.month.planCurr)}}>{props.table.month.factCurr - props.table.month.planCurr}</td>
                    <td className={'el second second-5'}>{props.table.month.plan - props.table.month.factCurr}</td>
                </tr>
            </table>
        </div>
    )
}