// This code allows different array elemets to show one by one in the form of typing and deleting...
var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "Enthusiastic Trader", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Function to play the music
let audio = new Audio('Background Music.mpeg');

    // Function to play the music
    function playMusic() {
      audio.play();
    }

    // Event listener to play music when it's ready to play
    audio.addEventListener('click', playMusic);

    // Optionally, you can still use the setTimeout as a fallback
    setTimeout(() => {
      playMusic();
    }, 1000);