const wheel = document.getElementById('wheel');
const result = document.getElementById('result');
const spinButton = document.getElementById('spinButton');

// Voeg 16 opties toe aan het rad
const options = [
    'Truth', 'Dare', 'Truth', 'Dare',
    'Truth', 'Dare', 'Truth', 'Dare',
    'Truth', 'Dare', 'Truth', 'Dare',
    'Truth', 'Dare', 'Truth', 'Dare'
];

// Voeg de 16 segmenten toe aan het wiel
for (let i = 0; i < options.length; i++) {
    let slice = document.createElement('div');
    slice.classList.add('slice');
    slice.innerText = options[i];
    wheel.appendChild(slice);
}

let spinning = false;

spinButton.addEventListener('click', function() {
    if (spinning) return;  // Voorkom meerdere klikken tijdens het draaien

    spinning = true;
    let totalSpins = Math.floor(Math.random() * 30) + 20; // Willekeurige hoeveelheid bewegingen

    let spinCount = 0;

    const spinInterval = setInterval(() => {
        // Verplaats het eerste item naar beneden
        const firstSlice = wheel.firstElementChild;
        wheel.appendChild(firstSlice);  // Verplaats naar het einde van de lijst

        spinCount++;

        if (spinCount >= totalSpins) {
            clearInterval(spinInterval);
            spinning = false;

            // Bepaal de actieve slice op basis van de slice in het midden
            const middleIndex = Math.floor(wheel.children.length / 2); // Selecteer de middelste slice
            const activeSlice = wheel.children[middleIndex];  // Slice in het midden

            result.textContent = `Het is: ${activeSlice.textContent}!`;
        }
    }, 150); // Beweeg elke 150 milliseconden om een vloeiende rotatie te simuleren
});
