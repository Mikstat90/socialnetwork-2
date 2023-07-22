import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsDataType} from "../../../redux/State";

type DialogItemType = {
    dialogsData: DialogsDataType[]
}

export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialogItem}>
            {props.dialogsData.map((el, index) => {
                return (
                    <div key={index}>
                        <img src="https://i.pinimg.com/originals/d3/f7/6c/d3f76ce627781e576c6cdab4993817a2.jpg" alt="witcher-4"/>
                        <NavLink to={'/dialogs/' + el.id} activeClassName={s.activeLink}>{el.name}</NavLink>
                    </div>
                )
            })}
        </div>
    )
}