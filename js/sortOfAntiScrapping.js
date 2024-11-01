async function initShakaPlayer() {
    if (shaka.Player.isBrowserSupported()) {
        const video = document.getElementById('myVideo');
        const player = new shaka.Player(video);

        // Manejo de errores
        player.addEventListener('error', onErrorEvent);

        // Configuración DRM (requiere un servidor de licencias)
        try {
            await player.load('https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'); // URL de ejemplo
            console.log("Video cargado correctamente con DRM.");
        } catch (e) {
            onError(e);
        }
    } else {
        console.error('El navegador no es compatible con Shaka Player.');
    }
}

function onErrorEvent(event) {
    onError(event.detail);
}

function onError(error) {
    console.error('Error de Shaka Player', error);
}

document.addEventListener('DOMContentLoaded', initShakaPlayer);

// 2. Deshabilitar clic derecho en toda la página
document.addEventListener('contextmenu', event => event.preventDefault());

// 3. Desactivar la función de arrastrar en la imagen
document.querySelector('.image-container').setAttribute('draggable', 'false');

// 4. Detectar atajos de teclado para abrir herramientas de desarrollo
document.onkeydown = function(e) {
    if (e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) || 
        (e.ctrlKey && e.key === "U")) {
        e.preventDefault();
        alert("Función deshabilitada.");
        return false;
    }
};

// 5. Blackout al salir de pantalla completa en el video
const videoContainer = document.getElementById('videoContainer');
videoContainer.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        videoContainer.classList.add('blackout');
        alert('Captura de pantalla no permitida');
    } else {
        videoContainer.classList.remove('blackout');
    }
});

// Alternativa para navegadores sin fullscreenchange
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        videoContainer.classList.add('blackout');
    } else {
        videoContainer.classList.remove('blackout');
    }
});

// 6. Función experimental para evitar capturas de pantalla en Android
if (navigator.userAgent.includes('Android')) {
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            alert('Captura de pantalla detectada. Esta acción está restringida.');
            document.querySelector('.image-container').style.filter = 'blur(10px)';
        } else {
            document.querySelector('.image-container').style.filter = 'none';
        }
    });
}

// 7. Evitar el acceso directo al contenido desde otros dominios
if (window.top !== window.self) {
    window.top.location = window.self.location;
}
