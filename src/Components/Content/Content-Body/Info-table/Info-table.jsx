import React from 'react';
import './Info-table.scss';

export default function InfoTable(props){
    const getCol = (num) => num < 0 ? 'color-red' : '';

    return(
        <div className={'info-table'}>
            <table>
                <thead>
                    <tr>
                        <th rowSpan={2} className={'table_H'}></th>
                        <th rowSpan={2} className={'table_H'}>План</th>
                        <th colSpan={3} className={'table_H-black'}>На текущий момент</th>
                        <th rowSpan={2} className={'table_H'}>Осталось</th>
                    </tr>
                    <tr>
                        <th className={'table_H-black'}>План</th>
                        <th className={'table_H-black'}>Факт</th>
                        <th className={'table_H-black'}>Отклонение</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={'title first-1'}>Смена</td>
                        <td className={'el first first-1'}>{props.table.day.plan}</td>
                        <td className={'el first first-2'}>{props.table.day.planCurr}</td>
                        <td className={'el first first-2'}>{props.table.day.factCurr}</td>
                        <td className={`el first first-2 ${getCol(props.table.day.factCurr - props.table.day.planCurr)}`}>
                            {props?.table.day.factCurr - props.table.day.planCurr}
                        </td>
                        <td className={'el first first-1'}>{props.table.day.plan - +props.table.day.factCurr}</td>
                    </tr>
                    <tr>
                        <td className={'title second-1'}>Месяц</td>
                        <td className={'el second second-1'}>{props.table.month.plan}</td>
                        <td className={'el second second-2'}>{props.table.month.planCurr}</td>
                        <td className={'el second second-2'}>{props.table.month.factCurr}</td>
                        <td className={`el second second-2 ${getCol(props.table.month.factCurr - props.table.month.planCurr)}`}>
                            {props.table.month.factCurr - props.table.month.planCurr}
                        </td>
                        <td className={'el second second-1'}>{props.table.month.plan - +props.table.month.factCurr}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}
InfoTable.defaultProps = {table:{
        day: {
            plan: 0,
            planCurr: 0,
            factCurr: 0,
        },
        month:{
            plan: 0,
            planCurr: 0,
            factCurr: 0,
        }
    }
}