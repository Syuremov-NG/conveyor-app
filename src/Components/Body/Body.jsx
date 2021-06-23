import React from 'react';
import BodyHeader from './Body-header/Body-header';


let url = './src/data.json';

fetch(url)
  .then(response => response.json())
  .then(timesStatus => console.log(timesStatus));
    

export default function Body(){
    return(
        <div>
            <BodyHeader planTime = {90} endTime = {"16:00"} actualTime = {130}/>
        </div>
    )
}