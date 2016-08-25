/*Codeacademy game*/

var strike = true;

var myAttack = Math.floor(Math.random() * 2);
var splitDamage = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (strike) {
  if (myAttack) {
    console.log("OMFG. Ты раздаешь Дарту Вейдеру" + splitDamage + " пюздюлей!");
    totalDamage += splitDamage;
    
    if (allDamag >= 4) {
      console.log("Далеко пойдешь ты. Вейдера завалил.");
      strike = false;
    } else {
      myAttack = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("Люк я твой отец.");
    strike = false;
  }
}
