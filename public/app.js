
var socket = io.connect('http://localhost:7777');


socket.on('connect', function (data) {
    socket.emit('join', 'Hello server from client');
});

// function selectDOMbyId(el) { return document.querySelector(el); }

// function selectDOMbyIdAll(el) { return document.querySelectorAll(el); }

// const threadDomNode = selectDOMbyId('#thread');
// const form = selectDOMbyId('form');
// const messageBox = selectDOMbyId('#message');


socket.on('thread', function (data) {
    $('#thread').append('<li>' + data + '</li>');
});

// sends message to server, resets & prevents default form action
$('form').submit(function () {
    var message = $('#message').val();
    socket.emit('messages', message);
    this.reset();
    return false;
});