function palindrome(str) {

 let regex=/\W|_/g;

 let removed=str.replace(regex,'');

let remLow=removed.toLowerCase();

let reversed='';

let isPalindrome=true; 



 //console.log(remLow);

for(let i=remLow.length-1;i>=0;i--){


reversed+=remLow[i];
  
}

let count=remLow.length-1;


for(let i=0;i<remLow.length;i++){

console.log(remLow[i]+' '+reversed[count]);

if(remLow[i]!==reversed[i]){

isPalindrome=false;
break;
}
count--;

}
//console.log(reversed);


  return isPalindrome;
}

palindrome("eye");
palindrome("A man, a plan, a canal. Panama");
palindrome("not a palindrome");
//palindrome("0_0 (: /-\ :) 0-0");
//palindrome("five|\_/|four");'}

palindrome("eye");