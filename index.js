function scuberGreetingForFeet(n){
  // Write your code here!
  if(n <= 400) {
    return 'This one is on me!'
  } else if(n > 2500) {
    return 'No can do.'
  } else if(n > 2000) {
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if(tip === "generous") {
    return 'Thank you so much.'
  } else if(tip === "not as generous") {
    return 'Thank you.'
  } else {
    return "Bye."
  }
}