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

            // 1- history container ke show kore asbo
            const history = document.getElementById('history-container');
            // 2- new div create korbo
            const newHistory = document.createElement('div');

            // 3- new div  e innerHTML add korbo
            newHistory.innerHTML = `
                <div class="transaction-card p-5 bg-base-100">
                    Add Money Success from ${bankAccount}, account no- ${accno} at ${new Date()}
                </div>
            `
            // 4- history container e new div append korbo
            history.append(newHistory);
        }
        else{
            alert("Invalid Pin");
            return;
        }

    }
)