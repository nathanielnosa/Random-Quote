let quote = [
  'Dream big and dare to fail',
  'Action is the foundation key to all success',
  'make each day your masterpiece',
  'it is never too late to be what you might have been',
  'Do what you love and money will follow',
  'Champions keep playing until they get it right',
  'Believe and act as if it were imposible to fail',
  'Light tomorrow with today',
  'The journey of a thousand miles begins with one step',
  'A year from now you may wish you have started today',
  'Simplicity is the ultimate sophistication',
  'The power of imagination makes us infinite',
  'If there is no struggle, there is no progress',
  'Success is going from failure to failure without losing  your enthusiasm',
];

// UI Elements
 const UIquoteDisplay = document.querySelector('#quote'),
       UIquoteBtn = document.querySelector('#get-quote');

// event listener

UIquoteBtn.addEventListener('click', function(){
  let randomQuote = Math.floor(Math.random()*(quote.length));

 UIquoteDisplay.textContent = quote[randomQuote];
});

