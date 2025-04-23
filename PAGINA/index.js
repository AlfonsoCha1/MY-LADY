// Este código es para la página de inicio de un sitio web que incluye un carrusel de imágenes, botones funcionales y un reproductor de audio.
// El carrusel muestra imágenes y un video, y los botones permiten navegar entre las imágenes y reiniciar el carrusel. 
  function Prick_me_and_you_will_know() {
    alert("🥰You are my dream come true, the star that lights up my days, and the reason for my happiness😘");
  }
  
 // Lista de imágenes / List of images
const images = [
  "/FOTOS2/Imagen de WhatsApp 2025-03-24 a las 12.10.30_2e732352.jpg",
  "/FOTOS2/IMG_20240422_000822.jpg",
  "/FOTOS2/IMG_2750.PNG",
  "/FOTOS2/Screenshot_2024-05-19-12-35-48-170_com.whatsapp.jpg"
];

let currentIndex = 0;

// Actualiza el contenido del carrusel / Update carousel content
function updateCarousel() {
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = ""; // Limpia el contenido anterior / Clear previous content

  if (currentIndex < images.length) {
    const img = document.createElement("img");
    img.id = "carousel-image";
    img.src = images[currentIndex];
    img.alt = `Imagen ${currentIndex + 1}`;
    carousel.appendChild(img);
  } else {
    const video = document.createElement("video");
    video.controls = true;
    video.innerHTML = `
      <source src="/FOTOS2/GSUO5882.MP4" type="video/mp4">
      Tu navegador no soporta el video.
    `;
    carousel.appendChild(video);
  }
}

// Imagen anterior / Previous image
function previousImage() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

// Imagen siguiente / Next image
function nextImage() {
  if (currentIndex < images.length) {
    currentIndex++;
    updateCarousel();
  }
}

// Reiniciar carrusel / Restart carousel
function restartCarousel() {
  currentIndex = 0;
  updateCarousel();
}

// Cargar imagen inicial / Load initial image
updateCarousel();


      // AUDIO  SOLO MUSICA NO MOVER//

  const audio = document.getElementById('audioPlayer');
  const playBtn = document.getElementById('togglePlay');
  const nextBtn = document.getElementById('nextTrack');
  const icon = playBtn.querySelector('i');

  const canciones = ["/MUSICA/Sade - Kiss Of Life - Official - 1993.mp3", "cancion.mp3"];
  const canciones2 = ["/MUSICA/Selena Gomez, benny blanco - How Does It Feel To Be Forgotten (Official Lyric Video).mp3", "cancion2.mp3"];
  let currentTrack = 0;

  function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audio.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}


  function nextSong() {
    currentTrack = (currentTrack + 1) % canciones.length;  // Cambiar a la siguiente canción
    audio.src = canciones[currentTrack];  // Establecer el nuevo archivo de audio
    audio.play();  // Continuar reproduciendo sin pausar
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
}


  playBtn.addEventListener('click', togglePlayPause);
  nextBtn.addEventListener('click', nextSong);

  const prevBtn = document.getElementById('prevTrack');
const restartBtn = document.getElementById('restartTrack');

function restartSong() {
  audio.currentTime = 0;
  audio.play();
  icon.classList.remove('fa-play');
  icon.classList.add('fa-pause');
}

function prevSong() {
  currentTrack = (currentTrack - 1 + canciones.length) % canciones.length;
  audio.src = canciones2[currentTrack];
  audio.play();
  icon.classList.remove('fa-play');
  icon.classList.add('fa-pause');
}

restartBtn.addEventListener('click', restartSong);
prevBtn.addEventListener('click', prevSong);

