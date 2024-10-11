const songs = {
    Telugu: { 
        title: "Chuttamalle (from Devara Part 1)", 
        url: "https://github.com/KastroVKiran/songs-spotify-project/blob/main/Chuttamalle.mp3", 
    },
    Tamil: { 
        title: "Tiger Ka Hukum", 
        url: "https://github.com/KastroVKiran/songs-spotify-project/blob/main/Hukum.mp3", 
        image: "https://cdn.pixabay.com/photo/2018/05/08/21/29/spotify-3384019_1280.png" 
    },
    Malayalam: { 
        title: "Aethu Kari Raavilum", 
        url: "https://github.com/KastroVKiran/songs-spotify-project/blob/main/Aethu-Kari-Raavilum-Haricharan.mp3",  
    },
    Kannada: { 
        title: "Salaam Rocky Bhai", 
        url: "https://github.com/KastroVKiran/songs-spotify-project/blob/main/Salaam%20Rocky%20Bhai%20-%20SenSongsMp3.Co.mp3",  
    },
    Hindi: { 
        title: "Yeh Raatein Yeh Mausam", 
        url: "https://github.com/KastroVKiran/songs-spotify-project/blob/main/Yeh%20Raaten%20Yeh%20Mausam%20-%20Sanam%20and%20Simran%20Sehgal.mp3", 
    }
};

// Function to play the selected song
function playSong(language) {
    const song = songs[language];
    const audio = document.getElementById("audioPlayer");
    const coverImage = document.getElementById("coverImage");
    const songTitle = document.getElementById("songTitle");

    audio.src = song.url; // Set audio source
    coverImage.src = song.image; // Set cover image
    coverImage.style.display = "block"; // Show cover image
    songTitle.textContent = song.title; // Set song title
    audio.play(); // Play the song

    // Add animation to bars when the song is playing
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.animation = 'pulse 1s infinite';
    });
}

// Add an event listener to the dropdown menu
document.getElementById('languageDropdown').addEventListener('change', function() {
    const selectedLanguage = this.value;
    if (selectedLanguage) {
        playSong(selectedLanguage);
    }
});
