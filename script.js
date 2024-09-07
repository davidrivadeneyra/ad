// document.addEventListener('DOMContentLoaded', () => {
//     const circles = document.querySelectorAll('.circle'); // Selecciona todos los circles
//     const maxMove = 50; // Máximo desplazamiento en píxeles

//     circles.forEach(circle => {
//         // Asignar retraso aleatorio para que cada circle brille y se mueva en diferentes momentos
//         const randomDelayBrillo = Math.random() * 3; // Retraso entre 0 y 3 segundos
//         const randomDelayMover = Math.random() * 5; // Retraso entre 0 y 5 segundos

//         // Generar desplazamientos aleatorios en x e y
//         const tx = (Math.random() * maxMove * 2) - maxMove; // Entre -50 y 50 px
//         const ty = (Math.random() * maxMove * 2) - maxMove; // Entre -50 y 50 px

//         // Aplicar las propiedades de transformación a través de variables CSS
//         circle.style.setProperty('--tx', `${tx}px`);
//         circle.style.setProperty('--ty', `${ty}px`);

//         // Asignar duración y retrasos aleatorios para las animaciones de brillo y movimiento
//         circle.style.animationDelay = `${randomDelayBrillo}s, ${randomDelayMover}s`; // Brillo y mover
//         const durationMover = 3 + Math.random() * 3; // Duración entre 3 y 6 segundos para mover
//         circle.style.animationDuration = `3s, ${durationMover}s`; // Duración de brillo fija a 3s, mover aleatoria
//     });
// });
