
let formResult = document.getElementById('resultForm');

formResult.addEventListener("submit", (event) => {
    event.preventDefault();

    let gross= parseInt(document.getElementById('ga').value);
      console.log(gross);
      console.log(typeof gross);

let extraInc= parseInt(document.getElementById('extra').value);
      console.log(extraInc);
      console.log(typeof extraInc);

let age= document.getElementById('age').value;
      console.log(age);
      console.log(typeof age);

let deduction= parseInt(document.getElementById('deductions').value);
      console.log(deduction);
      console.log(typeof deduction);

let totalSal = gross + extraInc - deduction;
      console.log(totalSal);
let tax=0;

      if(totalSal > 800000){
           if(age = '<40'){
                tax=Math.round(0.3*totalSal);
           }
           else if(age = '>=40 & < 60'){
              tax= Math.round(0.4*totalSal);
           }
           else if(age = '>=60'){
              tax= Math.round(0.6*totalSal);
           }
      }

      console.log(tax);
      totalSal = totalSal-tax;
      console.log(totalSal);

      document.getElementById('Totalsal').innerHTML = totalSal;
});

let popup= document.getElementById('popup');

function openPopup () {
   popup.classList.add('open-popup');
}

function closePopup () {
    popup.classList.remove('open-popup');
 }
