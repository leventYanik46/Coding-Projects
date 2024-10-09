function telephoneCheck(str) {
let test=str.split(/\s*/).join('');
 let justNumbers=true; 
 let nonNumberPosition=[];
 let regex=/^1\d{3}-\d{3}-\d{4}|^1\(\d{3}\)\d{3}-\d{4}|^1\(\d{3}\)\d{3}-\d{4}|^1\(\d{3}\)\d{7}|^1\d{3}-\d{3}-\d{4}|^\(\d{3}\)\d{3}-\d{4}|^\d{3}-\d{3}-\d{4}|^1\d{10}|^\d{10}$/;
console.log(test);
console.log(regex.test(test));

if(regex.test(test)){


  return true
}
 
  return false;
}
