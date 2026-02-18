document.getElementById('add-money-btn').addEventListener('click',
    function(){
        // 1- bank account
        const bankAccount = getValueFromInput('add-money-bank');

        if(bankAccount == 'Select a Bank'){
            alert("Please Select a Bank!");
            return;
        }

        // 2- get bank account number
        const accno = getValueFromInput('add-money-number');
        if(accno.length != 11){
            alert("Invalid Bank account Number");
            return
        }

        // 3- get ammount
        const amount = getValueFromInput('add-money-amount');

        const newBalance = getBalance() + Number(amount);
        
        const pin = getValueFromInput('add-money-pin');
        if(pin === '1234'){
            alert(`Add Money Success from ${bankAccount} at ${new Date()}`);
            setBalance(newBalance);
        }
        else{
            alert("Invalid Pin");
            return;
        }

    }
)