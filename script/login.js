document.getElementById('login-btn').addEventListener('click',
    function(){
        //1- get the mobile number input
        const numberInput = document.getElementById('input-number');
        const contactNumber = numberInput.value;
        // console.log(contactNumber);

        //2- get the pin
        const inputPin = document.getElementById('input-pin');
        const pin = inputPin.value;
        // console.log(pin);

        //3- match pin and mobile number
        if(contactNumber === "01218299406" && pin === '1234'){
            // 3-1 true:::>> alert > homepage 
            alert("Login Successfull");
            // window.location.replace("/home.html")
            window.location.assign("home.html");
        }else{
            // 3-1 false:::>> alert > return 
            alert("Login Failed \nDemo Pin: 1234");
            return;
        }
        
       
    }
)
