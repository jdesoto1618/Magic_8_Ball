//alert("Hello");
//function sayBonjour(){
//  name2 = prompt("What's your name?")
//  document.getElementById("greeting").innerHTML = //"Bonjour, " + name2;
//}

//function test() {
  //document.getElementById("question").innerHTML = "TEST";
//}

//Magic 8 ball. When I looked at this again on 4-26, I didn't understand why
//there were break statements after each case. This is by desing of the switch
//command. Each case needs a break after all of its previous code

function magic8ball() {
  var num = Math.floor(Math.random()*8);
  switch(num) {
    case 0:
      var answer = "Yes.";
      break;
    case 1:
      var answer = "No.";
      break;
    case 2:
      var answer = "Maybe you should ask google!";
      break;
    case 3:
      var answer = "Lucky number 3!"
      break;
    case 4:
      var answer = "Definitely.";
      break;
    case 5:
      var answer = "Ummmmm....";
      break;
    case 6:
      var answer = "Ask me later!";
      break;
    case 7:
      var answer = "Lucky number 777!"
      break;
    }
    document.getElementById("answer").innerHTML = answer;
}
