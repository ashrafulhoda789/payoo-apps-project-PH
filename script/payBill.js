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

            const time = showTime();

            // 3- new div  e innerHTML add korbo
            newHistory.innerHTML = `
                <div class="flex justify-between items-center bg-white p-5 rounded-2xl shadow-sm">
                    <div class="flex gap-4 items-center">
                        <div class="bg-neutral-300/50 w-[50px] h-[50px] rounded-full flex justify-center items-center">
                            <img src="assets/opt-5.png" alt="">
                        </div>
                        <div>
                            <h1>Pay Bill</h1>
                            <p>${time}</p>
                        </div>
                    </div>
                    <div>
                        <span class="cursor-pointer btn rounded-full bg-neutral-50/5 border-none "><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </div>
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