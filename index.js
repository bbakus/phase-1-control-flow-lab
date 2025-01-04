

function scuberGreetingForFeet(thisRide){
    if(thisRide > 2500){
      return 'No can do.'
    } 
    else if (thisRide > 2000){
      return 'I will gladly take your thirty bucks.'
    } 
    else if (thisRide > 400){
      return 'That will be twenty bucks.'
    } 
    else {
      return 'This one is on me!'
    }
}

scuberGreetingForFeet(199)

function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go."
}

ternaryCheckCity('NYC')
ternaryCheckCity('Pittsburgh')


function switchOnCharmFromTip(tip){
      switch(tip){
        case 'generous':
          return 'Thank you so much.'
        case 'not as generous':
          return 'Thank you.'
        case 'thanks for everything':
          return 'Bye.'
      }
  }

  switchOnCharmFromTip('generous')
  switchOnCharmFromTip('not as generous')
  switchOnCharmFromTip('thanks for everything')