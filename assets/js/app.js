document.getElementById(listRoomChatName[i]).addEventListener('click',(e) => {
    if(document.getElementById(`${listRoomChatName[i]}Check`).checked == false){
        var cloneOFforRoomInputID = forRoomInputID.slice();
        cloneOFforRoomInputID.splice(i,1);
        let k = 0;
        while(k<cloneOFforRoomInputID.length) {
            document.getElementById(cloneOFforRoomInputID[k]).checked = false;
            document.getElementById(listRoomChatName[k]).style.backgroundColor = 'var(--white-color)';
            document.getElementById(listRoomChatName[k+1]).style.backgroundColor = 'var(--white-color)';
            k++;
        }
        yourChoice = listRoomChatName[i];
        roomIDyouChoice = listRoomID[i];
        console.log(roomIDyouChoice);
        document.getElementById(`${listRoomChatName[i]}Check`).checked = true;
        document.getElementById(listRoomChatName[i]).style.backgroundColor = 'var(--main-color-2)';
        document.getElementById('displayChatUser').innerHTML = ``;
    }
});