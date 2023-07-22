import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostDataType} from "../../../redux/State";

type MyPostsType = {
    postData: PostDataType[]
}

export const MyPosts = (props: MyPostsType) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <Post postData={props.postData}/>
        </div>
    );
};