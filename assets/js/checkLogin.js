const db = getDatabase();
                    const starCountRef = ref(db, 'usersList/' + userUIDnow);
                    onValue(starCountRef, (snapshot) => {
                        const data = snapshot.val();
                        document.getElementById('UserEmail').innerHTML = `${data.email}`;
                        userEmailnow = data.email;
                        objDataIDroomChatyouIN = data.listRoomChat;
                        listRoomChatYouIn = Object.keys(objDataIDroomChatyouIN);
                    });
                    const getDataRoom = ref(db, 'roomsList/' + userUIDnow );
                    onValue(getDataRoom, (snapshot) => {
                        const data = snapshot.val();
                        dataListRoom = data;
                        listRoomChatName = Object.keys(data);
                        console.log(listRoomChatName);
                        console.log(dataListRoom);
                        listNameRoomOutput = [];
                        for(var g = 0; g< listRoomChatName.length; g++) {
                            listNameRoom = dataListRoom[listRoomChatName[g]].roomName;
                            listNameRoomOutput.push(listNameRoom);
                        }
                        console.log(listNameRoomOutput);
                        var forRoomInputID = [];
                        let k = 0;
                        while(k < listRoomChatName.length) {
                            forRoomInputID.push(`${listRoomChatName[k]}Check`);
                            dataRoomID = data[listRoomChatName[k]];
                            listRoomID.push(dataRoomID.roomID);
                            console.log(listRoomID);
                            k++;
                        }
                        const getChatdata = ref(db, 'historyChat/');
                        onValue(getChatdata, (snapshot) => {
                            const data = snapshot.val();
                            dataChat = data;
                            let R = 0;
                                while(R < listRoomChatYouIn.length) {
                                    yourDataChat = dataChat[listRoomChatYouIn[R]];
                                    var KeySaveDataChat = Object.keys(yourDataChat);
                                    let M = 0;
                                        while(M < KeySaveDataChat.length) {
                                            dataInside = yourDataChat[KeySaveDataChat[M]];
                                            keyDataChat = Object.keys(dataInside);
                                            M++;
                                        }
                                    R++;
                                };
                                console.log(yourDataChat);
                        });
                        for(let i=0; i<listRoomChatName.length; i++) {
                            const newRoom = document.createElement("div");
                            newRoom.innerHTML = `# ${listNameRoomOutput[i]}`;
                            newRoom.className = 'selectRoom';
                            newRoom.id = listRoomChatName[i];
                            document.getElementById("listCHAT-R").appendChild(newRoom);
                            const checkbox = document.createElement("input");
                            checkbox.type = "checkbox";
                            checkbox.id = listRoomChatName[i]+'Check';
                            checkbox.className = 'selectRoom';
                            document.getElementById(listRoomChatName[i]).appendChild(checkbox);
                            document.getElementById('displayChatUser').innerHTML = ``;
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

                                    
                                    var SavePoint = dataChat[roomIDyouChoice];
                                    var keyChatOver = [];
                                    var dataInsideS = {};
                                    var fullTexTChat = [];
                                        keyChatOver = Object.keys(SavePoint);
                                        let P = 0;
                                        var keyChatIn = [];
                                            while(P < keyChatOver.length) {
                                                dataInsideS = SavePoint[keyChatOver[P]];
                                                keyChatIn = Object.keys(dataInsideS);
                                                let H = 0;
                                                //var KeyChat = [];
                                                var listOBJChat = {};
                                                    while(H < keyChatIn.length) {
                                                        listOBJChat = dataInsideS[keyChatIn[H]]
                                                        console.log(listOBJChat);
                                                        fullTexTChat.push(listOBJChat);
                                                        H++;
                                                    }
                                                P++;
                                            }
                                            //console.log(fullTexTChat);
                                            let T = 0;
                                            while(T < fullTexTChat.length) {
                                                const newMess = document.createElement("div");
                                                newMess.innerHTML = `${fullTexTChat[T].email}: `;
                                                newMess.className = '';
                                                newMess.id = `${fullTexTChat[T].usermsID}`;
                                                document.getElementById('displayChatUser').appendChild(newMess);
                                                const br = document.createElement('br');
                                                document.getElementById(`${fullTexTChat[T].usermsID}`).appendChild(br);
                                                const newMessvalue = document.createElement("span");
                                                newMessvalue.innerHTML = fullTexTChat[T].value;
                                                newMessvalue.className = '';
                                                newMessvalue.id = `${fullTexTChat[T].messID}`;
                                                document.getElementById(`${fullTexTChat[T].usermsID}`).appendChild(newMessvalue);
                                                // var userChat = `${yourChoice}${userUIDnow}${messNum}`;
                                                // UploadtoFireBase
                                                T++;
                                            };
                                }
                            });
                        }
                    })