
//Nome e cognome del viaggiatore
let name = document.getElementById('username');
// Chiedere di inserire l'età del viaggiatore
let etaViaggiatore =document.getElementById ("età");

//attiva visualizzazione biglietto
const ticket= document.querySelector('.d-none');

//Bottone reset pagina
let buttonReset= document.getElementById("annulla")
//Bottone genera biglietto
let button = document.getElementById("genera");

button.addEventListener('click',    
    function() {

        if (etaViaggiatore.value == "" || name.value=="" || etaViaggiatore.value=="") {
            alert("Completa tutti i campi mancanti.");
        } else {
            //Visualizzazione biglietto numero di carrozza e vagone
            ticket.classList.add('active');
            document.getElementById('name').innerHTML = username.value;
            document.getElementById('carrozza').innerHTML = ( Math.floor( Math.random() * 9 ) + 1 );
            document.getElementById('codice-cp').innerHTML = ( Math.floor( Math.random() * 10000) + 90000 );
            let prezzoPerKm = 0.21;
            let distanza =document.getElementById ('distanza').value;
            let prezzoFinale = distanza * prezzoPerKm;

            if (etaViaggiatore.value=="minorenne"){
                //Prezzo del biglietto se sono minori
                let scontoMinori = ((prezzoFinale * 20) /100);
                prezzoMinorenni = prezzoFinale - scontoMinori;
                document.getElementById('type-ticket').innerHTML ='Biglietto Sconto Minorenni';
                document.getElementById('price-ticket').innerHTML =prezzoMinorenni.toFixed(2) + '€';
                
                
            } else if(etaViaggiatore.value=="over-66"){
                //Prezzo del biglietto se sono pensionati
                let scontoPensionati = ((prezzoFinale * 40) /100);
                let prezzoPensionati = prezzoFinale - scontoPensionati;
                document.getElementById('type-ticket').innerHTML ='Biglietto Sconto Pensionati';
                document.getElementById('price-ticket').innerHTML =prezzoPensionati.toFixed(2) + '€';
                
                
            }
            else{
                document.getElementById('type-ticket').innerHTML ='Biglietto Standard';
                document.getElementById('price-ticket').innerHTML =prezzoFinale.toFixed(2) + '€';

            }
            
           
        }
    }
);

buttonReset.addEventListener('click',
    function(){
        
        ticket.classList.remove('active');
        document.getElementById('username').value= "";
        document.getElementById ("età").value="";
        document.getElementById ('distanza').value="";
    }

);

