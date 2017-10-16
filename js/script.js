// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//print out message inside quote-box in html
function print(message) {
  var outputDiv = document.getElementById('quote-box');
  //DOM object a node hold the reference to the tag
  outputDiv.innerHTML = message;
}

//test print
function printQuote(){
  print('<p class="quote">This is a test message</p>');
}

//Getting a random integer between two values [min,max)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//a function that returns a random  object in the  array of objects
function getRandomQuote(arr){
   var random_index = getRandomInt(0,arr.length);//pick a random int between 0 and quotes.length
   var random_quote = arr[random_index];
   return random_quote;
}
