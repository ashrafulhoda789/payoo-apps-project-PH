document.getElementById('get-bonus-btn').addEventListener('click',
    function(){
        const coupon = getValueFromInput('get-bonus-coupon');

        if(coupon === '1234'){
            alert('Applied Your coupon Succesfully');
        }
    }
)