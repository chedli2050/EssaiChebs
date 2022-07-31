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
else if (mois == 8){moisl="Aout"}
else if (mois == 9){moisl="Septembre"}
else if (mois == 10){moisl="octobre"}
else if (mois == 11){moisl="Novembre"}
else if (mois == 12){moisl="Décembre"};


var ladate = document.getElementById('ladate');
ladate.innerHTML =  jour + " " + moisl + " " + annee;

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
    menu2.style.boxShadow = "1px 1px 7px rgba(255, 255, 255, 0.423)"
    
}
else
{
    menu2.className ="menu20"
   menu2.style.width = "35%"
    menu2.style.height ="60px"
    menu2.style.boxShadow = "1px 1px 8px rgba(255, 255, 255, 0)"
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
}


function ouvrirblocnotes()
{
boxsommaire.className = "boxsommaire0"
boxblocnotes.className = "boxblocnotes1"
boxlivres.className = "boxlivres0"
boxflyers.className = "boxflyers0"
boxporte.className = "boxporte0"
boxparametrage.className = "boxparametrage0"
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
boxblocbt.addEventListener('click',resultatbn);
boxlivresbt.addEventListener('click',ouvrirlivres);
boxflyersbt.addEventListener('click',ouvrirflyers);
boxportedocbt.addEventListener('click',ouvrirporte);

var sommairebt = document.getElementById('sommairebt');
var blocbt = document.getElementById('blocbt');
var livresbt = document.getElementById('livresbt');
var flyersbt = document.getElementById('flyersbt');
var portedocbt = document.getElementById('portedocbt');
var parametragebt = document.getElementById('parametragebt');

sommairebt.addEventListener('click',ouvrirsommaire);
blocbt.addEventListener('click',ouvrirblocnotes);
blocbt.addEventListener('click',resultatbn);
livresbt.addEventListener('click',ouvrirlivres);
flyersbt.addEventListener('click',ouvrirflyers);
portedocbt.addEventListener('click',ouvrirporte);
parametragebt.addEventListener('click',ouvrirparametrage);

var sommairebtm = document.getElementById('sommairebtm');
var blocbtm = document.getElementById('blocbtm');
var livresbtm = document.getElementById('livresbtm');
var flyersbtm = document.getElementById('flyersbtm');
var portedocbtm = document.getElementById('portedocbtm');
var parametragebtm = document.getElementById('parametragebtm');

sommairebtm.addEventListener('click',ouvrirsommaire);
blocbtm.addEventListener('click',ouvrirblocnotes);
blocbtm.addEventListener('click',resultatbn);
livresbtm.addEventListener('click',ouvrirlivres);
flyersbtm.addEventListener('click',ouvrirflyers);
portedocbtm.addEventListener('click',ouvrirporte);
parametragebtm.addEventListener('click',ouvrirparametrage);
//Fin ouverture des fenetres Boxes...


//---------------------------------------Devis bloc notes------------------------------------


//contre de la saisie du champ qnb1 et qnb2 pour empecher les signes + - , . 
        let hj0 = document.getElementById('qnb1');
        var hj0val = 0;
        var controleQ = 0;
        
        hj0.addEventListener('keydown',(e)=>    //Saisie quantité bloc note
        {
        if(e.key == '-' || e.key == '+' || e.key == '.' || e.key == ','){hj0val=hj0.value;}            
        });
        hj0.addEventListener('keyup',(e)=>
        {
        if(e.key == '-' || e.key == '+' || e.key == '.' || e.key == ','){hj0.value=hj0val;}           
        });

        hj0.addEventListener('keyup',(e)=>
        {
            controleQ=hj0.value;
            if(controleQ > 100000) {hj0.value='100000';}     
            controleQ=0;        
        });

   
        let hj = document.getElementById('qnb2');
        var hjval = 0;
        
        hj.addEventListener('keydown',(e)=> //Saisie volume bloc note
        {
        if(e.key == '-' || e.key == '+' || e.key == '.' || e.key == ','){hjval=hj.value;}            
        });
        hj.addEventListener('keyup',(e)=>
        {
        if(e.key == '-' || e.key == '+' || e.key == '.' || e.key == ','){hj.value=hjval;}              
        });
       
        hj.addEventListener('keyup',(e)=>
        {
            controleQ=hj.value;
            if(controleQ > 250) {hj.value='250';}  
            controleQ=0;        
        });


//Fin contre de la saisie du champ qnb2 pour empecher les signes + - , .        




function formaterbn(v){return Intl.NumberFormat('fr-FR',{ maximumFractionDigits : 2 }).format(v);}
function formaterbnsansvirgule(z){return Intl.NumberFormat('fr-FR',{ maximumFractionDigits : 0 }).format(z);}
          

var formatbn = "";
var formatcouvbn = "";
var feuillea0 = document.getElementById('feuillea0');
var feuillea3 = document.getElementById('feuillea3');
var feuillea4 = document.getElementById('feuillea4');


var qbnF = document.getElementById("qbnF");
var coutunitaireP = document.getElementById("coutunitaireP");
var couttotalP = document.getElementById("couttotalP");
var coutimpint = document.getElementById("coutimpint");
var coutimpintunitaire = document.getElementById("coutimpintunitaire");

var coutimpcouvunitaire = document.getElementById('coutimpcouvunitaire');
var coutimpcouv = document.getElementById('coutimpcouv');

var pellcouvunitaire = document.getElementById('pellcouvunitaire');
var pellcouv = document.getElementById('pellcouv');



var reliureunitaire = document.getElementById('reliureunitaire');
var reliure = document.getElementById('reliure');

var prixunitaire = document.getElementById('prixunitaire');
var prixtotal = document.getElementById('prixtotal');
function formater(g){return Intl.NumberFormat('fr-FR',{style:"currency",currency : 'TND'}).format(g);}


function resultatbn(){
        const checkBox = document.getElementById('A5').checked;

        var qnb1 = document.getElementById('qnb1').value;
        var qnb2 = document.getElementById('qnb2').value;
        var qbn0 = 0;
        var volbn0 = 0;
        var rtblocnotes = 0;

        var prixpapierint = 0;
        var prixpapiercouv = 0;
        var prixpapiertotal = 0;
        var prixpapierunitaire = 0;

        var prixt=0;
        var prixu = 0;

       

        qbn0 = qnb1;
        volbn0 = qnb2;
        rtblocnotes = qbn0 * volbn0;
        if (qbn0 != ""){qbnF.innerHTML= formaterbnsansvirgule(qnb1)} else {qbnF.innerHTML="0"};

        var labelradio1 = document.getElementById('labelradio1');
        var labelradio2 = document.getElementById('labelradio2');

        var formatphotobn = document.getElementById('f4');
        var impressioncouvphotobn = document.getElementById('f5');
        var impressionintphotobn = document.getElementById('f6');


        if (checkBox === true) {formatbn= "A5"
                                
                                labelradio1.innerHTML = '<i class="fa-solid fa-circle-check"></i> Format A5'
                                labelradio1.style.backgroundColor="rgba(7, 117, 115, 0.905)"
                                labelradio1.style.color ="white"
                                labelradio1.style.opacity = "1"
                                
                                labelradio2.innerHTML = 'Format A4'
                                labelradio2.style.backgroundColor="rgba(7, 117, 115, 0)"
                                labelradio2.style.color ="rgba(7, 117, 115, 0.905)"
                                labelradio2.style.opacity = "0.5"

                                formatphotobn.className = "formatphotobn0" }
        else{formatbn = "A4";                   
                                labelradio2.innerHTML = '<i class="fa-solid fa-circle-check"></i> Format A4'
                                labelradio2.style.backgroundColor="rgba(7, 117, 115, 0.905)"
                                labelradio2.style.color ="white"
                                labelradio2.style.opacity="1"
                                
                                labelradio1.innerHTML = 'Format A5'
                                labelradio1.style.backgroundColor="rgba(7, 117, 115, 0)"
                                labelradio1.style.color ="rgba(7, 117, 115, 0.905)"
                                labelradio1.style.opacity="0.5"
                                
                                formatphotobn.className = "formatphotobn1"  } 
        
        var xxreliure = 0;
        var labeldos = document.getElementById('labeldos');
        var labelspirale = document.getElementById('labelspirale');
        var labelspiralehaut = document.getElementById('labelspiralehaut');

        const checkBox2 = document.getElementById('dos').checked;  
        if (checkBox2 === true) 
        {
            labeldos.innerHTML = '<i class="fa-solid fa-circle-check"></i> Dos Collé'
            labeldos.style.backgroundColor="rgb(244, 81, 30)"
            labeldos.style.color ="white"
            labeldos.style.opacity="1"
           
           
            labelspirale.innerHTML = 'Spirales côté'
            labelspirale.style.backgroundColor="rgba(221, 255, 184, 0)"
            labelspirale.style.color = "rgb(244, 81, 30)"
            labelspirale.style.opacity="0.5"
            
           
            labelspiralehaut.innerHTML = 'Spirales Haut'
            labelspiralehaut.style.backgroundColor="rgba(221, 255, 184, 0)"
            labelspiralehaut.style.color = "rgb(244, 81, 30)"
            labelspiralehaut.style.opacity="0.5"

            if (formatbn == "A5")
            {
            formatcouvbn = "A4+"
            xxreliure = qbn0 * 0.25
            }
            else{formatcouvbn = "A3+"
                xxreliure = qbn0 * 0.35
                }
        }

        const spirale = document.getElementById('spirale').checked;

        if (spirale === true)
        {
            labeldos.innerHTML = 'Dos Collé'
            labeldos.style.backgroundColor="rgba(221, 255, 184, 0)"
            labeldos.style.color ="rgb(244, 81, 30)"
            labeldos.style.opacity="0.5"

            labelspirale.innerHTML = '<i class="fa-solid fa-circle-check"></i> Spirales côté'
            labelspirale.style.backgroundColor="rgb(244, 81, 30)"
            labelspirale.style.color ="white"
            labelspirale.style.opacity="1"

            labelspiralehaut.innerHTML = 'Spirales Haut'
            labelspiralehaut.style.backgroundColor="rgba(221, 255, 184, 0)"
            labelspiralehaut.style.color ="rgb(244, 81, 30)"
            labelspiralehaut.style.opacity="0.5"

            
            if (formatbn == "A5") {xxreliure = qbn0 * 0.45}
            else {xxreliure = qbn0 * 0.55}

        }

        const spiralehaut = document.getElementById('spiralehaut').checked;
        if (spiralehaut === true)
        {
            labeldos.innerHTML = 'Dos Collé'
            labeldos.style.backgroundColor="rgba(221, 255, 184, 0)"
            labeldos.style.color ="rgb(244, 81, 30)"
            labeldos.style.opacity="0.5"

            labelspirale.innerHTML = 'Spirales côté'
            labelspirale.style.backgroundColor="rgba(221, 255, 184, 0)"
            labelspirale.style.color ="rgb(244, 81, 30)"
            labelspirale.style.opacity="0.5"

            labelspiralehaut.innerHTML = '<i class="fa-solid fa-circle-check"></i> Spirales Haut'
            labelspiralehaut.style.backgroundColor="rgb(244, 81, 30)"
            labelspiralehaut.style.color ="white"
            labelspiralehaut.style.opacity="1"
            
            
            if (formatbn == "A5") {xxreliure = qbn0 * 0.35}
            else {xxreliure = qbn0 * 0.45}
        
        }








        var xxint = 0; //prix passage int
        var impressionint = document.getElementById('impressionint').value;

        var priximpint = 0;
        var priximpintunitaire = 0;
        
        

        if(impressionint === '1'){xxint = 0.04};
        if(impressionint === '2'){xxint = 0.07};
        if(impressionint === '3'){xxint = 0.17};
        if(impressionint === '4'){xxint = 0.3};
        if(rtblocnotes != 0){
        if(impressionint === '5'){xxint = (32/rtblocnotes)+0.01};
                            }
        if(rtblocnotes != 0){
            if(impressionint === '6'){xxint = (32/rtblocnotes)+0.02};
                            }       
        if(rtblocnotes != 0){
            if(impressionint === '7'){xxint = (140/rtblocnotes)+0.04};
                            }    
        if(rtblocnotes != 0){
            if(impressionint === '8'){xxint = (140/rtblocnotes)+0.08};
                            }                       
        
        var xxcouv = 0; //prix passage Couv
        var impressioncouv = document.getElementById('impressioncouv').value;
        
        var priximpcouv = 0;
        var priximpcouvunitaire = 0;
        
        
        if (impressioncouv === '1'){xxcouv=0.8};
        if (impressioncouv === '2'){xxcouv=1.4};
        if(qbn0 != 0){
            if (impressioncouv === '3'){xxcouv=(140/qbn0)+0.04};
                            } 
        if(qbn0 != 0){
            if (impressioncouv === '4'){xxcouv=(140/qbn0)+0.08};
                            } 


         
        const checkboxsans = document.getElementById("sans").checked;
        const checkboxpelr = document.getElementById('pelliculagerecto').checked;
        const checkboxpelrv = document.getElementById('pelliculagerv').checked;
        const checkboxcontre = document.getElementById('contrecolle').checked;
        var xxpel = 0;
        var finitioncouv = 0;
        var labelsans = document.getElementById('labelsans');
        var labelr = document.getElementById('labelr');
        var labelrv = document.getElementById('labelrv');
        var labelcontre = document.getElementById('labelcontre');

        if (checkboxsans === true)
        {
            labelsans.innerHTML = '<i class="fa-solid fa-circle-check"></i> Sans Pélli.'
            labelsans.style.backgroundColor="rgba(13, 128, 190, 0.961)"
            labelsans.style.color ="white"
            labelsans.style.opacity="1"
            
            labelr.innerHTML = 'Pélliculage R'
            labelr.style.backgroundColor="rgba(13, 128, 190, 0)"
            labelr.style.color ="rgba(13, 128, 190, 0.961)"
            labelr.style.opacity="0.5"
            
            labelrv.innerHTML = 'Pélliculage RV'
            labelrv.style.backgroundColor="rgba(13, 128, 190, 0)"
            labelrv.style.color ="rgba(13, 128, 190, 0.961)"
            labelrv.style.opacity="0.5"

            labelcontre.innerHTML = 'Contre Collé'
            labelcontre.style.backgroundColor="rgba(13, 128, 190, 0)"
            labelcontre.style.color ="rgba(13, 128, 190, 0.961)"
            labelcontre.style.opacity="0.5"

            xxpel = 0
        };
        if (checkboxpelr === true)
        {
            labelsans.innerHTML = 'Sans Pélli.'
            labelsans.style.backgroundColor="rgba(13, 128, 190, 0)"
            labelsans.style.color ="rgba(13, 128, 190, 0.961)"
            labelsans.style.opacity="0.5"
            
            labelr.innerHTML = '<i class="fa-solid fa-circle-check"></i> Pélliculage R'
            labelr.style.backgroundColor="rgba(13, 128, 190, 0.961)"
            labelr.style.color ="white"
            labelr.style.opacity="1"
            
            labelrv.innerHTML = 'Pélliculage RV'
            labelrv.style.backgroundColor="rgba(13, 128, 190, 0)"
            labelrv.style.color ="rgba(13, 128, 190, 0.961)"
            labelrv.style.opacity="0.5"

            labelcontre.innerHTML = 'Contre Collé'
            labelcontre.style.backgroundColor="rgba(13, 128, 190, 0)"
            labelcontre.style.color ="rgba(13, 128, 190, 0.961)"
            labelcontre.style.opacity="0.5"
        
            xxpel = 0.144
        };
        if (checkboxpelrv === true)
        {
            labelsans.innerHTML = 'Sans Pélli.'
            labelsans.style.backgroundColor="rgba(13, 128, 190, 0)"
            labelsans.style.color ="rgba(13, 128, 190, 0.961)"
            labelsans.style.opacity="0.5"
            
            
            labelr.innerHTML = 'Pélliculage R'
            labelr.style.backgroundColor="rgba(13, 128, 190, 0)"
            labelr.style.color ="rgba(13, 128, 190, 0.961)"
            labelr.style.opacity="0.5"
            
            labelrv.innerHTML = '<i class="fa-solid fa-circle-check"></i> Pélli. RV'
            labelrv.style.backgroundColor="rgba(13, 128, 190, 0.961)"
            labelrv.style.color ="white"
            labelrv.style.opacity="1"

            labelcontre.innerHTML = 'Contre Collé'
            labelcontre.style.backgroundColor="rgba(13, 128, 190, 0)"
            labelcontre.style.color ="rgba(13, 128, 190, 0.961)"
            labelcontre.style.opacity="0.5"
        
            xxpel = 0.288
        };
        if (checkboxcontre === true)
        {
            labelsans.innerHTML = 'Sans Pélli.'
            labelsans.style.backgroundColor="rgba(13, 128, 190, 0)"
            labelsans.style.color ="rgba(13, 128, 190, 0.961)"
            labelsans.style.opacity="0.5"
            
            labelr.innerHTML = 'Pélliculage R'
            labelr.style.backgroundColor="rgba(13, 128, 190, 0)"
            labelr.style.color ="rgba(13, 128, 190, 0.961)"
            labelr.style.opacity="0.5"
            
            labelrv.innerHTML = 'Pélliculage RV'
            labelrv.style.backgroundColor="rgba(13, 128, 190, 0)"
            labelrv.style.color ="rgba(13, 128, 190, 0.961)"
            labelrv.style.opacity="0.5"

            labelcontre.innerHTML = '<i class="fa-solid fa-circle-check"></i> Contre Collé'
            labelcontre.style.backgroundColor="rgba(13, 128, 190, 0.961)"
            labelcontre.style.color ="white"
            labelcontre.style.opacity="1"

            xxpel = 6
        };


        rtbn.innerHTML = "Nombre total de feuilles interieur : <span class='rtbnb'>"+ formaterbn(rtblocnotes) + " feuilles "+formatbn +" "+ "</span></p>";
        if (formatbn === "A5")
        {
        feuillea0.innerHTML = "Feuilles 89 x 64cm : <span class='rtbnb2'>" + formaterbn(rtblocnotes/16) + " feuilles </span> /" + formaterbn(rtblocnotes/16/500) + " Rames </p>";
        feuillea3.innerHTML = "Feuilles A3 / SRA3 : <span class='rtbnb2'>" + formaterbn(rtblocnotes/4) + " feuilles </span> /" + formaterbn(rtblocnotes/4/500) + " Rames </p>";
        feuillea4.innerHTML = "Feuilles A4 / SRA4 : <span class='rtbnb2'>" + formaterbn(rtblocnotes/2) + " feuilles </span> /" + formaterbn(rtblocnotes/2/500) + " Rames </p>";
        prixpapierint = (rtblocnotes/16/500) * 220
        priximpint = (rtblocnotes/2)* xxint
        
        }  
        else
        {
        feuillea0.innerHTML = "Feuilles 89 x 64cm : <span class='rtbnb2'>" + formaterbn(rtblocnotes/8) + " feuilles </span> /" + formaterbn(rtblocnotes/8/500) + " Rames </p>";
        feuillea3.innerHTML = "Feuilles A3 / SRA3 : <span class='rtbnb2'>" + formaterbn(rtblocnotes/2) + " feuilles </span> /" + formaterbn(rtblocnotes/2/500) + " Rames </p>";
        feuillea4.innerHTML = "Feuilles A4 / SRA4 : <span class='rtbnb2'>" + formaterbn(rtblocnotes) + " feuilles </span> /" + formaterbn(rtblocnotes/500) + " Rames </p>";
        prixpapierint = (rtblocnotes/8/500) * 220
        priximpint = (rtblocnotes)* xxint
        }      

        rtbn2.innerHTML = "Nombre total des feuilles de Couverture : <span class='rtbnb'>"+ formaterbn(qnb1*2) + " feuilles "+formatbn +" "+ "</span></p>";

        if (formatbn === "A5"){
            feuillea02.innerHTML = "Feuilles 89 x 64cm : <span class='rtbnb2'>" + formaterbn(qnb1*2/16) + " feuilles </span> /" + formaterbn(qnb1*2/16/500)+ " Rames"+ "</p>";
            feuillea32.innerHTML = "Feuilles A3 / SRA3 : <span class='rtbnb2'>" + formaterbn(qnb1*2/4) + " feuilles </span> /" + formaterbn(qnb1*2/4/500) + " Rames"+ "</p>";
            prixpapiercouv = (qnb1*2/16/500) * 880
            priximpcouv = (qnb1*2/4)*xxcouv
            finitioncouv = (qnb1*2/4)*xxpel
            }  
            else
            {
            feuillea02.innerHTML = "Feuilles 89 x 64cm : <span class='rtbnb2'>" + formaterbn(qnb1*2/8)+ " feuilles </span> /" + formaterbn(qnb1*2/8/500) + " Rames"+ "</p>";
            feuillea32.innerHTML = "Feuilles A3 / SRA3 : <span class='rtbnb2'>" + formaterbn(qnb1*2/2)+ " feuilles </span> /" + formaterbn(qnb1*2/2/500)+ " Rames"+ "</p>";
            prixpapiercouv = (qnb1*2/8/500) * 880
            priximpcouv = (qnb1*2/2)*xxcouv
            finitioncouv = (qnb1*2/2)*xxpel
            }      
           
           
        if (checkBox2 === true) { 

            rtbn2.innerHTML = "Nombre total des feuilles de Couverture : <span class='rtbnb'>"+ formaterbn(qnb1) + " feuilles </span>"+formatcouvbn + "</p>";

                    if (formatbn === "A5"){
                        feuillea02.innerHTML = "Feuilles 89 x 64cm : <span class='rtbnb2'>" + formaterbn(qnb1/8) + " feuilles </span> /" + formaterbn(qnb1/8/500) + " Rames"+ "</p>";
                        feuillea32.innerHTML = "Feuilles SRA3 : <span class='rtbnb2'>" + formaterbn(qnb1/2) + " feuilles </span> /" + formaterbn(qnb1/2/500) + " Rames </p>";
                        prixpapiercouv = (qnb1/8/500)* 880  
                        priximpcouv = (qnb1/2)*xxcouv     
                        finitioncouv = (qnb1/2)*xxpel        
                                          }  
                    else
                    {
                        feuillea02.innerHTML = "Feuilles 89 x 64cm : <span class='rtbnb2'>" + formaterbn(qnb1/4) + " feuilles </span> /" + formaterbn(qnb1/4/500) + " Rames </p>";
                        feuillea32.innerHTML = "Feuilles SRA3 : <span class='rtbnb2'>" + formaterbn(qnb1) + " feuilles </span> /" + formaterbn(qnb1/500) + " Rames </p>";
                        prixpapiercouv = (qnb1/4/500)* 880
                        priximpcouv = (qnb1)*xxcouv  
                        finitioncouv = (qnb1)*xxpel    
                    }      

                                    }
            prixpapiertotal = prixpapierint + prixpapiercouv
            prixpapierunitaire = prixpapiertotal/qnb1
          
            priximpintunitaire = priximpint/qbn0

            priximpcouvunitaire = priximpcouv/qbn0
            
            prixt = prixpapiertotal + priximpint + priximpcouv + finitioncouv + xxreliure


            if(qbn0 != 0)
            {
            couttotalP.innerHTML = "Coût Papier Total (HT) :  <span class='rtbnb2'>" + formater(prixpapiertotal.toFixed(3))+"</span></p>";
            coutunitaireP.innerHTML = "Coût papier Unitaire (HT) : <span class='rtbnblue'>" + formater(prixpapierunitaire.toFixed(3))+"</span></p>";
            coutimpint.innerHTML = "Coût Total d'impression Intérieur (HT) : <span class='rtbnb2'>" + formater(priximpint.toFixed(3))+"</span></p>";
            coutimpintunitaire.innerHTML = "Coût d'impression Intérieur unitaire (HT) : <span class='rtbnblue'>" + formater(priximpintunitaire.toFixed(3))+"</span></p>";
            coutimpcouvunitaire.innerHTML="Coût Impression Couverture unitaire (HT) : <span class='rtbnblue'>" + formater(priximpcouvunitaire.toFixed(3))+"</span></p>";
            coutimpcouv.innerHTML = "Coût Total d'impression Couverture (HT) : <span class='rtbnb2'>" + formater(priximpcouv.toFixed(3))+"</span></p>";
            pellcouvunitaire.innerHTML = "Coût unitaire Finition Couv (HT) : <span class='rtbnblue'>" +formater((finitioncouv/qbn0).toFixed(3))+"</span></p>";
            pellcouv.innerHTML = "Coût Total Finition Couv (HT) : <span class='rtbnb2'>" + formater(finitioncouv.toFixed(3))+"</span></p>";
            reliureunitaire.innerHTML = "Coût unitaire de la Reliure (HT) : <span class='rtbnblue'>" + formater((xxreliure/qbn0).toFixed(3))+"</span></p>";
            reliure.innerHTML = "Coût Total de la Reliure (HT) : <span class='rtbnb2'>" + formater(xxreliure.toFixed(3))+"</span></p>";
            if(prixt >999999){
                                prixtotal.innerHTML = formater((prixt.toFixed(3)));
                                prixtotal.style.fontSize = '12pt';
                             }
                             else{prixtotal.innerHTML = formater((prixt.toFixed(3)));
                                prixtotal.style.fontSize = '14pt';

                             }
            prixunitaire.innerHTML = formater((prixt/qbn0).toFixed(3).toLocaleUpperCase());
            }
                         else
                         {
                         couttotalP.innerHTML = "Coût Papier Total (HT) : 0,000 TND"
                         coutunitaireP.innerHTML = "Coût papier Unitaire (HT) : 0,000 TND"
                         coutimpintunitaire.innerHTML = "Coût Impression intérieur unitaire (HT) : 0,000 TND"
                         coutimpint.innerHTML = "Coût Impression intérieur Total (HT) : 0,000 TND"
                         coutimpcouvunitaire.innerHTML="Coût Impression Couverture unitaire (HT) : 0,000 TND"
                         coutimpcouv.innerHTML = "Coût Total d'impression Couverture (HT) : 0,000 TND"
                         pellcouvunitaire.innerHTML = "Coût unitaire Finition Couv (HT) : 0,000 TND"
                         pellcouv.innerHTML = "Coût Total Finition Couv (HT) : 0,000 TND"
                         reliureunitaire.innerHTML = "Coût unitaire de la Reliure (HT) : 0,000 TND"
                         reliure.innerHTML = "Coût Total de la Reliure (HT) : 0,000 TND"
                         prixtotal.innerHTML = "0,000 TND"
                         prixunitaire.innerHTML ="0,000 TND"

                        }

                        if(spirale === true)
                        {    
                            if(impressioncouv == "1"){impressioncouvphotobn.className="impressionphotobn0"};
                            if(impressioncouv == "2"){impressioncouvphotobn.className="impressionphotobn1"};
                            if(impressioncouv == "3"){impressioncouvphotobn.className="impressionphotobn2"};
                            if(impressioncouv == "4"){impressioncouvphotobn.className="impressionphotobn3"};
                
                            if(impressionint == "1"){impressionintphotobn.className="impressionintphtobn0"};
                            if(impressionint == "2"){impressionintphotobn.className="impressionintphtobn1"};
                            if(impressionint == "3"){impressionintphotobn.className="impressionintphtobn2"};
                            if(impressionint == "4"){impressionintphotobn.className="impressionintphtobn3"};
                            if(impressionint == "5"){impressionintphotobn.className="impressionintphtobn4"};
                            if(impressionint == "6"){impressionintphotobn.className="impressionintphtobn5"};
                            if(impressionint == "7"){impressionintphotobn.className="impressionintphtobn6"};
                            if(impressionint == "8"){impressionintphotobn.className="impressionintphtobn7"};
                
                        }
                
                        if(spiralehaut === true)
                        {    
                            if(impressioncouv == "1"){impressioncouvphotobn.className="impressionphotobn4"};
                            if(impressioncouv == "2"){impressioncouvphotobn.className="impressionphotobn5"};
                            if(impressioncouv == "3"){impressioncouvphotobn.className="impressionphotobn6"};
                            if(impressioncouv == "4"){impressioncouvphotobn.className="impressionphotobn7"};
                
                            if(impressionint == "1"){impressionintphotobn.className="impressionintphtobn8"};
                            if(impressionint == "2"){impressionintphotobn.className="impressionintphtobn9"};
                            if(impressionint == "3"){impressionintphotobn.className="impressionintphtobn10"};
                            if(impressionint == "4"){impressionintphotobn.className="impressionintphtobn11"};
                            if(impressionint == "5"){impressionintphotobn.className="impressionintphtobn12"};
                            if(impressionint == "6"){impressionintphotobn.className="impressionintphtobn13"};
                            if(impressionint == "7"){impressionintphotobn.className="impressionintphtobn14"};
                            if(impressionint == "8"){impressionintphotobn.className="impressionintphtobn15"};
                        }
                        //photos caractérique Bloc Notes

                        if(checkBox2 === true)
                        {    
                            if(impressioncouv == "1"){impressioncouvphotobn.className="impressionphotobn8"};
                            if(impressioncouv == "2"){impressioncouvphotobn.className="impressionphotobn9"};
                            if(impressioncouv == "3"){impressioncouvphotobn.className="impressionphotobn10"};
                            if(impressioncouv == "4"){impressioncouvphotobn.className="impressionphotobn11"};
                
                            if(impressionint == "1"){impressionintphotobn.className="impressionintphtobn16"};
                            if(impressionint == "2"){impressionintphotobn.className="impressionintphtobn17"};
                            if(impressionint == "3"){impressionintphotobn.className="impressionintphtobn18"};
                            if(impressionint == "4"){impressionintphotobn.className="impressionintphtobn19"};
                            if(impressionint == "5"){impressionintphotobn.className="impressionintphtobn20"};
                            if(impressionint == "6"){impressionintphotobn.className="impressionintphtobn21"};
                            if(impressionint == "7"){impressionintphotobn.className="impressionintphtobn22"};
                            if(impressionint == "8"){impressionintphotobn.className="impressionintphtobn23"};
                        }






}

var qnb1change = document.getElementById('qnb1');
    qnb1change.addEventListener("keyup",resultatbn);
    qnb1change.addEventListener("change",resultatbn);
var qnb2change = document.getElementById('qnb2');
    qnb2change.addEventListener("keyup",resultatbn);
    qnb2change.addEventListener("change",resultatbn);
var checkA5 = document.getElementById("A5");
    checkA5.addEventListener("change",resultatbn);      
var checkA4 = document.getElementById("A4");
    checkA4.addEventListener("change",resultatbn);

var checkspirale = document.getElementById("spirale");
    checkspirale.addEventListener("change",resultatbn);
var checkspiralehaut = document.getElementById("spiralehaut");
    checkspiralehaut.addEventListener("change",resultatbn);
var checkdos = document.getElementById("dos");
    checkdos.addEventListener("change",resultatbn);
var impintchange = document.getElementById('impressionint');

var impressioncouvchange = document.getElementById('impressioncouv');

impintchange.addEventListener('change',resultatbn);
impintchange.addEventListener('keyup',resultatbn);

impressioncouvchange.addEventListener('change',resultatbn);
impressioncouvchange.addEventListener('keyup',resultatbn);


var checkboxsanschange = document.getElementById("sans");
var checkboxpelrchange = document.getElementById('pelliculagerecto');
var checkboxpelrvchange = document.getElementById('pelliculagerv');
var checkboxcontrechange = document.getElementById('contrecolle');

checkboxsanschange.addEventListener('change',resultatbn);
checkboxsanschange.addEventListener('keyup',resultatbn);

checkboxpelrchange.addEventListener('change',resultatbn);
checkboxpelrchange.addEventListener('keyup',resultatbn);

checkboxpelrvchange.addEventListener('change',resultatbn);
checkboxpelrvchange.addEventListener('keyup',resultatbn);

checkboxcontrechange.addEventListener('change',resultatbn);
checkboxcontrechange.addEventListener('keyup',resultatbn);

// var hauteurtoutdoc = document.documentElement.scrollHeight; pour savoir la longeur total de la page

var englobante = document.getElementById('englobante');
var controleecrandechoix = 0;

function redimentionner()
{
    if (controleecrandechoix == 1)
    {
        englobante.style.width = innerWidth + "px";
        englobante.style.height = innerHeight + "px";
    }
}


window.addEventListener("resize",redimentionner);
var englobanteretour = document.getElementById('englobanteretour');
englobanteretour.addEventListener('click',fermeecrandechoix1);

var boutonchoiximpression = document.getElementById('boutonchoiximpression');
boutonchoiximpression.addEventListener('click',afficheecrandechoix1);


var choiximp = document.getElementById('choiximp');

var impcouvchoix = document.getElementById('impcouvchoix');
var impintchoix = document.getElementById('impintchoix');

impcouvchoix.addEventListener('click',choixcouv);
impintchoix.addEventListener('click',choixint);

var spancouv = document.getElementById('spancouv');
var spanint = document.getElementById('spanint');

var leschoixcouv = document.getElementById('leschoixcouv');
var leschoixint = document.getElementById('leschoixint');


function afficheecrandechoix1()
{
englobante.style.width = innerWidth + "px";
englobante.style.height = innerHeight + "px";
controleecrandechoix = 1;
choiximp.style.display = "flex"
}

function choixcouv()
{
    impcouvchoix.className = 'impcouvchoix0';
    impintchoix.className = 'impintchoix1';
    spancouv.innerHTML='<i class="fa-solid fa-circle-check"></i> Impression Couverture';
    leschoixcouv.className = 'leschoixcouv1';
    leschoixint.className = 'leschoixint0';
}

function choixint()
{
    impcouvchoix.className = 'impcouvchoix1';
    impintchoix.className = 'impintchoix2';
    impintchoix.style.backgroundColor = "#ffc107";
    spanint.innerHTML='<i class="fa-solid fa-circle-check"></i> Impression intérieur';
    leschoixcouv.className = 'leschoixcouv0';
    leschoixint.className = 'leschoixint1';
}

function fermeecrandechoix1()
{
englobante.style.width = "0px";
englobante.style.height = "0px";
controleecrandechoix = 0;
impcouvchoix.className = 'impcouvchoix0';
impintchoix.className = 'impintchoix0';
spancouv.innerHTML = 'Impression Couverture';
spanint.innerHTML = 'Impression intérieur';
impintchoix.style.backgroundColor = "black";
leschoixcouv.className = 'leschoixcouv0';
leschoixint.className = 'leschoixint0';
choiximp.style.display = "none"
}


//---------------------------------------Fin Devis bloc notes------------------------------------