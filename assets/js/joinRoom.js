function joinRoomChat() {
    joinChatRoom.addEventListener('click',(e) => {
        document.getElementById('openToInvite').style.display = 'flex';
    });
    closeInviteBox.addEventListener('click',(e) => {
        document.getElementById('openToInvite').style.display = 'none';
        document.getElementById('comeRoomName').value = '';
        //window.location.href = './home.html';
    })
}
export default joinRoomChat;


