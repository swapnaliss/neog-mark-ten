const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const output = document.querySelector("#output");
var nextButton = document.querySelector("#btn-next");
var first = document.querySelector("#first");
var second = document.querySelector("#second");
var third = document.querySelector("#third");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener("click", nextHandler);

function nextHandler() {
  if (Number(billAmount.value) > 0) {
    message.style.display = "none";
    nextButton.style.display = "none";
    second.style.display = "block";
  } else {
    showMessage("Enter valid amount");
  }
}

function validateBillAndCashAmount() {
  hideMessage();
  clearNoOfNotes();
  var input1 = Number(billAmount.value);
  var input2 = Number(cashGiven.value);
  var count2000 = 0;
  var count500 = 0;
  var count100 = 0;
  var count20 = 0;
  var count10 = 0;
  var count5 = 0;
  var count1 = 0;
  var x;
  var result = input2 - input1;
  if (!billAmount.value || !cashGiven.value) {
    showMessage("Enter valid amount for both the entries!");
  } else if (result < 0) {
    showMessage("cash amount entered is less than bill amount!!");
  } else if (result == 0) {
    showMessage("Bill settled. Nothing to be returned");
  } else if (Number(input1) <= 0) {
    showMessage("Enter valid bill amount!");
  } else {
    // calculating no. of notes

    for (i = result; i >= 0; i = i - x) {
      if (i >= 2000) {
        x = 2000;
        count2000 = count2000 + 1;
        noOfNotes[0].innerText = count2000;
      } else if (i >= 500) {
        x = 500;
        count500 = count500 + 1;
        noOfNotes[1].innerText = count500;
      } else if (i >= 100) {
        x = 100;
        count100 = count100 + 1;
        noOfNotes[2].innerText = count100;
      } else if (i >= 20) {
        x = 20;
        count20 = count20 + 1;
        noOfNotes[3].innerText = count20;
      } else if (i >= 10) {
        x = 10;
        count10 = count10 + 1;
        noOfNotes[4].innerText = count10;
      } else if (i >= 5) {
        x = 5;
        count5 = count5 + 1;
        noOfNotes[5].innerText = count5;
      } else if (i >= 1) {
        x = 1;
        count1 = count1 + 1;
        noOfNotes[6].innerText = count1;
      }
      third.style.display = "block";
    }
  }
}

function clearNoOfNotes() {
  for (let notes of noOfNotes) {
    notes.innerText = "";
  }
}
function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
  third.style.display = "none";
  clearNoOfNotes();
}
checkButton.addEventListener("click", validateBillAndCashAmount);
