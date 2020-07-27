//1
function getMaxDigit(number){
    
    number = String(number).split ("");
    let arr = 0; 
    for (let i = 0; i < number.length; i++){
        if (arr< number[i]){
          arr = number[i];
        }
      }
      return +arr;
    };

//3
function firstLeter(name){
    let capitalLetter = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return capitalLetter;
  };

  //4
function netProfit (salary){
  if (Number.isInteger(salary)){
    let tax = 3.8;
     salary = salary - (salary * (tax / 100));
  }
   return +salary;
};

//5
  const getRandNumber = (minNum, maxNum) => Math.floor(minNum + Math.random() * (maxNum + 1 - minNum));


//6
function howManyLetters ( letters , word){
  letters = letters.toLowerCase();
  word =  word.toLowerCase();
   let result = 0;
  for (let i = 0; i < word.length; i++){
    if (letters === word[i]){
      result++;  
   }
}
  return result;  
};
 
//7
function convertCurrency (valNum){
  if (valNum.replace('$') || valNum.replace("uah")) {
    return valNum.replace('$') ? (parseInt(valNum) * 26) + "uah" : (parseInt(valNum) / 26) + "$";
    }
};


//9
function deleteLetters(letters , word){
  letters = letters.toLowerCase();
  word =  word.toLowerCase();
  for(let i = 0; i < word.length; i++){
    word = word.replace( letters, '');
    }
return word;
};





document.writeln(`<p>Функція 1: Максимальне число((112436575)):${getMaxDigit(112436575)}</p>`);
document.writeln(`<p>Функція 3: Перша велика буква:${firstLeter("рислінг")}</p>`);
document.writeln(`<p>Функція 4:Податки:${netProfit(2000)}</p>`);
document.writeln(`<p>Функція 5:Рондомне число:${getRandNumber(1,10)}</p>`);
document.writeln(`<p>Функція 6:Кількість букв в слові( "r", "terrorist"):${howManyLetters ( "r", "terrorist") }</p>`);
document.writeln(`<p>Функція 7: Валюта $ = uah:${convertCurrency ('100uah') }</p>`);
document.writeln(`<p>Функція 9: Видалення букв ("r", "terrorist"):${deleteLetters( "r", "terrorist")}</p>`);