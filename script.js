document.getElementById('generateBtn').addEventListener('click', function() {
    var text = document.getElementById('textInput').value;
    var utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
});

document.getElementById('submitFeedback').addEventListener('click', function() {
    var feedback = document.getElementById('feedback').value;
    // Send feedback to server or perform other actions
    alert('Feedback submitted: ' + feedback);
});
