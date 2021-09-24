var chatText = document.getElementById('chat-text')
var chatInput = document.getElementById('chat-input')
var chatForm = document.getElementById('chat-form')

var socket = io()
var typing = false

//add a chat cell to our chat list view, and scroll to the bottom
socket.on('addToChat', data => {
	console.log('got a chat message')
	chatText.innerHTML += `<div class="chat-cell">${data}</div>`
	chatText.scrollTop = chatText.scrollHeight
})

chatForm.onsubmit = e => {
	//prevent the form from refreshing the page
	e.preventDefault()

	//call sendMsgToServer socket function, with form text value as argument
	socket.emit('sendMsgToServer', chatInput.value)
	chatInput.value = ""
}

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('chat-input').addEventListener('focus', () => { typing = true })
	document.getElementById('chat-input').addEventListener('blur', () => { typing = false })
})

document.onkeyup = event => {
	//user pressed and released enter key
	if (event.keyCode === 13) {
		if (!typing) chatInput.focus() //if user isn't yet typing, set focus 
		else chatInput.blur()          //user sent a message, remove focus
	}
}