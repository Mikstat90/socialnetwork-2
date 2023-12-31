import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const  Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.item}><NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink></div>
            <div className={s.item}><NavLink to='/dialogs' activeClassName={s.activeLink}>Dialogs</NavLink></div>
            <div className={s.item}><NavLink to='/news' activeClassName={s.activeLink}>News</NavLink></div>
            <div className={s.item}><NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink></div>
            <div className={s.item}><NavLink to='/video' activeClassName={s.activeLink}>Video</NavLink></div>
            <div className={s.item}><NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink></div>
        </nav>
    );
};
