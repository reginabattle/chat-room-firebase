import { getTime, getDate } from '../utils/date'

export class ChatUI {
    constructor(list) {
        this.list = list
    }

    showChats(data, id) {
        const time = getTime(data.created.toDate())
        const date = getDate(data.created.toDate())

        const html = `
            <li data-id="${id}">
                <span class="username">${data.username}</span> 
                <span class="timestamp" data-tooltip="${date}">${time}</span>
                <div class="message">
                    <p>${data.message}</p>
                </div>
            </li>
        `
        this.list.innerHTML += html
    }

    removeChats(id) {
        const chats = document.querySelectorAll('.chat-list li');
        chats.forEach(chat => {
            if(chat.getAttribute('data-id') === id){
                chat.remove();
            }
        })
    }
}