
function upLoadMessage() {
    const d = new Date();
    let time = d.getTime();
    
}

document.getElementById('chatInputText').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        //Updata data to Firebase
        var textMess = document.getElementById('chatInputText').value;
        const newMess = document.createElement("div");
        newMess.innerHTML = `${userEmailnow}: `;
        newMess.className = '';
        newMess.id = `${yourChoice}#${userUIDnow}#${messNum}`;
        document.getElementById('displayChatUser').appendChild(newMess);
        // console.log(`you say: ${textMess}`);
        const br = document.createElement('br');
        document.getElementById(`${yourChoice}#${userUIDnow}#${messNum}`).appendChild(br);
        const newMessvalue = document.createElement("span");
        newMessvalue.innerHTML = textMess;
        newMessvalue.className = '';
        newMessvalue.id = `${yourChoice}#${userUIDnow}#${messNum}#${textNum}`;
        document.getElementById(`${yourChoice}#${userUIDnow}#${messNum}`).appendChild(newMessvalue);

        updateDataMessage();
        function updateDataMessage() {
            const db = getDatabase();
            // const newPostKey = push(child(ref(db), 'historyChat')).key;
            const updates = {};
            updates['/historyChat/' + `${roomIDyouChoice}/${userUIDnow}/${time}${yourChoice}${userUIDnow}${messNum}/value`] = textMess;
            updates['/historyChat/' + `${roomIDyouChoice}/${userUIDnow}/${time}${yourChoice}${userUIDnow}${messNum}/email`] = userEmailnow;
            updates['/historyChat/' + `${roomIDyouChoice}/${userUIDnow}/${time}${yourChoice}${userUIDnow}${messNum}/messID`] = `${time}${yourChoice}${userUIDnow}${messNum}${textNum}`;
            updates['/historyChat/' + `${roomIDyouChoice}/${userUIDnow}/${time}${yourChoice}${userUIDnow}${messNum}/usermsID`] = `${time}${yourChoice}${userUIDnow}${messNum}`;

            return update(ref(db), updates);
        }
        document.getElementById('chatInputText').value = '';
        messNum++;
        textNum++;
    }
});


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