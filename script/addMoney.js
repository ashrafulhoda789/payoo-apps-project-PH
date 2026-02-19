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
            const time = showTime();

            const noTransac = document.getElementById('no-transaction');
            noTransac.style.display = 'none';

            // 3- new div  e innerHTML add korbo
            newHistory.innerHTML = `
                <div class="flex justify-between items-center bg-white p-5 rounded-2xl shadow-sm">
                    <div class="flex gap-4 items-center">
                        <div class="bg-neutral-300/50 w-[50px] h-[50px] rounded-full flex justify-center items-center">
                            <img src="assets/opt-1.png" alt="">
                        </div>
                        <div>
                            <h1>Add Money</h1>
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
            alert("Invalid Pin \n Demo pin: 1234");
            return;
        }

    }
)