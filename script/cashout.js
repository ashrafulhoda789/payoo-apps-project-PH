document.getElementById('cashout-btn').addEventListener('click',
    function(){
        const cashoutNumber = getValueFromInput('cashout-number');

        if(cashoutNumber.length != 11){
            alert("Invalid Agent Number!");
            return;
        }

        const cashoutAmount = getValueFromInput('cashout-amount');
        const currentBalance = getBalance();

        const newBalance = currentBalance - Number(cashoutAmount);
        if(newBalance < 0){
            alert("Invalid Amount");
            return;
        }

        const pin = getValueFromInput('cashout-pin');
        if(pin === '1234'){
            // 5-1 true: show and alert > set new balance
            alert("Cash Out successfull");
            setBalance(newBalance);
            // cashoutAmountInput.value = "";
            // cashoutPinInput.value = "";
        }
        else{
            // 5-2 false: show and error alert > return
            alert("Invalid Pin");
            return;
        }
    }
)

// document.getElementById('cashout-btn').addEventListener('click',
//     function(){
//         // 1- get the agent number & validate
//         const cashoutNumberInput = document.getElementById('cashout-number');
//         const cashoutNumber = cashoutNumberInput.value;
//         // console.log(cashoutNumber);
//         if(cashoutNumber.length != 11){
//             alert("Invalid Agent Number!");
//             return;
//         }

//         // 2- get the amount, validate, convert to number
//         const cashoutAmountInput = document.getElementById('cashout-amount');
//         const cashoutAmount = cashoutAmountInput.value;
//         // console.log(cashoutAmount);

//         // 3- get the current balance, validate, convert to number
//         const balanceElement = document.getElementById('balance');
//         const balance = balanceElement.innerText;
//         // console.log(balance);

//         // 4- Calculate new balance
//         const newBalance = Number(balance) - Number(cashoutAmount);

//         if(newBalance < 0){
//             alert("Invalid Amount");
//             return;
//         }
//         // console.log(newBalance);
//         // 5- get the pin and verify
//         const cashoutPinInput = document.getElementById('cashout-pin');
//         const pin = cashoutPinInput.value;

//         if(pin === '1234'){
//             // 5-1 true: show and alert > set new balance
//             alert("Cash Out successfull");
//             balanceElement.innerText = newBalance;
//             // cashoutAmountInput.value = "";
//             // cashoutPinInput.value = "";
//         }
//         else{
//             // 5-2 false: show and error alert > return
//             alert("Invalid Pin");
//             return;
//         }
        
       
//     }
// )

