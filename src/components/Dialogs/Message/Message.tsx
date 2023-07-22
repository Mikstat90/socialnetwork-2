import React from 'react';
import s from './Message.module.css'
import {MessagesDataType} from "../../../redux/State";

type MessageType = {
    messagesData: MessagesDataType[]
}

export const Message = (props: MessageType) => {

    let newMessageElement = React.createRef()

    let addMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }

    return (
        <div className={s.message}>
            {props.messagesData.map((el, index) => <div key={index}>{el.message}</div>)}
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
};

