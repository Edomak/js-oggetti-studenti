// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

// Creare un array di oggetti di studenti.

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

// ------------------- OGGETTI STUDENTI --------------------

// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età:

var studente = {
    nome: "Edoardo",
    cognome: "Maccherini",
    eta: 36,
};

console.log(studente);

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto:

for (var key in studente) {
    console.log(key, ":", studente[key]);
    document.getElementById("studente").innerHTML += "<li>" + key + ": " + studente[key] + "</li>";
}

// Creare un array di oggetti di studenti:

var studenti = [

    {
        nome: "edoardo",
        cognome: "maccherini",
        eta: 36,
    },
    {
        nome: "lucia",
        cognome: "panfi",
        eta: 27,
    },
    {
        nome: "gianluca",
        cognome: "batani",
        eta: 25,
    },
    {
        nome: "francesco",
        cognome: "bucci",
        eta: 32,
    },
    {
        nome: "eva",
        cognome: "bugelli",
        eta: 21,
    },
];

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome:

for (var i = 0; i < studenti.length; i++) {
    var studente = studenti[i];
    var nomeCognome = studente.nome + " " + studente.cognome; // == studente["nome"] e studente["cognome"];
    console.log(nomeCognome);
    document.getElementById("studenti").style.textTransform = "capitalize";
    document.getElementById("studenti").innerHTML += "<li>" + nomeCognome + "</li>";
};

// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età:

var nomeUtente = prompt("Inserisci il tuo nome");

var cognomeUtente = prompt("Inserisci il tuo cognome");

var etaUtente = parseInt(prompt("Inserisci la tua età"));

var oggettoUtente = {
    nome: nomeUtente,
    cognome: cognomeUtente,
    eta: etaUtente,
};

console.log(oggettoUtente);
studenti.push(oggettoUtente);

console.log(studenti);

