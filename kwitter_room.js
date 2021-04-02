 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAdwd8-BN2gwOSG8Uf-lb-Ig9ukMMC1Aho",
      authDomain: "chat-app-bbce4.firebaseapp.com",
      databaseURL: "https://chat-app-bbce4.firebaseio.com",
      projectId: "chat-app-bbce4",
      storageBucket: "chat-app-bbce4.appspot.com",
      messagingSenderId: "959717571868",
      appId: "1:959717571868:web:8d606a5065680108304ed9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+ user_name;

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});
      window.location = "kwitter_page.html"
}
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id= "+Room_names+" onclick='redirectToRoomname(this.id)'># "+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_room.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}