// script.js

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
        speech.lang = 'en-US'; // You can set this to any language supported by the Web Speech API
        speech.rate = 1; // Adjust the rate of speech if necessary
        speech.pitch = 1; // Adjust the pitch if necessary

        // Play the audio in the audio player
        speech.onstart = () => {
            audioPlayer.src = '';
        };

        speech.onend = () => {
            const synth = window.speechSynthesis;
            const audioBlob = new Blob([new Uint8Array(synth.speaking ? [] : [0])], { type: 'audio/wav' });
            audioPlayer.src = URL.createObjectURL(audioBlob);
            audioPlayer.play();
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
