const firebaseConfig = {
    apiKey: "AIzaSyAcJoutwha0uSKPkovQcPxbuxGuchugG6I",
    authDomain: "vamosconversardb.firebaseapp.com",
    databaseURL: "https://vamosconversardb-default-rtdb.firebaseio.com",
    projectId: "vamosconversardb",
    storageBucket: "vamosconversardb.appspot.com",
    messagingSenderId: "491859030837",
    appId: "1:491859030837:web:385329d6d0e6a8b153527c"
  };
  firebase.initializeApp(firebaseConfig);
  user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML= "Bem-Vindo " + user_name + "!";
function addRoom()
{
  roomName=document.getElementById("roomName").value;
  firebase.database().ref("/").child(roomName).update({
    purpose: "adding room name"
  });
  localStorage.setItem("roomName", roomName);
  window.location= "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("roomName", name);
 window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("roomName");
  window.location= "index.html";
}

