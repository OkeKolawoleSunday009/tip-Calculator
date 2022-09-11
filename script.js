// select the input field to enter amount
var input = document.querySelector('.inputBox'); 
// select the input field to enter custom percentage
var input2 = document.querySelector('#inputPer');

// select all the btns of percentage
var btn = document.querySelectorAll('.btn');

//initializing and declaring varaiables
// for the calculation
var btntext;
var totals = 0;
var tip = 0;

// updating the value of the ui when reloade
 document.getElementById('totals').textContent = " $0.00";
 document.getElementById('tip').textContent = " $0.00";

//  reset button
document.querySelector('.reset').addEventListener('click',function(e){
   input.value = 0.00;
   input2.value = 0.00
})

//this is an event listner that when u type in the custom it shows in the tip section of the ui
// this might not be what is asked in the lesson

input2.addEventListener('keyup', function(e){


//   for the custom when u enter the percentage
    var btntext2 = e.target.value;
    // var btnscope2 =  btntext2.slice(1); if u include a % in front
    var cal2 = btntext2 / 100;
    console.log(cal2);
    input.value *= cal2;
    var totals2 = parseInt(input.value);
     result = totals2.toFixed(2);

//    updating the ui after all calculations have been made
    document.getElementById('totals').textContent = `$${result }`;

})

// for all buttons clicked the percentage take effect
 for (let i = 0; i < btn.length; i++) {
     btn[i].addEventListener("click", function(e) {
        btntext = e.target.innerText;
        var btnscope =  btntext.slice(1);
        var cal = btnscope / 100;
        input.value *= cal;
        totals = parseInt(input.value);
        var result = totals.toFixed(2);


        // document.getElementById('totals').textContent = `$${result + input2.value}`;
        document.getElementById('totals').textContent = `$${result }`;

     });
 }

 //remain the number of person using jquery
