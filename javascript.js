//Start screen

var startscreen = document.getElementById('startscreen');
var boxsommaire = document.getElementById('boxsommaire');

function ajustement()
{
startscreen.style.width = window.innerWidth +'px';
startscreen.style.height = window.innerHeight + 'px';
}
ajustement()

window.addEventListener("resize",ajustement);

function enleverstartscren()
{
startscreen.style.display = "none";
boxsommaire.style.display = "flex";
}
startscreen.addEventListener('click',enleverstartscren)

// Fin Start Screen
var logobarrehaut = document.getElementById('logobarrehaut');
var menu = document.getElementById('menu');
function retirermenu(){
   if(menu.className=="menu0"){menu.className="menu1"}
   else{menu.className="menu0"}
    
}
logobarrehaut.addEventListener('click',retirermenu);

var d = new Date();

    var annee = d.getFullYear();
    var mois = d.getMonth()+1;
    var jour = d.getDate();
    var heure = d.getHours();
    var minute = d.getMinutes();
    var seconde = d.getSeconds();

var moisl = ''

if(mois == 1){moisl="Janiver"}
else if (mois == 2){moisl="Jévrier"}
else if (mois == 3){moisl="Mars"}
else if (mois == 4){moisl="Avril"}
else if (mois == 5){moisl="Mai"}
else if (mois == 6){moisl="Juin"}
else if (mois == 7){moisl="Juillet"}
else if (mois == 8){moisl="Aout"}
else if (mois == 9){moisl="Septembre"}
else if (mois == 10){moisl="octobre"}
else if (mois == 11){moisl="Novembre"}
else if (mois == 12){moisl="Décembre"};





var ladate = document.getElementById('ladate');
ladate.innerHTML =  jour + " " + moisl + " " + annee;

var boxblocbt = document.getElementById('boxblocbt');
var boxlivresbt = document.getElementById('boxlivresbt');
var boxflyersbt = document.getElementById('boxflyersbt');
var boxportedocbt = document.getElementById('boxportedocbt');

function essai(){alert('oooooooooooooo')};
boxblocbt.addEventListener('click',essai);
boxlivresbt.addEventListener('click',essai);
boxflyersbt.addEventListener('click',essai);
boxportedocbt.addEventListener('click',essai);