//Daniel Kenny 19/08/19
//Examples of ways to check if a string is a valid palindrone


// Checks if string is valid palindrone by reversing the string and comparing with an if
function isPal1(str){
 const revString = str.split('').reverse().join('');

 if(str === revString){
   return true;
 }else{
   return false;
 }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
// Checks if string is valid palindrone by reversing the string and comparing without an if
function isPal2(str){
  const revString = str.split('').reverse().join('');
 
 return revString === str;
 }

/////////////////////////////////////////////////////////////////////////////////////////////////


let myString1 = "racecar";
console.log(isPal1(myString1));

console.log(isPal2(myString1));