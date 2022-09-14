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
// startscreen.addEventListener('click',ouvrirsommaire);
startscreen.addEventListener('click',enleverstartscren);

// Fin Start Screen
var logobarrehaut = document.getElementById('logobarrehaut');
var menu = document.getElementById('menu');
function retirermenu(){
   if(menu.className=="menu0"){menu.className="menu1"}
   else{menu.className="menu0"}
    
}
logobarrehaut.addEventListener('click',retirermenu);

//incrementation Date
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
else if (mois == 8){moisl="Août"}
else if (mois == 9){moisl="Septembre"}
else if (mois == 10){moisl="octobre"}
else if (mois == 11){moisl="Novembre"}
else if (mois == 12){moisl="Décembre"};


var ladate = document.getElementById('ladate');
ladate.innerHTML =  jour + " " + moisl + " " + annee + " v4";

//Fin incrementation Date


// Menu Mobile deroulement

var menu2 = document.getElementById('menu2');


function deroulementmenumobile()
{
if (menu2.className == "menu20")
{   
    menu2.className = "menu21"
    menu2.style.width = "fit-content"
    menu2.style.height ="380px"
    menu2.style.boxShadow = "1px 3px 12px rgba(0, 0, 0, 0.423)"
    menu2.style.backgroundColor="rgba(0, 0, 0, 0.723)"
    
}
else
{
    menu2.className ="menu20"
    menu2.style.width = "35%"
    menu2.style.height ="60px"
    menu2.style.boxShadow = "1px 1px 8px rgba(0, 0, 0, 0)"
    menu2.style.backgroundColor="black"
};
}

function deroulementmenumobileleave()
{
if (menu2.className == "menu21")
{   
    menu2.className ="menu20"
   menu2.style.width = "35%"
    menu2.style.height ="60px"
    menu2.style.boxShadow = "1px 1px 8px rgba(255, 255, 255, 0)"
    
};

}

menu2.addEventListener('mouseup',deroulementmenumobile);
menu2.addEventListener('mouseleave',deroulementmenumobileleave);


// Fin Menu Mobile deroulement


//ouverture des fenetres Boxes...

var boxblocbt = document.getElementById('boxblocbt');
var boxlivresbt = document.getElementById('boxlivresbt');
var boxflyersbt = document.getElementById('boxflyersbt');
var boxportedocbt = document.getElementById('boxportedocbt');

var boxblocnotes = document.getElementById('boxblocnotes');
var boxlivres = document.getElementById('boxlivres');
var boxflyers = document.getElementById('boxflyers');
var boxporte = document.getElementById('boxporte');
var boxparametrage = document.getElementById('boxparametrage');




function ouvrirsommaire()
{
boxsommaire.className = "boxsommaire1"
boxblocnotes.className = "boxblocnotes0"
boxlivres.className = "boxlivres0"
boxflyers.className = "boxflyers0"
boxporte.className = "boxporte0"
boxparametrage.className = "boxparametrage0"
btretour.className="btreour0"
hautdelapage.scrollIntoView({behavior:"smooth"});

carrenoir.className="carrenoir0";
rectanglerouge.className="rectanglerouge0";
finrectanglerouge.className="finrectanglerouge0"
tresfinrouge.className="tresfinrouge0";
rectangledegrade.className="rectangledegrade0";
presentationp1.className="presentationp10";
sloganpresentation.className = "sloganpresentation0";
titrepresentation.className = "titrepresentation0";
conteneursloganpresentation.className ="conteneursloganpresentation0"
conteneursloganpresentation.style.transitionDelay="0s"
}


var carrenoir = document.getElementById('carrenoir');
var rectanglerouge = document.getElementById('rectanglerouge');
var finrectanglerouge = document.getElementById('finrectanglerouge');
var tresfinrouge=document.getElementById('tresfinrouge');
var rectangledegrade=document.getElementById('rectangledegrade');
var sloganpresentation = document.getElementById('sloganpresentation');
var titrepresentation=document.getElementById('titrepresentation');
var conteneursloganpresentation=document.getElementById('conteneursloganpresentation');

function ouvrirblocnotes()
{
boxsommaire.className = "boxsommaire0";
boxblocnotes.className = "boxblocnotes1";
boxlivres.className = "boxlivres0";
boxflyers.className = "boxflyers0";
boxporte.className = "boxporte0";
boxparametrage.className = "boxparametrage0"


carrenoir.className="carrenoir1";
rectanglerouge.className="rectanglerouge1";
finrectanglerouge.className="finrectanglerouge1";
tresfinrouge.className="tresfinrouge1";
rectangledegrade.className="rectangledegrade1";
sloganpresentation.className = "sloganpresentation1";
titrepresentation.className = "titrepresentation1";
conteneursloganpresentation.className ="conteneursloganpresentation1";
conteneursloganpresentation.style.transitionDelay="3.4s"

}



function ouvrirlivres()
{
boxsommaire.className = "boxsommaire0"
boxblocnotes.className = "boxblocnotes0"
boxlivres.className = "boxlivres1"
boxflyers.className = "boxflyers0"
boxporte.className = "boxporte0"
boxparametrage.className = "boxparametrage0"
}

function ouvrirflyers()
{
boxsommaire.className = "boxsommaire0"
boxblocnotes.className = "boxblocnotes0"
boxlivres.className = "boxlivres0"
boxflyers.className = "boxflyers1"
boxporte.className = "boxporte0"
boxparametrage.className = "boxparametrage0"
}

function ouvrirporte()
{
boxsommaire.className = "boxsommaire0"
boxblocnotes.className = "boxblocnotes0"
boxlivres.className = "boxlivres0"
boxflyers.className = "boxflyers0"
boxporte.className = "boxporte1"
boxparametrage.className = "boxparametrage0"
}

function ouvrirparametrage()
{
boxsommaire.className = "boxsommaire0"
boxblocnotes.className = "boxblocnotes0"
boxlivres.className = "boxlivres0"
boxflyers.className = "boxflyers0"
boxporte.className = "boxporte0"
boxparametrage.className = "boxparametrage1"
}


boxblocbt.addEventListener('click',ouvrirblocnotes);
boxblocbt.addEventListener('click',remonteenhaut);
boxblocbt.addEventListener('mouseover',animationboutonpresentation);
boxblocbt.addEventListener('mouseout',animationboutonpresentation2);

var fondbtpresentation = document.getElementById('fondbtpresentation');
var textepresentationbt = document.getElementById('textepresentationbt');
var photopresentation1 = document.getElementById('photopresentation1');
var boxtextepresentationbt = document.getElementById('boxtextepresentationbt');

function animationboutonpresentation()
{
    fondbtpresentation.style.left = "-100px"
    textepresentationbt.style.color = "white"
}

function animationboutonpresentation2()
{
    fondbtpresentation.style.left = "-950px"
    textepresentationbt.style.color = "rgb(99, 99, 99)"
}




boxlivresbt.addEventListener('click',ouvrirlivres);
boxlivresbt.addEventListener('click',remonteenhaut);
boxlivresbt.addEventListener('click',afficheretoursommaire);


boxlivresbt.addEventListener('mouseover',animationboutonnosproduits);
boxlivresbt.addEventListener('mouseout',animationboutonnosproduits2);

var fondbtnosproduit = document.getElementById('fondbtnosproduit');
var texteproduitbt = document.getElementById('texteproduitbt');

function animationboutonnosproduits()
{
    fondbtnosproduit.style.left = "-100px"
    texteproduitbt.style.color = "white"
}

function animationboutonnosproduits2()
{
    fondbtnosproduit.style.left = "-950px"
    texteproduitbt.style.color = "rgb(99, 99, 99)"
}



boxflyersbt.addEventListener('click',ouvrirflyers);
boxflyersbt.addEventListener('click',remonteenhaut);
boxflyersbt.addEventListener('click',afficheretoursommaire);
boxflyersbt.addEventListener('mouseover',animationboutonutilisateur);
boxflyersbt.addEventListener('mouseout',animationboutonutilisateur2);

var fondbtutilisateur = document.getElementById('fondbtutilisateur');
var textutil1 = document.getElementById('textutil1');
var textutil2 = document.getElementById('textutil2');

function animationboutonutilisateur()
{
    fondbtutilisateur.style.left = "-100px"
    textutil1.style.color = "white"
    textutil2.style.color = "white"
}

function animationboutonutilisateur2()
{
    fondbtutilisateur.style.left = "-950px"
    textutil1.style.color = "rgb(99, 99, 99)"
    textutil2.style.color = "rgb(99, 99, 99)"
}









boxportedocbt.addEventListener('click',ouvrirporte);
boxportedocbt.addEventListener('click',remonteenhaut);
boxportedocbt.addEventListener('click',afficheretoursommaire);
boxportedocbt.addEventListener('mouseover',animationboutonclt);
boxportedocbt.addEventListener('mouseout',animationboutonclt2);

var fondbtclient = document.getElementById('fondbtclient');
var textclt1 = document.getElementById('textclt1');
var textclt2 = document.getElementById('textclt2');

function animationboutonclt()
{
    fondbtclient.style.left = "-100px"
    textclt1.style.color = "white"
    textclt2.style.color = "white"
}

function animationboutonclt2()
{
    fondbtclient.style.left = "-950px"
    textclt1.style.color = "rgb(99, 99, 99)"
    textclt2.style.color = "rgb(99, 99, 99)"
}








var sommairebt = document.getElementById('sommairebt');
var blocbt = document.getElementById('blocbt');
var livresbt = document.getElementById('livresbt');
var flyersbt = document.getElementById('flyersbt');
var portedocbt = document.getElementById('portedocbt');
var parametragebt = document.getElementById('parametragebt');

sommairebt.addEventListener('click',ouvrirsommaire);
sommairebt.addEventListener('click',remonteenhaut);

blocbt.addEventListener('click',ouvrirblocnotes);
blocbt.addEventListener('click',remonteenhaut);
blocbt.addEventListener('click',afficheretoursommaire);

livresbt.addEventListener('click',ouvrirlivres);
livresbt.addEventListener('click',remonteenhaut);
livresbt.addEventListener('click',afficheretoursommaire);

var titretrm=document.getElementById('titretrm');
titretrm.addEventListener('click',ouvrirlivres);
titretrm.addEventListener('click',remonteenhaut);
titretrm.addEventListener('click',afficheretoursommaire);





flyersbt.addEventListener('click',ouvrirflyers);
flyersbt.addEventListener('click',remonteenhaut);
flyersbt.addEventListener('click',afficheretoursommaire);

portedocbt.addEventListener('click',ouvrirporte);
portedocbt.addEventListener('click',remonteenhaut);
portedocbt.addEventListener('click',afficheretoursommaire);

parametragebt.addEventListener('click',ouvrirparametrage);
parametragebt.addEventListener('click',remonteenhaut);
parametragebt.addEventListener('click',afficheretoursommaire);


var sommairebtm = document.getElementById('sommairebtm');
var blocbtm = document.getElementById('blocbtm');
var livresbtm = document.getElementById('livresbtm');
var flyersbtm = document.getElementById('flyersbtm');
var portedocbtm = document.getElementById('portedocbtm');
var parametragebtm = document.getElementById('parametragebtm');

sommairebtm.addEventListener('click',ouvrirsommaire);
sommairebtm.addEventListener('click',remonteenhaut);

blocbtm.addEventListener('click',ouvrirblocnotes);
blocbtm.addEventListener('click',remonteenhaut);
blocbtm.addEventListener('click',afficheretoursommaire);

livresbtm.addEventListener('click',ouvrirlivres);
livresbtm.addEventListener('click',remonteenhaut);
livresbtm.addEventListener('click',afficheretoursommaire);

flyersbtm.addEventListener('click',ouvrirflyers);
flyersbtm.addEventListener('click',remonteenhaut);
flyersbtm.addEventListener('click',afficheretoursommaire);

portedocbtm.addEventListener('click',ouvrirporte);
portedocbtm.addEventListener('click',remonteenhaut);
portedocbtm.addEventListener('click',afficheretoursommaire);

parametragebtm.addEventListener('click',ouvrirparametrage);
parametragebtm.addEventListener('click',remonteenhaut);
parametragebtm.addEventListener('click',afficheretoursommaire);

//    *************************************************Fin ouverture des fenetres Boxes...*************************

//bounton pour retour vers le sommaire


var btretour = document.getElementById('btretour');
btretour.addEventListener('click',ouvrirsommaire);


function afficheretoursommaire()
{
    btretour.className = "btretour1"
}
function masqueretoursommaire()
{
    btretour.className = "btretour0"
}
boxblocbt.addEventListener('click',afficheretoursommaire);


//bounton pour remonter vers le haut



var scrollval = 0;

function affichebtscroll(){
    scrollval = window.scrollY
    if (scrollval > 150)
    {bthaut.className="bthaut1"}
    else {bthaut.className="bthaut0"}

}

window.addEventListener('scroll',affichebtscroll);
window.addEventListener('scroll',petiteiconescroll);
window.addEventListener('resize',petiteiconescroll);

var bthaut = document.getElementById('bthaut');
var hautdelapage = document.getElementById('hautdelapage');
bthaut.addEventListener('click',remonteenhautsmooth);

function remonteenhautsmooth()
{
    hautdelapage.scrollIntoView({behavior:"smooth"});
}
function remonteenhaut()
{
    hautdelapage.scrollIntoView();
}

//Fin bounton pour remonter vers le haut



var photonosproduitsbt1 = document.getElementById('photonosproduitsbt1');
var photoutilisateur1 = document.getElementById('photoutilisateur1');
var photoclient1 = document.getElementById('photoclient1');





function petiteiconescroll()
{
    scrollval = window.scrollY
  
    if (window.innerWidth <= 720)
{
    if (scrollval > 1)
    {
        photonosproduitsbt1.style.width ="150px"
        photonosproduitsbt1.style.height="132px"
        texteproduitbt.style.fontSize="20pt"
    }
    else{
        photonosproduitsbt1.style.width ="137.5px"
        photonosproduitsbt1.style.height="121px"
        texteproduitbt.style.fontSize="5pt"
        }
    if (scrollval > 222)
    {
        photoutilisateur1.style.width ="150px"
        photoutilisateur1.style.height="132px"
        textutil1.style.fontSize="20pt"
        textutil2.style.fontSize="20pt"
    }
    else{
        photoutilisateur1.style.width ="62.5px"
        photoutilisateur1.style.height="55px"
        textutil1.style.fontSize="5pt"
        textutil2.style.fontSize="5pt"

        }
    if (scrollval > 480)
    {
        photoclient1.style.width ="150px"
        photoclient1.style.height="132px"
        textclt1.style.fontSize="20pt"
        textclt2.style.fontSize="20pt"
    }
    else{
        photoclient1.style.width ="62.5px"
        photoclient1.style.height="55px"
        textclt1.style.fontSize="5pt"
        textclt2.style.fontSize="5pt"
        }

}
else
{
    photonosproduitsbt1.style.width ="200px"
    photonosproduitsbt1.style.height="176px"
    texteproduitbt.style.fontSize="24pt" 

    photoutilisateur1.style.width ="200px"
    photoutilisateur1.style.height="176px"
    textutil1.style.fontSize="24pt"
    textutil2.style.fontSize="24pt"

    photoclient1.style.width ="200px"
    photoclient1.style.height="176px"
    textclt1.style.fontSize="24pt"
    textclt2.style.fontSize="24pt"

}
}