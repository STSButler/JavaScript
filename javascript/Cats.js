"use strict";

class Cat {
constructor(breed, behavior) {
this.breed = breed;
this.behavior = behavior;
this.element = null;
}
 
showInfo() { 
let s = this.breed+','+this.behavior; 
return s.toString();
}
 
showType() { 
let s = '<br />Type: ' + typeof this; 
return s.toString();
} 
 
showInfoType(sId){
this.element  = document.getElementById(sId);
this.element.innerHTML = this.showInfo();
this.element.innerHTML += this.showType();
}
}

class CatWild extends Cat {
	
constructor(breed, behavior, region) {
// Call parent, Cat,
// class constructor.
super(breed, behavior);
this.region = region;
}
 
showInfoTypeRegion(sId) {
// The parent 'Cat' class
// includes public methods
// and elements. 
// You can access them in this
// child class.
this.showInfoType(sId);
this.element.innerHTML += '<br />Region: '+this.region; 
}
 
}

class CatHybrid extends Cat{
	
constructor(breed, behavior, wildtype) {
// Call parent, Cat,
// class constructor.
super(breed, behavior);
this.wildtype = wildtype;
}

get qualities() {
return this.catQualities;
}

set qualities(d) {
this.catQualities = d;
}

// You can get
// but cannot set
// oddity.
get oddity() {
return this.catOddity;
}
	
assignReadOnly(){
Object.defineProperty(this, "personality", {
value: " Awesome",
writable: false
});
}

assignWriteable(){
Object.defineProperty(this, "personality", {
value: " Awesome",
writable: true
});
}

showInfoTypeHybrid(sId) {
this.showInfoType(sId);
this.element.innerHTML += '<br>Wild Cat: '+this.wildtype;

if(this.oddity != null){
this.element.innerHTML += '<br>Oddity:'+this.oddity;
}
else{
this.element.innerHTML +="<br>Oddity was not assigned.";
}

if(this.personality != null){
this.element.innerHTML += '<br>Personality:'+this.personality;
}
else{
this.element.innerHTML +="<br>Personality was not assigned.";
}

if (this.catQualities != null){
this.element.innerHTML +='<br>Qualities: '+this.catQualities;
}
}

static description() {
let s = "A hybrid cat is a domestic feline crossbred with a wild cat." 
return s + " TypeOf: " + typeof CatHybrid;
}

}