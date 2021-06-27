import React from 'react';
import './Info-table.scss';

let styles = {
    table_H:{
        background: 'grey',
        color: 'white',
        fontWeight: 'normal',
        fontSize: '30px'
    }
}

export default function InfoTable(props){
    function getCol(num){
        if(num < 0){
            return 'red'
        } else {
            return 'black'
        }
    }
    return(
        <div className={'info-table'}>
            <table>
                <tr>
                    <th rowSpan={2} style = {styles.table_H}></th>
                    <th rowSpan={2} style = {styles.table_H}>План</th>
                    <th colSpan={3} style = {{background: '#222022', fontSize: '20px'}}>На текущий момент</th>
                    <th rowSpan={2} style = {styles.table_H}>Осталось</th>
                </tr>
                <tr>
                    <th style = {{background: '#222022', fontSize: '20px'}}>План</th>
                    <th style = {{background: '#222022', fontSize: '20px'}}>Факт</th>
                    <th style = {{background: '#222022', fontSize: '20px'}}>Отклонение</th>
                </tr>
                <tr>
                    <td className={'title first-1'}>Смена</td>
                    <td className={'el first first-1'}>{Array.isArray(props.data) ? '-' : props.data.table.day.plan}</td>
                    <td className={'el first first-2'}>{Array.isArray(props.data) ? '-' : props.data.table.day.planCurr}</td>
                    <td className={'el first first-2'}>{Array.isArray(props.data) ? '-' : props.data.table.day.factCurr}</td>
                    <td className={'el first first-2'} style={{color: Array.isArray(props.data) ? getCol(0) : getCol(props.data.table.day.factCurr - props.data.table.day.planCurr)}}>
                        {Array.isArray(props.data) ? 0 : props.data.table.day.factCurr - props.data.table.day.planCurr}
                    </td>
                    <td className={'el first first-1'}>{Array.isArray(props.data) ? 0 : props.data.table.day.plan - +props.data.table.day.factCurr}</td>
                </tr>
                <tr>
                    <td className={'title second-1'}>Месяц</td>
                    <td className={'el second second-1'}>{Array.isArray(props.data) ? '-' : props.data.table.month.plan}</td>
                    <td className={'el second second-2'}>{Array.isArray(props.data) ? '-' : props.data.table.month.planCurr}</td>
                    <td className={'el second second-2'}>{Array.isArray(props.data) ? '-' : props.data.table.month.factCurr}</td>
                    <td className={'el second second-2'} style={{color: Array.isArray(props.data) ? getCol(0) : getCol(props.data.table.month.factCurr - props.data.table.month.planCurr)}}>
                        {Array.isArray(props.data) ? 0 : props.data.table.month.factCurr - props.data.table.month.planCurr}
                    </td>
                    <td className={'el second second-1'}>{Array.isArray(props.data) ? 0 : props.data.table.month.plan - +props.data.table.month.factCurr}</td>
                </tr>
            </table>
        </div>
    )
}