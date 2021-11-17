// Arrow function
// Multiplies a series
// of numbers in an array.
const fReduceMultiply = (prev, curr) => prev * curr;

function fTemplate(){
let sBreed = "Savannah";
let sType = "Cat";
let text = `Animal: ${sBreed}, ${sType}.`;
return text;
}

function fTempExp(){
let start = 22;
let growth = 1.25;

let final = `Final: ${(start * growth).toFixed(2)}`;
return final;
}

function processFactorial(nValue,nOutput){
eValue = document.getElementById(nValue);
eOutput = document.getElementById(nOutput);
n = factorialN(parseInt(eValue.innerHTML));
eOutput.innerHTML = n;
}

/**
 * Factorial equals the
 * product of a series of numbers.
 * 1 * 2 * 3 * 4
 */
const factorial = (function () 
{
 let f = 1;
 let r = 1;
 return function () 
 { 
  console.log("f: "+f+ ", r:"+r);
  console.log("f * r: " +f * r);
  r = f * r;
  f += 1; 
  return r;
 }
}
)();

/**
 * Factorial equals the
 * product of a series of numbers.
 * 1 * 2 * 3 * 4
 */
const factorialN = (function (n) 
{
let f = 1;
let r = 1;
return function (n) 
{ 
for (var i = 0; i < n; i++){
console.log("f: "+f+ ", r:"+r);
console.log("f * r: " +f * r);
r = f * r;
f += 1; 
}
return r;
}
}
)();


function displayInfo(sInfo){
 document.getElementById('eDebug').innerHTML = sInfo;
}

var promiseButton = new Promise(function(resolveOK, resolveError) {
  let req = new XMLHttpRequest();
  req.open('GET', "assets/ss-promise-got.html");
  req.onload = function() {
    if (req.status == 200) {
      resolveOK(req.response);
    } else {
      rejectError("File not Found");
    }
  };
  req.send();
});

function promiseCall(){
promiseButton.then(
function(value) {displayInfo(value);},
function(error) {displayInfo(error);}
)
}

//Normal
fNormal = function() {
btnNormalTxt = document.getElementById("btnNormalTxt");
btnNormalTxt.innerHTML = this;
}
document.getElementById("btnNormal").addEventListener(
"click", 
fNormal
); 

// Arrow
fArrow = () => {
btnArrowTxt = document.getElementById("btnArrowTxt");
btnArrowTxt.innerHTML = this;
}
document.getElementById("btnArrow").addEventListener(
"click", 
fArrow
);

function fRest(p1, p2, ...aryMore) {
let eRest = document.getElementById('idRest');
eRest.innerHTML = "p1: "+p1+"<br>p2:"+p2+"<br>aryMore:"+aryMore+",";
}

function fReduce(){
	
let eReduce = document.getElementById('idReduce');

let aryOneToFour = [1, 2, 3, 4];

//1 * 2 * 3 * 4 = 24.
eReduce.innerHTML = aryOneToFour.reduce(fReduceMultiply);
eReduce.innerHTML += "<br >";

//5 * 1 * 2 * 3 * 4 = 120.
eReduce.innerHTML += aryOneToFour.reduce(fReduceMultiply, 5);
}


function fMult(...aryArgs) {
return aryArgs.reduce(fReduceMultiply);
}

function fSum(...aryArgs) {
 return aryArgs.reduce((previous, current) => {
   return previous + current;
 });
}