const firebaseConfig = {
    apiKey: "AIzaSyBAIXbtawFT5oCmiD1B0pS4Mbrks_fgIvg",
    authDomain: "chat-1523f.firebaseapp.com",
    databaseURL: "https://chat-1523f-default-rtdb.firebaseio.com",
    projectId: "chat-1523f",
    storageBucket: "chat-1523f.appspot.com",
    messagingSenderId: "611118921366",
    appId: "1:611118921366:web:1309a609dc22179e5c74b7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  roomName=localStorage.getItem("RoomName")
document.getElementById("roomName").innerHTML= roomName

function logout() {
  localStorage.removeItem("username")
  localStorage.removeItem("RoomName")
  window.location = "login.html"
}

function sound(){
document.getElementById("sound").play()
}

function send(){
  message= document.getElementById("message").value
  console.log(message)
}