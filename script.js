async function fetchData() {
    try {
        let response = await fetch("https://thronesapi.com/api/v2/Characters");
        if (!response.ok) {
            throw new Error("Netzwerkfehler: " + response.statusText);
        }
        let responseAsJson = await response.json();
        console.log(responseAsJson); // Array der Charaktere ausgeben
        renderCharacter(responseAsJson); // Übergib die gesamte Liste der Charaktere
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
        document.getElementById('content').innerHTML = `<p>Fehler: ${error.message}</p>`;
    }
}


function renderCharacter(characters) {
    let charctersRef = document.getElementById('content');
    charctersRef.innerHTML = '';
    for (let i = 0; i < characters.length; i++) {
        let singleCharacter = characters[i];
        charctersRef.innerHTML += `
        <div class="main-container">
            <div><h3>${singleCharacter.firstName} ${singleCharacter.lastName}</h3>
              <div class="character-info">
                <img src="${singleCharacter.imageUrl}" alt="${singleCharacter.fullName}" style="width:300px; height:auto;"/>
                <h5>Title: ${singleCharacter.title}</h5>
                <h5>Family: ${singleCharacter.family}</h5>
              </div>
            </div>
        </div>
        <div class="space"></div>`;
    }
    console.log(charctersRef);
    
}



const audio = document.getElementById('background-music');
const playButton = document.getElementById('play-music');

// Automatisch starten (falls erlaubt):
audio.volume = 0.5;
audio.play().catch(() => {
    console.log("Autoplay blockiert. Benutzeraktion erforderlich.");
});



















// async function fetchData() {
//     let response = await fetch(`https://www.openthesaurus.de/synonyme/search?q='coden'&format=application/json`);
//     let responseAsJson = await response.json();
//     console.log(responseAsJson);

//     let terms = responseAsJson.synsets[0].terms;
//     renderTerms(terms);
// }

// function renderTerms(terms) {
//     let termsRef = document.getElementById('content');
//     termsRef.innerHTML = '';
//     for (let i = 0; i < terms.length; i++) {
//         let singleTerm = terms[i].term;
//         termsRef.innerHTML += `<div>${singleTerm}</div>`;
//     }
// }