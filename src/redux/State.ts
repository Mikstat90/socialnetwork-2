let rerenderEntireTree = () => {
    alert('stay changed')
}

export type MessagesDataType = {
    id: number
    message: string
}

export type DialogsDataType = {
    id: number
    name: string
}

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    postData: PostDataType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    newMessagesText: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state: StateType = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It is my first post', likesCount: 20},
            {id: 3, message: 'Where is the Kaer Morhen?', likesCount: 50}
        ],
        newPostText: 'Northern Kingdoms'
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Geralt'},
            {id: 2, name: 'Vesemir'},
            {id: 3, name: 'Eskel'},
            {id: 4, name: 'Lambert'},
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'What happened?'},
        ],
        newMessagesText: 'Nilfgaard'
    }
}

export const addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''

    rerenderEntireTree()
}

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText

    rerenderEntireTree()
}

export const addMessage = () => {

    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessagesText
    }

    state.dialogsPage.messagesData.push(newMessage)
    state.dialogsPage.newMessagesText = ''

    rerenderEntireTree()
}

export const updateNewMessageText = (newMessage) => {

    state.dialogsPage.newMessagesText = newMessage

    rerenderEntireTree()
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}