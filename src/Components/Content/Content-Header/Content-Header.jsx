import React from "react";
import logoName from "../../../img/logo-name.png";
import logoComb from "../../../img/logo-comb.png";
import "./Content-Header.css"
import HeaderTime from "./Header-time/Header-time";

export default function ContentHeader() {
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
                        <div className={'comb-text'}>Дивизион тракторной техники</div>
                    </div>
                </div>
            </div>
            <div className={"header__title"}>
                Главный конвейер сборки тракторов
            </div>
            <HeaderTime/>
        </div>
    );
}