function telephoneCheck(str) {
    let test=str.split(/\s*/).join('');
    let test1=str.split(/\W/).join('');
    let justNumbers=true; 
    let nonNumberPosition=[];
    let regex=/^1\(\d{3}\)\d{3}-\d{4}|^1\(\d{3}\)\d{7}|^1\d{3}-\d{3}-\d{4}/;
    let regex1=/^\(\d{3}\)\d{3}-\d{4}|^\(\d{3}\)\d{7}|^\d{3}-\d{3}-\d{4}/;
   
    for(let i =0; i<test.length;i++){
   
   if(!/\d/.test(test[i])){
   
   justNumbers=false;
   nonNumberPosition.push(i);
   
    }
   
   }
   
   //console.log(test);
   
   //console.log(justNumbers);
   
   if(!justNumbers){
   
   if(str[0]==='1'&&test1.length==11&&regex.test(test)){
   
   return true;
   
   }else if(test1.length==10&&regex1.test(test)){
   
   console.log(test);
   console.log(regex1.test(test));
   
   return true;
   
   }
   
   
   
   }
   
    if(str[0]==='1'&&test.length==11&&justNumbers){
   
   return true;
   
    }else if(test.length==10&&justNumbers){
   
   return true
   
   
    }
    
    
     return false;
   }
   
   
   telephoneCheck("(555-555-5555");