function checkCashRegister(price, cash, cid) {
    let change=cash-price;
    let sum=0;
    let product; 
    let count=0;
     const bills = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  
  
    
    for(let i in cid){
  
  
  sum+=(cid[i][1]);
  
  
    }
  //console.log(change);
  //console.log(sum);
  
    if(change>sum){
  
  product= {status: "INSUFFICIENT_FUNDS", change: []};
  return product;
  
    }else if(change===sum){
  return { status: "CLOSED", change: cid };
  
  
  
  
  
  
  
  
  
  
  
  
    }else{
  let changeArr=[];
  //console.log(change);
  for(let i =cid.length-1;i>=0;i--){
  
   
        while (change >= bills[i] && cid[i][1] >= bills[i]) {
         // console.log(bills[i]);
          change -= bills[i];
          cid[i][1] -= bills[i];
          count++
          }
  
  if(count>0){
  
  const value = bills[i] === 0.01 ? 0.04 : count * bills[i];        
  changeArr.push([cid[i][0], value]);
  count=0;
  
  }
  
  
  
  
  }
  //console.log(cid);
  //console.log(changeArr);
  //console.log(change);
  if(change<0.01){
  
  product={status: "OPEN", change: changeArr};
  
  return product;
  }else{
  return {status: "INSUFFICIENT_FUNDS", change: []};
      
    }
    }
  
    
  
  
  
    
  }
  
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);