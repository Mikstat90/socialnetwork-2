import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img src='https://images.pushsquare.com/9a7b74d140a8c/the-witcher-3-ps5-1.large.jpg'
                     alt='witcher-2'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

