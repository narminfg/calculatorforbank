function Calculator(){
    var input1=document.getElementById('credit_amount').value;
    var input2=document.getElementById('time').value;
    var input3=document.getElementById('percent').value;

    var creditVal=Number(input1)
    var timeVal=Number(input2)
    var percentVal=Number(input3)

   
    document.getElementById('total_amount').innerHTML=(creditVal*percentVal/100)+creditVal;
    document.getElementById('montly_payment').innerHTML=((creditVal*percentVal/100)+creditVal)/timeVal
}


