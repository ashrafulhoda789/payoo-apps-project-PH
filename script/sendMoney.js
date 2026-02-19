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

            const time = showTime();

            newHistory.innerHTML = `
                <div class="flex justify-between items-center bg-white p-5 rounded-2xl shadow-sm">
                    <div class="flex gap-4 items-center">
                        <div class="bg-neutral-300/50 w-[50px] h-[50px] rounded-full flex justify-center items-center">
                            <img src="assets/opt-3.png" alt="">
                        </div>
                        <div>
                            <h1>Send Money</h1>
                            <p>${time}</p>
                        </div>
                    </div>
                    <div>
                        <span class="cursor-pointer btn rounded-full bg-neutral-50/5 border-none "><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </div>
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