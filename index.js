const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelector(".no-of-notes");

checkButton.addEventListener("click",function validateBillAndCashAmount(){
     message.style.display = "none";
     if(billAmount.value>0){
         if(cashGiven.value >= billAmount.value){
           const amountToBeReturned = cashGiven.value - billAmount.value;

         }else{
            
                showMessage("Do You wanna wash plates ?");

         }
     }else{
         "Invalid Bill Amount"
     }
})