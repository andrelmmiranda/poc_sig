import React from "react";
import style from "./style.module.css";
import { Container } from "../Container";
import { Input } from "../Input";
import { Extras } from "../Extras";

export const Header = ()=>{
    return(
        <header className={style.header}>
            <Container>
                <div className={style.__logo}>
                    <h1>Logo</h1>
                </div>
                <Input />
                <Extras />
            </Container>
      </header>
    );
}