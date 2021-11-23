var ePicture = null;

function getPictureElement(){
if(ePicture == null){
ePicture = document.getElementById('ePicture');
}
}

function getSingle(){
getPictureElement();
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
const animalObj = JSON.parse(this.responseText);
let jGet = document.getElementById('jGet');
jGet.innerHTML =  "The number of "+animalObj.name;
jGet.innerHTML += " near "+animalObj.region;
jGet.innerHTML += " is approximately "+animalObj.pop+".";
ePicture.src = animalObj.image;
}
xmlhttp.open("GET", "json-server.php");
xmlhttp.send();
}

function getAnimalInfo(a){
getPictureElement();
const dbParam = JSON.stringify(a);
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
const animalObj = JSON.parse(this.responseText);
let jSend = document.getElementById('jSend');
let name = animalObj.name;
if(name == "Prairie Dog"){
jSend.innerHTML =  "The number of Prairie Dogs";
jSend.innerHTML += " living on "+animalObj.region;
}
else if (name == "Mountain Lion"){
jSend.innerHTML =  "The number of Mountain Lions";
jSend.innerHTML += " near "+animalObj.region;
}
else{
jSend.innerHTML =  "The number of "+animalObj.name;
jSend.innerHTML += " near "+animalObj.region;
}

let pop = animalObj.pop;
if (pop != 0){
jSend.innerHTML += " is approximately "+pop+".";
}
else{
jSend.innerHTML += " is unknown.";
}

ePicture.src = "assets/"+animalObj.image;
}
xmlhttp.open("GET", "animals-json-sd.php?"+a);
xmlhttp.send();
}

function getAnimal(n) { 
var s = document.getElementById(n).value; 
getAnimalInfo(s); 
}
