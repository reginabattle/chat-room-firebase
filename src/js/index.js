import 'babel-polyfill'
import { Chatroom } from './components/chat'
import { ChatUI } from './components/ui'

const chatForm = document.querySelector('.chat-form.send')
const userForm = document.querySelector('.chat-form.update')
const rooms = document.querySelector('.chat-rooms');

const chatList = document.querySelector('.chat-list')
const chatUI = new ChatUI(chatList)

// event listener - add new chat
chatForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = chatForm.message.value.trim()
    chatroom.addChat(message)
        .then(() => chatForm.reset())
        .catch(err => console.log(err))

    chatForm.reset()
})

// event listener - update user
userForm.addEventListener('submit', e => {
    e.preventDefault()
    const username = userForm.username.value.trim()

    // update username 
    chatroom.updateUser(username)

    // clear form fields
    userForm.reset()

    // show then hide update message
    chatUI.updateStatus(username)
})

// event listener - update user
rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON') {
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.showChats(chat));
    }
})

// check local storage for username
const user = localStorage.username ? localStorage.username : 'anon'
chatUI.updateStatus(user)

// class instances
const chatroom = new Chatroom('general', user)

// get chats
chatroom.getChats()