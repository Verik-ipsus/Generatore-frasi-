function generateRandomParagraph() {
    var inputText = document.getElementById("inputText").value.trim();
    
    if (inputText === "") {
        alert("Inserisci un testo prima di generare un paragrafo!");
        return;
    }

    var sentences = inputText.split(".");
    var paragraph = "";

    if (sentences.length < 6) {
        alert("Il testo inserito non contiene abbastanza frasi.");
        return;
    }

    // Calcola la lunghezza media delle frasi
    var totalLength = sentences.reduce(function (acc, sentence) {
        return acc + sentence.trim().length;
    }, 0);
    var averageLength = totalLength / sentences.length;

    // Scegli una posizione casuale all'interno del testo
    var startIndex = Math.floor(Math.random() * (sentences.length - 5));

    // Limita la lunghezza massima delle frasi
    var maxSentenceLength = averageLength * 2; // Lunghezza massima desiderata per ogni frase (almeno il doppio della media)

    // Seleziona le 5 o 6 frasi consecutive a partire dalla posizione casuale
    for (var i = startIndex; i < startIndex + 6; i++) {
        var currentSentence = sentences[i].trim();

        // Aggiungi solo se la lunghezza della frase è significativamente vicina alla media
        var minLength = 40; // Puoi regolare questo valore secondo le tue preferenze
        if (currentSentence.length > minLength && currentSentence.length < maxSentenceLength) {
            paragraph += currentSentence + ".";
        }
    }

    document.getElementById("outputSentence").innerText = paragraph.trim();
}

function copyText() {
    var inputText = document.getElementById("inputText");
    inputText.select();
    document.execCommand("copy");
    alert("Testo copiato nella clipboard!");
}