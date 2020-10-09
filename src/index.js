module.exports = function toReadable (number) {
  var numberStr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
    ''
 ]
if (number<20){
 //console.log(numberStr[number]);
 return numberStr[number];
}
else if (number >= 20 && number<100){
  let res;
  let inits = number%10;
  if (inits === 0){
    inits=28;
     }
  let tens = 20+(Math.trunc(number / 10)-2);
  res = numberStr[tens] +' '+ numberStr[inits];
  console.log(res);
  return res.trim();
}

// ---------------------100-999----------------------------
else if (number>=100 && number<=999) {
 let inits;
 let numTest = number%100;
 let hundreds = Math.trunc(number/100);
 console.log(numTest);
  let tens;
  if (numTest<20 && numTest>0){
  tens = numberStr[numTest];
  inits = 28;
  res = numberStr[hundreds]+' '+'hundred'+' '+ tens +' '+ numberStr[inits];
  return res.trim();
  //console.log('xxxxxxxxxxxxxxxx')
   }

   else {
     if(number%10===0 && (Math.trunc(number/10))%10===0 ){
      res = numberStr[hundreds]+' '+'hundred';
      return res.trim();
     }
     else{
      // console.log('aaaaaaaaaaaaaaa')
   tens = 20+(Math.trunc(number/10)%10-2);
   tens = numberStr[tens]
    inits = number%10;
    if (inits === 0){
     inits=28;
      }
    console.log(numberStr[tens]);
     res = numberStr[hundreds]+' '+'hundred'+' '+ tens +' '+ numberStr[inits];
     return res.trim();
     //console.log(res);
   }
  }
 }
}
