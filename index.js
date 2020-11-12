// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// const str = " hello";
// let newStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   newStr += str[i];
// }
// console.log(newStr);

// const msg = "Hello im learning to be a web developer";
// const newstr = msg.split(" ").reverse().join().replace(/,/g, " ");

// console.log(newstr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= max) {
//     max = arr[i];
//    console.log('setting max to ' + max);
//   }
// }
// console.log(max);
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] <= min) {
//     min = arr[i];
//    console.log('setting min to ' + min);
//   }
// }
// console.log(min);


function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}
reverseString('hello');


// function reverseSentence(sentence) {
//   const words = sentence.split(" ");
//   const reversed = words.reverse();
//   const result = reversed.join(" ");
//   return result;
// }



var reverseWords = function(sentence){

	var words = sentence.split(" ").reverse(); 
	var string = "";
	for(word in words)
		string += (word > 0 ? " " : "") + words[word]; 
	return string;
	
}
reverseWords('I am learning to be a web developer')



var myArray = ["a", "b", "c", "d", "e", "f"];
es5
myArray.push("end")
myArray.unshift("start")
es6
myArray = ["start",...myArray,"end"]



// how do you create a private variable in javascript

function secretVariable() {
  var private = "super secret code"
  return funciton(){
    return private
  }
}
var getSecretVariable = secretVariable()
console.log(getSecretVariable())

// what is the output?

var num = 4;
function outer() {
  var num = 2
  function inner() {
    num++;
    var num = 3;
    console.log(num);
  }
  inner()
}
outer()
// 3

// what is the output 
console.log(typeof typeof 1);
// return as string


// output
var hero = {
  _name : 'John Doe',
  getSecretIdentity : function (){
    return this._name;

  }

};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity)

// john doe



const profile = {
  firstName : "",
  lastName : "",
  setName: function(name){
    // let splitname = function(name){    =(n) => {}

    }
  }
}

var arr = [1, 2, 3, 4, 2, 5, 4, 7, 5, 9, 9, 8, 3];
function checkDuplicate(arr) {
  var firstArr = [];
  var duplicateArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!firstArr.includes(element)) {
      firstArr.push(element);
    } else {
      duplicateArr.push(element);
    }
  }
  console.log("duplicate", duplicateArr);
  return duplicateArr;
}
checkDuplicate(arr);



function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
  return true;
 }
 palindrome("eye");


 const fibnumb = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    const s = fibnumb(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibnumb(4));
