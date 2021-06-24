import React from "react";
import Moment from "react-moment";
import "./Header-time.css";
import "moment/locale/ru";

const styles = {
    Moment:{
        fontWeight: "bold"
    },
    Div:{
        fontSize: 20
    }
}

export default function HeaderTime(){
    return(
        <div className={"time-moment"}>
            <Moment style={styles.Moment} format="HH:mm" interval={1000}/>
            <Moment style={styles.Div} locale="ru" format="DD MMMM" interval={1000}/>
            <div>
                <Moment style={styles.Div} locale="ru" format="YYYY" interval={1000}/>
                <span> г.</span>
            </div>
        </div>
    );
}