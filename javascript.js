var startscreen = document.getElementById('startscreen');

function ajustement()
{
startscreen.style.width = window.innerWidth +'px';
startscreen.style.height = window.innerHeight + 'px';
}
ajustement()

window.addEventListener("resize",ajustement);

function enleverstartscren()
{
startscreen.style.display = "none"
}
startscreen.addEventListener('click',enleverstartscren)