import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostDataType} from "../../../redux/State";

type MyPostsType = {
    postData: PostDataType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText) => void
}

export const MyPosts = (props: MyPostsType) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <Post postData={props.postData}/>
        </div>
    );
};