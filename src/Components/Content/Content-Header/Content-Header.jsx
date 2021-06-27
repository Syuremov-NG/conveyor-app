import React from "react";
import logoName from "../../../img/logo-name.png";
import logoComb from "../../../img/logo-comb.png";
import "./Content-Header.css"
import HeaderTime from "./Header-time/Header-time";

export default function ContentHeader(props) {
    return (
        <div className={"header"}>
            <div className={"header__logo"}>
                <div className={'logo-body'}>
                    <div className={'logo-name'}>
                        <img src={logoName} alt="ROSTSELMASH"/>
                    </div>
                    <div className={'logo-comb'}>
                        <div className={'comb-img'}>
                            <img src={logoComb} alt="HARVESTER"/>
                        </div>
                        <div className={'comb-text'}>{Array.isArray(props.data) ? "-" : props.data.division}</div>
                    </div>
                </div>
            </div>
            <div className={"header__title"}>{Array.isArray(props.data) ? "-" : props.data.area}</div>
            <HeaderTime/>
        </div>
    );
}