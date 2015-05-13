ounterOne = document.getElementsByClassName("joke1");

var counterTwo = document.getElementsByClassName("joke2");
var genCounterOne = 0;
var genCounterTwo = 0;
var addCounter1 = function(counterOne){
   genCounter1++;
    if (genCounterOne == 5) {
         alert('THAT JOKE WINS!');
    }
}
var addCounter2 = function(counterTwo){
  genCounter2++;
    if (genCounterTwo == 5) {
         alert('THAT JOKE WINS!');
    }

counterOne[0].addEventListener('click', addCounter(genCounterOne));

counterTwo[0].addEventListener('click', addCounter(genCounterTwo));
