function user() {
  var user = document.getElementById('userForm').value;
  alert(user);
}

var userArr = [];

function addUser(user) {
  userArr.push(user);
    console.log("name: " + userArr.join(","));
}
