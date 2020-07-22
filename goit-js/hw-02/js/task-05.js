const checkForSpam = function(message) {
    const newMessage = message.toLowerCase().split(' ');
    const word = newMessage.includes('sale') || newMessage.includes('[spam]');
    return word;
}  
    

  console.log(checkForSpam('Latest technology news')); // false

  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true