import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getDatabase, set, ref, update, onValue, push, child } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import loginOut from "./logOut.js";
import createRoomChat from "./createRoom.js"
import joinRoomChat from "./joinRoom.js"
//import upLoadMessage from "./chatLoad.js"
//import { dataUserList, listRoomUserJoin, userEmail, userName } from "./yourFirebase.js"
const firebaseConfig = {
    apiKey: "AIzaSyCoRM3XqzXjSUwGkzcnApnqqZZpdq62pJk",
    authDomain: "nekosocial-d145a.firebaseapp.com",
    projectId: "nekosocial-d145a",
    storageBucket: "nekosocial-d145a.appspot.com",
    messagingSenderId: "248984533311",
    appId: "1:248984533311:web:e65b03f66f682509023b8a"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const db = getDatabase();

var userLoginNow;

var dataUserNowObject = {};
var listRoomUserJoin = {};
var userEmailNow;
var userNameNow;
var listRoomUserJoinID = [];
var listRoomUserJoinNAME = [];

var dataRoomChatObject = {};


var dataHistoryChatObject = {}

var YourRoomChoice;
var YourRIdChoice;

var localObjectDataChatNow = {};
var localKeyDataChatNow = [];
var fullTextChatData = [];


var userEmailnow;
var listRoomChatName = [];
var yourChoice;
var dataRoomID = {};
var dataListRoom = {};
var listRoomID = [];
var objDataIDroomChatyouIN = {};
var listRoomChatYouIn = [];
var roomIDyouChoice;
var keyDataChat = [];
var yourDataChat = {};
var dataChat = {};
var dataInside = {};
var listYourMess = [];
var allRoomList = [];
var listNameRoom = [];
var listNameRoomOutput = [];

const dataDate = new Date();
let time = dataDate.getTime();
//GetId-date
var dataTime;
setInterval(() => {
    let datax = new Date();
    dataTime = datax.getTime();
}, 500);
//GetDate
var dataTimeCount;
setInterval(() => {
    var dataDay = new Date();
    dataTimeCount = `${dataDay.getHours()}:${dataDay.getMinutes()}:${dataDay.getSeconds()} ${dataDay.getDate()}.${dataDay.getDay()}${dataDay.getFullYear()}`;
}, 1000);


//Check-Login
const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    //Login == true
    if (user) {
        userLoginNow = user.uid;
        function onlineState() {
            const db = getDatabase();
            const updates = {};
            updates['/usersList/' + `${userLoginNow}/onlineState`] = '1';
            return update(ref(db), updates);
        };
        onlineState();
        function loadinfoUser() {
            //console.log('you was login!');
            //Get data
            console.log(userLoginNow);
            //Get data User Login Now
            const readDataUserNow = ref(db, 'usersList/' + userLoginNow);
            onValue(readDataUserNow, (snapshot) => {
                dataUserNowObject = snapshot.val();
                userEmailNow = dataUserNowObject.email;
                document.getElementById('UserEmail').innerHTML = userEmailNow;
                //InnerHTML To create DIV Room Chat ever userDataChange
                //Get ID and NAME in Obj at the userDATA on Firebase
                //--> listRoomUserJoinID = [];
                //--> listRoomUserJoinNAME = [];
                listRoomUserJoinID = Object.keys(dataUserNowObject.listRoom);
                console.log(listRoomUserJoinID);
                //document.getElementById("listCHAT-R").innerHTML = '';
                for (let count = 0; count < listRoomUserJoinID.length; count++) {
                    listRoomUserJoinNAME.push(dataUserNowObject.listRoom[listRoomUserJoinID[count]]);
                    //Create DIV innterHTML <LIST ROOM>
                    const newRoom = document.createElement("div");
                    newRoom.innerHTML = `# ${listRoomUserJoinNAME[count]}`;
                    newRoom.className = 'selectRoom';
                    newRoom.id = listRoomUserJoinID[count];
                    document.getElementById("listCHAT-R").appendChild(newRoom);
                    //const checkbox = document.createElement("input");
                    //checkbox.type = "checkbox";
                    //Set Id for Input = listRoomUserJoinNAME[count]
                    //checkbox.id = listRoomUserJoinNAME[count];
                    //checkbox.className = 'selectRoom';
                    //document.getElementById(listRoomUserJoinID[count]).appendChild(checkbox);
                    //Clear Display data Chat on the board
                    document.getElementById('displayChatUser').innerHTML = '';
                    console.log('create');
                    //Select Room to Chat
                    selectRoomChat();
                    function selectRoomChat() {
                        document.getElementById(listRoomUserJoinID[count]).addEventListener('click',(e) => {
                            console.log(listRoomUserJoinID[count]);
                            console.log('addEvent!');
                            //if(document.getElementById(`${listRoomUserJoinNAME[count]}`).checked == false){
                                // var cloneOFforRoomInputID = listRoomUserJoinNAME.slice();
                                //     cloneOFforRoomInputID.splice(count,1);
                                //     let k = 0;
                                //     while(k<cloneOFforRoomInputID.length) {
                                //         document.getElementById(cloneOFforRoomInputID[k]).checked = false;
                                //         document.getElementById(listRoomUserJoinID[k]).style.backgroundColor = 'var(--white-color)';
                                //         document.getElementById(listRoomUserJoinID[k+1]).style.backgroundColor = 'var(--white-color)';
                                //         k++;
                                //     }
                                //     YourRIdChoice = listRoomUserJoinID[count];
                                //     document.getElementById('displayChatUser').innerHTML = '';
                                //     getDataChat(getDataHistoryChat);
                                //     document.getElementById(`${listRoomUserJoinNAME[count]}`).checked = true;
                                //     document.getElementById(listRoomUserJoinID[count]).style.backgroundColor = 'var(--main-color-2)';
                            let ms = 0;
                            while(ms < listRoomUserJoinNAME.length) {
                                //document.getElementById(`${listRoomUserJoinNAME[ms]}`).checked = false;
                                document.getElementById(listRoomUserJoinID[ms]).style.backgroundColor = 'var(--white-color)';
                                ms++;
                            }
                            //document.getElementById(`${listRoomUserJoinNAME[count]}`).checked = true;
                            document.getElementById(listRoomUserJoinID[count]).style.backgroundColor = 'var(--main-color-2)';
                            YourRIdChoice = listRoomUserJoinID[count];
                            document.getElementById('displayChatUser').innerHTML = '';
                            getDataChat(getDataHistoryChat);
                            getDataListRoom(updateListMemberRoomChat)
                            //}
                        });
                    }
                }
                //autofillTheLastRoom();
            });
            //Get data Room Chat
            function getDataListRoom(outPut) {
                const readDataRoomChat = ref(db, 'roomList/');
                onValue(readDataRoomChat, (snapshot) => {
                    dataRoomChatObject = snapshot.val();
                    outPut(dataRoomChatObject);
                });
            }
            //Get data History Chat
            function getDataChat(callback) {
                const readDataHistoryChat = ref(db, 'chatData/');
                onValue(readDataHistoryChat, (snapshot) => {
                    dataHistoryChatObject = snapshot.val();
                    var ObjectDataChatNow = dataHistoryChatObject[YourRIdChoice];
                    var KeyDataChatNow = Object.keys(ObjectDataChatNow);
                    localObjectDataChatNow = ObjectDataChatNow;
                    localKeyDataChatNow = KeyDataChatNow;
                    //console.log(KeyDataChatNow);
                    callback(ObjectDataChatNow, KeyDataChatNow);
                });
            }

            //Update Data <Create Room>
            createROOM.addEventListener('click',(e) => {
                const db = getDatabase();
                var roomCreateName = document.getElementById('roomName').value;
                if (roomCreateName != '') {
                    var roomCreateId = `${dataTime}${roomCreateName}`;
                    YourRIdChoice = roomCreateId;
                    updateDataRoom();
                    function updateDataRoom() {
                        const db = getDatabase();
                        const updates = {};
                        //Update Date into FireBase
                        updates[`/usersList/${userLoginNow}/listRoom/${roomCreateId}`] = roomCreateName;
                        updates[`/roomList/${roomCreateId}/creater/`] = userLoginNow;
                        updates[`/roomList/${roomCreateId}/roomID/`] = roomCreateId;
                        updates[`/roomList/${roomCreateId}/roomName/`] = roomCreateName;
                        updates[`/roomList/${roomCreateId}/listMember/${userLoginNow}`] = userEmailNow;
                        updates[`/chatData/${roomCreateId}/`] = null;
                        let num = 0;
                        while(num < listRoomUserJoinID.length) {
                            document.getElementById(listRoomUserJoinID[num]).remove();
                            num++;
                        }
                        listRoomUserJoinID = [];
                        listRoomUserJoinNAME = [];
                        return update(ref(db), updates);
                    };
                    document.getElementById(listRoomUserJoinID[listRoomUserJoinID.length - 1]).style.backgroundColor = 'var(--main-color-2)';
                    document.getElementById('inviteID').innerHTML = `${roomCreateId}`;
                    document.getElementById('roomName').value = '';
                } else {
                    alert('Oi oi nhập tên cho đàng hoàng coi!');
                }
            })

            //Update Data <Join Room>
            joinROOM.addEventListener('click',(e) => {
                // for (let count = 0; count < listRoomUserJoinID.length; count++) {
                //     console.log(listRoomUserJoinID[count]);
                //     document.getElementById(listRoomUserJoinID[count]).removeEventListener('click',(e));
                //     document.getElementById(listRoomUserJoinID[count]).remove();
                //     console.log('remove');
                // };
                getDataListRoom(joinRoomWithIDR);
            })
            function joinRoomWithIDR(dataRoomChatObject) {
                var joinRoomID = document.getElementById('comeRoomName').value;
                var joinRoomName = dataRoomChatObject[joinRoomID].roomName;
                updateDataMessage();
                //Upload into Firebase -> userList/ListRoom
                function updateDataMessage() {
                    const db = getDatabase();
                    const updates = {};
                    updates[`/usersList/${userLoginNow}/listRoom/${joinRoomID}`] = joinRoomName;
                    updates[`/roomList/${joinRoomID}/listMember/${userLoginNow}`] = userEmailNow;

                    return update(ref(db), updates);
                }
                window.location.href = './home.html';
            }

            function removeClassListNow() {
                // var count = 0;
                // while(count < listRoomUserJoinID.length) {
                //     document.getElementById(listRoomUserJoinID[count]).remove();
                //     count++;
                // }
            }


            
            
            //UpLoad Message to FireBase <Enter-Button>
            document.getElementById('chatInputText').addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    //Updata data to Firebase
                    var textMess = document.getElementById('chatInputText').value;
                    var IdMess = `${dataTime}${userLoginNow}`;
                    if(textMess != '') {
                        updateDataMessage();
                    } else {
                        alert('Did you miss anything? - Enter to continue');
                    }
                    function updateDataMessage() {
                        const db = getDatabase();
                        //YourRIdChoice
                        // const newPostKey = push(child(ref(db), 'historyChat')).key;
                        const updates = {};
                        updates['/chatData/' + `${YourRIdChoice}/${IdMess}/email`] = userEmailNow;
                        updates['/chatData/' + `${YourRIdChoice}/${IdMess}/time`] = dataTimeCount;
                        updates['/chatData/' + `${YourRIdChoice}/${IdMess}/userID`] = userLoginNow;
                        updates['/chatData/' + `${YourRIdChoice}/${IdMess}/userName`] = userLoginNow; 
                        updates['/chatData/' + `${YourRIdChoice}/${IdMess}/value`] = textMess;
                        updates['/chatData/' + `${YourRIdChoice}/${IdMess}/userColor`] = 'red';

                        return update(ref(db), updates);
                    }
                    document.getElementById('displayChatUser').innerHTML = '';
                    getDataChat(getDataHistoryChat);
                    document.getElementById('chatInputText').value = '';
                }
            });

            //Load Data Text into DisplayChat ->    
            function getDataHistoryChat(ObjectDataChatNow, KeyDataChatNow) {
                //Clear Data Display
                document.getElementById('displayChatUser').innerHTML = '';
                //Write Data Display
                //console.log(KeyDataChatNow);
                let count = 0;
                var fullTextMessData = [];
                var yourMess = 0;
                while(count < KeyDataChatNow.length) {
                    fullTextMessData.push(ObjectDataChatNow[KeyDataChatNow[count]]);
                    //console.log(fullTextChatData[count].email);
                    //console.log(fullTextMessData[count].value);
                    const newMess = document.createElement("div");
                    newMess.id = `${KeyDataChatNow[count]}`;
                    newMess.className = `${fullTextMessData[count].userID}Class`;
                    newMess.innerHTML = `${fullTextMessData[count].email}:`;
                    document.getElementById('displayChatUser').appendChild(newMess);
                    if(fullTextMessData[count].userID == userLoginNow){
                        console.log(`${fullTextMessData[count].userID} == ${userLoginNow}`)
                        console.log(yourMess);
                        const collection = document.getElementsByClassName(`${userLoginNow}Class`);
                        for(let i=0; i<collection.length; i++) {
                            collection[i].style.alignSelf = "flex-end";
                            collection[i].style.backgroundImage = "linear-gradient(to right, var(--test-color), var(--main-color-2))";
                            collection[i].style.borderRight = "2px solid var(--main-color-1)";
                            collection[i].style.borderLeft = "unset";
                        };
                        yourMess = yourMess+1;
                    }
                    const br = document.createElement('br');
                    document.getElementById(`${KeyDataChatNow[count]}`).appendChild(br);
                    const newMessvalue = document.createElement("span");
                    newMessvalue.innerHTML = fullTextMessData[count].value;
                    document.getElementById(`${KeyDataChatNow[count]}`).appendChild(newMessvalue);
                    const newTime = document.createElement("span");
                    newTime.id = `${KeyDataChatNow[count]}idTime`;
                    newTime.innerHTML = fullTextMessData[count].time;
                    document.getElementById(`displayChatUser`).appendChild(newTime);
                    //document.getElementById(localKeyDataChatNow[count]).remove();
                    count++;
                }
                scrollToBotMessage();
                //console.log(fullTextMessData);
                //console.log('load Data Chat!')
            };
        };
        loadinfoUser();
    //Login == false --> alert and logOut
    } else {
        alert('User is signed out');
        function offlineState() {
            const db = getDatabase();
            const updates = {};
            updates['/usersList/' + `${userLoginNow}/onlineState`] = '0';
            return update(ref(db), updates);
        };
        offlineState();
        window.location.href = './loginPage.html';
    }
})
//Call function Event LogOut <Click>
loginOut();
//Call function Event CreateRoom <Click>
createRoomChat();
//Call function Event JoinRoom <Click>
joinRoomChat();



   
//myFunction

//scroll to bottom data chat
function scrollToBotMessage () {
    const theElement = document.getElementById('displayChatUser');
    const scrollToBottom = (node) => {
        node.scrollTop = node.scrollHeight;
    }
    //console.log('it working!!')
    scrollToBottom(theElement);
}

//coppy id room to share

coppyInviteID.addEventListener('click',(e) => {
    var IdToShare = document.getElementById('inviteID').innerHTML;
    if(IdToShare != 'ID to invite will be span here!') {
        navigator.clipboard.writeText(IdToShare);
        document.getElementById('getIDSuccess').style.display = 'block';
    } else {
        alert('Create your room before copy!')
    }
});

//updateListMember-Room 

function updateListMemberRoomChat() {
    var dataMemberNow = dataRoomChatObject[YourRIdChoice].listMember;
    var keys = Object.keys(dataMemberNow);
    let count = 0;
    document.getElementById('listMemberDisplay').innerHTML = '';
    while(count < keys.length) {
        var emailMember = dataMemberNow[keys[count]];
        const memberSpan = document.createElement("span");
        memberSpan.id = `${dataMemberNow[keys[count]]}idMember`
        memberSpan.innerHTML = emailMember;
        document.getElementById('listMemberDisplay').appendChild(memberSpan);
        count++;
    };
}
// auto Fill the fist Room (Login and After Create Room)
// function autofillTheFistRoom() {
//     if(YourRIdChoice = '') {
//         document.getElementById(listRoomUserJoinID[0]).style.backgroundColor = 'var(--main-color-2)';
//         YourRIdChoice = listRoomUserJoinID[0];
//     }
// }
