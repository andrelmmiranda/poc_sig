import React from "react";
import style from './style.module.css';

export const Extras = ()=>{
    return(
        <div className={style.extras}>
            <span className={style.__icons}><i className="fa-solid fa-envelope"></i></span>
            <span className={style.__icons}><i className="fa-solid fa-bell"></i></span>
            <span className={style.__icons}><i className="fa-solid fa-circle-user"></i></span>
        </div>
    );
}