document.getElementById('pay-bill-btn').addEventListener('click', 
    function(){
        const bankAccount = getValueFromInput('pay-bill-bank');
        if(bankAccount === 'Select a Bank'){
            alert("Select a Bank First!");
            return;
        }

        const billerNumber = getValueFromInput('pay-bill-number');
        if(billerNumber.length != 11){
            alert("Invalid Number!");
            return;
        }

        const amount = getValueFromInput('pay-bill-amount');
        const currentBalance = getBalance();
        
        const newBalance = currentBalance - Number(amount);
        if(newBalance < 0){
            alert("Low Amount!");
            return;
        }

        const pin = getValueFromInput('pay-bill-pin');
        if(pin === '1234'){
            alert(`Pay Bill Success from ${billerNumber} at ${new Date()}`);
            setBalance(newBalance);

            // 1- history container ke show kore asbo
            const history = document.getElementById('history-container');
            // 2- new div create korbo
            const newHistory = document.createElement('div');

            // 3- new div  e innerHTML add korbo
            newHistory.innerHTML = `
                <div class="transaction-card p-5 bg-base-100">
                    Pay Bill Success from ${billerNumber} at ${new Date()}
                </div>
            `
            // 4- history container e new div append korbo
            history.append(newHistory);
        }
        else{
            alert("Wrong Pin!");
            return;
        }
    }
)