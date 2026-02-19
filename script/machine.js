// machine id -> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    // console.log(id , value);
    return value;
}

// machine -> balance
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    
    return Number(balance);
}

// machine : Value -> set balance
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

// machine id > hide all > show id
function showOnly(id){
    
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cashout');
    const history = document.getElementById('history');
    // console.log(`Add money- ${addMoney} , cashout- ${cashOut}`);

    // Hide All
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    history.classList.add("hidden");

    // Show the element of id's
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

}