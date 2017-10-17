// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote , false);
var clone = quotes.slice();/*this clones the quotes array so that we can later on remove objects
from the clone to aviod duplicates*/

//print out message inside quote-box in html
function print(message) {
  var outputDiv = document.getElementById('quote-box');
  //DOM object a node hold the reference to the tag
  outputDiv.innerHTML = message;
}



//Getting a random integer between two values [min,max)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//a function that returns a random  object in the  array of objects
//notice that this function does not return a duplicated object until all objects are returned at least once
function getRandomQuote(){
  if(clone.length===0){
     clone = quotes.slice();//this only executes if clone is empty, so it resets to quotes again
  }
  var random_index = getRandomInt(0,clone.length);//pick a random int between 0 and clone.length
  var random_quote = clone[random_index];
  clone.splice(random_index,1);//remove the selected quote from the clone array so no further dups
  console.log(random_quote);
  console.log(clone.length + " different quotes left");
  return random_quote;

}



//consturct a string with the select quote and print it out
//as well as change the backgound color
//the printed quotes should contain no duplicates until all quotes are printed at least once
function printQuote(){
  var obj = getRandomQuote();
  var html = '';
  html+='<p class="quote">' + obj.quote + '</p>';
  html+='<p class="source">' + obj.source ;
  //condition if obj has a citation property
  if(obj.citation !== undefined){
    html+='<span class = "citation">'+ obj.citation +'</span>';
  }
  //condition if obj has a year property
  if(obj.year !== undefined){
    html+= '<span class = "year">'+ obj.year +'</span>';
  }

  html+='</p>';
  print(html);
  //call the bg color changer function
  changeBackGroundColor();

}


// a function that returns a random color string e.g #1234AB
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//change bg color as name suggests
function changeBackGroundColor(){
  var color = getRandomColor();
  document.body.style.background = color;
}


function main(){
  printQuote();
//  var timer = window.setInterval(printQuote, 5000);//added a timer so that after 5 seconds a new quote pop up
}

main();
