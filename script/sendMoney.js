document.getElementById('send-money-btn').addEventListener('click',
    function(){
        const sendMoneyNumber = getValueFromInput('send-money-number');
        if(sendMoneyNumber.length != 11){
            alert("Invalid Number!");
            return;
        }

        const amount = getValueFromInput('send-money-amount');

        const currentBalance = getBalance();
        const newBalance = currentBalance - Number(amount);

        if(newBalance < 0){
            alert("Amount is Low!");
            return;
        }

        const pin = getValueFromInput('send-money-pin');
        if(pin === '1234'){
            alert(`Send Money Success to ${sendMoneyNumber} at ${new Date()}`);
            setBalance(newBalance);
            
            const histoy = document.getElementById('history-container');
            const newHistory = document.createElement('div');

            newHistory.innerHTML = `
                <div class="transaction-card p-5 bg-base-100">
                    Send Money Success from ${sendMoneyNumber} at ${new Date()}
                </div>
            `;

            histoy.append(newHistory);

        }
        else{
            alert("Wrong Pin!");
            return;
        }
    }
)