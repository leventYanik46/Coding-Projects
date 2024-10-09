function convertToRoman(num) {
    let one='I';
    let four='IV';
    let five='V';
    let nine='IX';
    let ten='X';
    let forty='XL';
    let fifty='L';
    let ninty='XC';
    let hundred='C';
    let fourHundred='CD';
   let fiveHundred='D';
   let nineHundred='CM';
   let thousand='M'; 
   let product='';
   
   while(num>=1000){
   
     product+=thousand;
     num-=1000;
   }
   while(num>=900){
   
   product+=nineHundred;
     num-=900;
   
   }
   while(num>=500){
   
   product+=fiveHundred;
     num-=500;
     
   }
   while(num>=400){
   
   product+=fourHundred;
     num-=400;
   }
   while(num>=100){
   product+=hundred;
     num-=100;
   
   }
   while(num>=90){
   product+=ninty;
     num-=90;
   }
   while(num>=50){
   
     product+=fifty;
     num-=50;
   }
   while(num>=40){
   product+=forty;
     num-=40;
   
   }
   while(num>=10){
   product+=ten;
     num-=10;
   
   }while(num>=9){
   product+=nine;
     num-=9;
   }
   while(num>=5){
   
   product+=five;
     num-=5;
   
   }while(num>=4){
   
   product+=four;
     num-=4;
   
   }while(num>=1){
   
   product+=one;
     num-=1;
   
   }
   
   console.log(product);
   
    return product;
   }
   
   convertToRoman(36);