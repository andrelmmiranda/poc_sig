import React, { useState } from "react";
import style from './style.module.css';

export const Input = ()=>{
    const [inputValue, setInputValue] = useState('');

    const handleDeleteInputValue = ()=>{
        setInputValue('');
    }

    const handleChange = (e)=>{
        setInputValue(e.target.value);
    }

    return(
        <div className={style.search}>
            <i className={`fa-solid fa-magnifying-glass ${style.__icon_find}`} />
            <i className={`fa-solid fa-circle-xmark ${style.__icon_delete}`} onClick={handleDeleteInputValue}/>
            <input className={style.__input} onChange={handleChange} value={inputValue} name="search" placeholder='buscar'/>
        </div>
    );
}