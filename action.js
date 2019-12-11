function MiToKm(valNum) {
  document.getElementById("resultMiles").innerHTML= valNum*1.60934 + " Kilometers";
}

function KmToMi(valNum) {
  document.getElementById("resultKm").innerHTML= valNum/1.60934 + " Miles";
}

function LbToKg(valNum) {
  document.getElementById("resultKg").innerHTML= valNum*0.453592 + " Kilograms";
}

function KgToLb(valNum) {
  document.getElementById("resultLb").innerHTML= valNum/0.453592 + " Pounds";
}

function FaToCe(valNum) {
  document.getElementById("resultCe").innerHTML= (valNum -32)*(5/9) + " Celsius";
}

function CeToFa(valNum) {
  document.getElementById("resultFa").innerHTML= (valNum*(9/5))+32 + " Fahrenheit";
}
