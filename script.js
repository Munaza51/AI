document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const generateBtn = document.getElementById('generateBtn');
    const audioPlayer = document.getElementById('audioPlayer');
    const ratingInputs = document.querySelectorAll('#rating input');

    // Text-to-Speech conversion
    generateBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        if (text === '') {
            alert('Please enter some text.');
            return;
        }

        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'en-US'; // Set this to any language supported by the Web Speech API
        speech.rate = 1; // Adjust the rate of speech if necessary
        speech.pitch = 1; // Adjust the pitch if necessary

        // When speech starts
        speech.onstart = () => {
            audioPlayer.src = '';
        };

        // When speech ends
        speech.onend = () => {
            const synth = window.speechSynthesis;
            synth.cancel(); // Stop any ongoing speech synthesis
            alert('Speech has finished.');
        };

        window.speechSynthesis.speak(speech);
    });

    // Star rating system
    ratingInputs.forEach(input => {
        input.addEventListener('change', () => {
            const ratingValue = document.querySelector('#rating input:checked').value;
            alert(`You rated this ${ratingValue} stars!`);
        });
    });
});
