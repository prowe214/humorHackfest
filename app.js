var counterOne = document.getElementsByClassName("joke1");

var counterTwo = document.getElementsByClassName("joke2");

var genCounterOne = 0;
var genCounterTwo = 0;


var addCounterOne = function(){
   genCounterOne++;
    if (genCounterOne == 5) {
         alert('THAT JOKE WINS!');
          }
}
var addCounterTwo = function(){
   genCounterTwo++;
    if (genCounterTwo == 5) {
         alert('THAT JOKE WINS!');
          }
}

counterOne[0].addEventListener('click', addCounterOne);

counterTwo[0].addEventListener('click', addCounterTwo);
