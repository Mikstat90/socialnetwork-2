import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType, updateNewPostText} from "../../redux/State";

type ProfileType = {
    postData: PostDataType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText) => void
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts
                postData={props.postData}
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};
