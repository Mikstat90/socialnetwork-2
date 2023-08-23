import React from 'react';
import './index.css';
import {addMessage, addPost, state, subscribe, updateNewMessageText, updateNewPostText} from "./redux/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

export let rerenderEntireTree = () => {
    ReactDOM.render(<BrowserRouter>
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            addMessage={addMessage}
            updateNewMessageText={updateNewMessageText}
        />
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree()

subscribe(rerenderEntireTree)

