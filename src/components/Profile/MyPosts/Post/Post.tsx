import React from 'react';
import s from "./Post.module.css";
import {PostDataType} from "../../../../redux/State";

type PostType = {
    postData: PostDataType[]
}

export const Post = (props: PostType) => {
    return (
        <div className={s.post}>
            {props.postData.map((el,index) => {
                return (
                    <div key={index}>
                        <img src="https://pbs.twimg.com/profile_images/1394990756717268994/_MiZSgHL_400x400.jpg"
                             alt="witcher-3"/>
                        {el.message}
                        <div>
                            <span>like</span> {el.likesCount}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

