import React, { useState } from "react";
import style from './style.module.css';

export const Menu = ()=>{
    const [collapse, setCollapse] = useState(false);

    const handleCollapse = ()=>{
        setCollapse(!collapse);
    }
    
    return(
        <nav className={collapse ? `${style.sidebar} ${style.collapse}` : style.sidebar}>
            <div></div>
            <div></div>
            {
                !collapse ? 
                    <i onClick={handleCollapse} className={`fa-solid fa-x ${style.icon}`}></i> : 
               (
                    <i onClick={handleCollapse} className={`fa-regular fa-circle ${style.icon}`} >
                        <i className={`fa-solid fa-ellipsis ${style.__complement}`} />
                    </i>
                )
            }
            
        </nav>
    );
}