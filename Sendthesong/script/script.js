document.getElementById('songForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const recipient = document.getElementById('recipient').value;
    const message = document.getElementById('message').value;
    const song = document.getElementById('song').value;

    document.getElementById('outputRecipient').textContent = recipient;
    document.getElementById('outputMessage').textContent = message;
    document.getElementById('outputSong').href = song;

    document.getElementById('output').classList.remove('hidden');
});
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('backgroundMusic');
    audio.play().then(() => {
        console.log("Music started playing automatically.");
    }).catch(error => {
        console.warn("Autoplay was blocked. Playing after user interaction.");
    });
});
document.getElementById('playMusicButton').addEventListener('click', function () {
    const audio = document.getElementById('backgroundMusic');
    audio.play();
});
