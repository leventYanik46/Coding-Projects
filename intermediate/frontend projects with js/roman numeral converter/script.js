const input=document.getElementById('number');
const result=document.getElementById('output');
const submitButton=document.getElementById('convert-btn');

submitButton.addEventListener('click', () => {

if(!input.value){
  result.innerText="Please enter a valid number";
  return;
}else if(input.value<1){
  result.innerText="Please enter a number greater than or equal to 1";
  return;
}else if(input.value>=4000){
 result.innerText="Please enter a number less than or equal to 3999";
  return;
}else{

  let romanNumeral='';
  let value=input.value;
  
    while(value>=1000){
      romanNumeral+='M';
      value-=1000;
    }while(value>=900){
      romanNumeral+='CM';
      value-=900;
    }while(value>=500){
      romanNumeral+='D';
      value-=500;
    }while(value>=400){
      romanNumeral+='CD';
      value-=400;
    }while(value>=100){
      romanNumeral+='C';
      value-=100;
    }while(value>=90){
      romanNumeral+='XC';
      value-=90;
    }while(value>=50){
      romanNumeral+='L';
      value-=50;
    }while(value>=40){
      romanNumeral+='XL';
      value-=40;
    }while(value>=10){
      romanNumeral+='X';
      value-=10;
    }while(value>=9){
      romanNumeral+='IX';
      value-=9;
    }while(value>=5){
      romanNumeral+='V';
      value-=5;
    }while(value>=4){
      romanNumeral+='IV';
      value-=4;
    }while(value>=1){
      romanNumeral+='I';
      value-=1;
    }
result.innerText=romanNumeral;    
}

});