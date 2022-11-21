const firebaseConfig = {
    apiKey: "AIzaSyAKlNJuYe_GySGuQrX9Dq0qmjvBFG-gEwc",
    authDomain: "kwitterdb-ef90a.firebaseapp.com",
    databaseURL: "https://kwitterdb-ef90a-default-rtdb.firebaseio.com",
    projectId: "kwitterdb-ef90a",
    storageBucket: "kwitterdb-ef90a.appspot.com",
    messagingSenderId: "1099410723496",
    appId: "1:1099410723496:web:36d56f4abeeb3dd50ba89d"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("roomName");
function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
     console.log(firebase_message_id);
       console.log(message_data);
       name = message_data['name'];
       message = message_data['message'];
     like = message_data['like'];
     name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
     message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
     likeButton="<button class='btn btn-warning' id="+ firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+ like +"</span></button><hr>";
// Fazer o botão de like
// Fazer o ícone de like

    row =name_with_tag+message_with_tag+likeButton+span_with_tag;
    document.getElementById("output").innerHTML+=row //Juntar tudo na variável   
    // Colocar a variável row no html
//End code
  } });  }); }
getData();

function updateLike(message_id)
{
console.log("clicked on like button - " + message_id);
button_id = message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+ 1;
//Variável para o número atual de likes
// Variável que vai armazenar o número de likes incrementado
console.log(updated_likes);

// Firebase
firebase.database().ref(room_name).child(message_id).update({
  like: updated_likes
});

}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("roomName");
  window.location.replace("index.html");
}