//Zbiór słów
     var slowa = [
"polityka",
"demokracja",
"socjalizm",
"kapitalizm",
"biurokracja",
"podatki",
];

//Losowanie słowa

var slowo = slowa[Math.floor(Math.random() * slowa.length)];

//Pusty wyraz odpowiedzi

var odpowiedzi = [];

//Pętla tworząca podkreślniki w ilości równej ilości liter wylosowanego wyrazu do zgadywania

for (var i = 0; i < slowo.length; i++){

odpowiedzi[i] = "_";
}

var pozostaleLitery = slowo.length;
var zgadniecia = 20;

//GŁÓWNA PĘTLA GRY

while (pozostaleLitery > 0 && zgadniecia > 0){
alert(odpowiedzi.join(""));

//Gdyby gracz podał wielkie litery
var strzal = prompt("Podaj literę").toLowerCase();

//Gdyby nie podał liter
if (strzal === null){
break;
}
else if (strzal.length !== 1)
{
alert("Podaj jakąkolwiek literę.");
}

else {
zgadniecia--;
for (var j = 0; j < slowo.length; j++){
if(slowo[j] === strzal && odpowiedzi[j] === "_"){
odpowiedzi[j] = strzal;

pozostaleLitery--;

}
}
}
}
alert(odpowiedzi.join(""));

if (zgadniecia > 0){
alert("Zgadłeś! Szukane słowo to " + odpowiedzi.join(""));
    document.getElementById('peprostokat').innerHTML = slowo;
}
else {
alert("Może uda się następnym razem. Szukane słowo to: " + slowo);
    document.getElementById('peprostokat').innerHTML = slowo;
}



