/*  Stampare in pagina un item per ogni elemento contenuto in un array
Ogni item ha una icona "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio 
soppure ciccando su un pulsante, il testo digitato sarà aggiunto alla lista
Consigli:
Pensiamo in anticipo, anche spendendo un po' di tempo, a quali strutture dati ci potrebbero servire o essere utili durante lo sviluppo, per ogni fase.
Scriviamolo in italiano, o se vi aiuta, disegnamolo in un piccolo schemino, e cerchiamo di capire se effettivamente la logica abbia un senso e rispetti le nostre richieste.
Iniziamo a sviluppare!! */


let app = new Vue({
    el: '#app',
    data: {
        listaSpesa : ['Uova','Creatina','L-carnitina','Omega-3','BCAA','Multivitaminico','Caffeina'],
    }
});



