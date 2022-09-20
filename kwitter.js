var firebaseConfig = {
    apiKey: "AIzaSyDKkrG4jIBQ0RcnKdfNQyTpj0IjF9iid-o",
    authDomain: "kwitter-redecorated-d19e1.firebaseapp.com",
    databaseURL: "https://kwitter-redecorated-d19e1-default-rtdb.firebaseio.com",
    projectId: "kwitter-redecorated-d19e1",
    storageBucket: "kwitter-redecorated-d19e1.appspot.com",
    messagingSenderId: "992904222090",
    appId: "1:992904222090:web:c8cadb44ddf9cab1c6a473"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username=localstorage.getItem("Input1");
  document.getElementById("h2").innerHTML="welcome" + username + "!";

  function addcon(){
    conname=document.getElementById("conversationinput").value;
    firebase.database().ref("/").child(conname).update({
        purpose  : "to converse"
  });
  localStorage.setItem("conname" , conname);
  window.location="kwitterpage.html";
  
  }









  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+ Room_names+"onclick='redirecttoroomname(this.id)'> #"+ Room_names + "</div><hr> ";
document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();


function redirecttoroomname(name){
    console.log(name);
      localStorage.setItem('conname' ,name);
      window.location='kwitter_page.html';
}

