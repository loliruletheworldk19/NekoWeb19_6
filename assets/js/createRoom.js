function createRoomChat() {
    createChatRoom.addEventListener('click',(e) => {
        document.getElementById('screenEventClickId').style.display = 'flex';
    });
    closeEventClick.addEventListener('click',(e) => {
        document.getElementById('screenEventClickId').style.display = 'none';
        document.getElementById('roomName').value = '';
        document.getElementById('getIDSuccess').style.display = 'none';
    //window.location.href = './home.html';
    })
}
export default createRoomChat;