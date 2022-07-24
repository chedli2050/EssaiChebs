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