const songs = {
    Telugu: { 
        title: "Chuttamalle (from Devara Part 1)", 
        url: "https://raw.githubusercontent.com/KastroVKiran/songs-spotify-project/main/Chuttamalle.mp3", 
        image: "https://cdn.pixabay.com/photo/2018/05/08/21/29/spotify-3384019_1280.png" 
    },
    Tamil: { 
        title: "Tiger Ka Hukum", 
        url: "https://raw.githubusercontent.com/KastroVKiran/songs-spotify-project/main/TigerKaHukum.mp3", 
        image: "https://cdn.pixabay.com/photo/2018/05/08/21/29/spotify-3384019_1280.png" 
    },
    Malayalam: { 
        title: "Aethu Kari Raavilum", 
        url: "https://raw.githubusercontent.com/KastroVKiran/songs-spotify-project/main/AethuKariRaavilum.mp3", 
        image: "https://cdn.pixabay.com/photo/2018/05/08/21/29/spotify-3384019_1280.png" 
    },
    Kannada: { 
        title: "Salaam Rocky Bhai", 
        url: "https://raw.githubusercontent.com/KastroVKiran/songs-spotify-project/main/SalaamRockyBhai.mp3", 
        image: "https://cdn.pixabay.com/photo/2018/05/08/21/29/spotify-3384019_1280.png" 
    },
    Hindi: { 
        title: "Yeh Raatein Yeh Mausam", 
        url: "https://raw.githubusercontent.com/KastroVKiran/songs-spotify-project/main/YehRaateinYehMausam.mp3", 
        image: "https://cdn.pixabay.com/photo/2018/05/08/21/29/spotify-3384019_1280.png" 
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
