import { db } from '../firbase'
import { ChatUI } from './ui'

const chatList = document.querySelector('.chat-list')
const chatUI = new ChatUI(chatList)

export class Chatroom {
    constructor(room, username) {
        this.room = room
        this.username = username
        this.chats = db.collection('chats')
        this.unsubscribe
    }

    // add new chat message
    async addChat(message) {
        // create object
        const now = new Date()
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created: firebase.firestore.Timestamp.fromDate(now)
        }

        // save to database
        const response = await this.chats.add(chat)
    }

    // get new chats in realtime
    getChats() {
        this.unsubscribe = this.chats
            .where('room', '==', this.room) // get chats by room
            .orderBy('created') // sort by created date
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    const doc = change.doc
                    if(change.type === 'added') {
                        chatUI.showChats(doc.data(), doc.id)
                    }
                    if(change.type === 'removed') {
                        chatUI.removeChats(doc.id)
                    }
                })
            })
    }

    // update username
    updateUser(username) {
        this.username = username
        localStorage.setItem('username', username)
    }

    // update room 
    updateRoom(room) {
        this.room = room
        if(this.unsubscribe) {
            this.unsubscribe()
            console.log('room updated')
        }  
    }
}
