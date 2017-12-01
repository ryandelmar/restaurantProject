var namesArray =[];

function addNames() {
  namesArray.push(document.getElementById('names').value);
  document.getElementById('names').value = "";
}

function allDone() {
  var a = JSON.stringify(namesArray);
  localStorage.setItem('list',a);
  location.href="shownames.html";
}

function shownames() {
    var b = JSON.parse(localStorage.getItem('list'));
    document.getElementById('showAll').innerHTML = b[1];
}

function nuke() {
  localStorage.clear();
  window.alert("I killed all names");
}
