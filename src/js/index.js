import 'babel-polyfill'
import { Chatroom } from './components/chat'

const chatForm = document.querySelector('.chat-form.send')
const userForm = document.querySelector('.chat-form.update')
const updateMsg = document.querySelector('.update-msg')

// event listener - add new chat
chatForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = chatForm.message.value.trim()
    chatroom.addChat(message)
        .then(() => chatForm.reset())
        .catch(err => console.log(err))
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
    updateMsg.innerText = `Name updated`
    userForm.username.value = username
    setTimeout(() => updateMsg.innerText = '', 3000)
})

// check local storage for username
const username = localStorage.username ? localStorage.username : 'anon' 

// class instances
const chatroom = new Chatroom('general', username)

// get chats
chatroom.getChats()