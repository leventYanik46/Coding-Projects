const input=document.getElementById('user-input');
const result=document.getElementById('results-div');
const checkBtn=document.getElementById('check-btn');
const clearBtn=document.getElementById('clear-btn');
const regex=/^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

checkBtn.addEventListener('click', () => {

if(!input.value){
  alert("Please provide a phone number");
}else if(input.value.match(regex)){

    result.innerText='Valid US number: ' + input.value;


  }else{
    result.innerText='Invalid US number: ' + input.value;
  }
})



clearBtn.addEventListener('click', () => {
    result.innerText='';
})