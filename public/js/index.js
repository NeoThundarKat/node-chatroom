var socket = io();
$('#send-message-btn').click(function () {
    var msg = {
        content: $('#message-box').val(),
        user: $('#user-box').val()
    };
    socket.emit('chat', msg);
    $('#messages').append($('<p>').html("<span style='color:#2d6ca2'>" + msg.user + "</span>: " + msg.content));
    $('#message-box').val('');
    console.log(msg);
    return false;
});
socket.on('chat', function (msg) {
    $('#messages').append($('<p>').html("<span style='color:#2d6ca2'>" + msg.user + "</span>: " + msg.content));
    console.log(msg);
});