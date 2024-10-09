let price = 19.5;
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
const purchaseBtn = document.getElementById('purchase-btn');
const priceInput = document.getElementById('cash');
const result = document.getElementById('change-due');
const priceSign = document.getElementById('price');
const numBtn = document.querySelectorAll('.num');
const deleteBtn = document.getElementById('delete-btn');
const clearBtn = document.getElementById('clear-btn');

// Add event listener to delete button
clearBtn.addEventListener('click', () => {
    // Remove the last character from the priceInput value
    priceInput.value = '';
});
// Add event listener to delete button
deleteBtn.addEventListener('click', () => {
    // Remove the last character from the priceInput value
    priceInput.value = priceInput.value.slice(0, -1);
});
priceSign.textContent = 'price ' + price;

numBtn.forEach(button => {
    button.addEventListener('click', () => {
        // Append the button's text (1-9) to the priceInput value
        priceInput.value += button.textContent;
    });
});
purchaseBtn.addEventListener('click', () => {
    checkCashRegister(price, parseFloat(priceInput.value), cid);

});
const updateResult = (obj) => {
    let changeStrArr=[];
    // Loop through the change array and format each denomination
    for (let i of obj.change) {
        if(i[1]){
            changeStrArr.push(i[0] + ": $" + i[1]);
        }
         // Push each formatted string into the array
    }
    
    // Join the array into a single string with ', ' as a separator
    let changeStr = changeStrArr.join(' ');
    //console.log(changeStr)
    //console.log('Status: ' + obj.status);
  result.innerHTML= 'Status: ' + obj.status + ' '+changeStr;
}
const checkCashRegister = (price, cash, cid) => {
    if (price > cash) {
        alert('Customer does not have enough money to purchase the item');
    } else if (price === cash) {
        result.textContent = 'No change due - customer paid with exact cash';
    } else {
        let change = cash - price;
        let sum = 0;
        let count = 0;
        const bills = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

        // Calculate total money in the cash drawer
        for (let i in cid) {
            sum += cid[i][1];
            
        }
        
        // Check if there's enough money in the drawer
        if (change > sum.toFixed(2)) {
            result.textContent = 'Status: INSUFFICIENT_FUNDS';
        } else if (change === sum) {
            updateResult({status: "CLOSED", change: cid});
        } else {
            let changeArr = [];

            // Iterate through the cash drawer from highest to lowest
            for (let i = cid.length - 1; i >= 0; i--) {
                while (change >= bills[i] && cid[i][1] >= bills[i]) {
                    change = (change - bills[i]).toFixed(2);
                    cid[i][1] = (cid[i][1] - bills[i]).toFixed(2);
                    count++;
                }

                if (count > 0) {
                    const value = (count * bills[i]).toFixed(2); // Handle floating-point precision
                    changeArr.push([cid[i][0], value]);
                    count = 0;
                }
            }

            // Log the correct changeArr
            
            // Check if change is very close to zero (to handle precision issues)
            if (change < 0.01) {
              console.log(cid)
              updateResult( {status: "OPEN", change: changeArr});
            }
        }
    }
};