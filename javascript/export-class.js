class expClass {
	
static fLog = function(val) {
console.log('expClass.fLog()');
console.log('val'); 
console.log(val); 
};

static fBtnText = function() {
let btnTxt = document.getElementById('btnTxt');
btnTxt.innerHTML = "Button Tapped!";
window.location="#btnTxt";
};

};

export { expClass }