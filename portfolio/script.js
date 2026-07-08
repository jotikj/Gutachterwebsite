document.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.blob');
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    blobs.forEach((blob, i) => {
        const factor = (i + 1) * 0.6;
        blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});
