window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    document.body.classList.remove('hidden');
});

window.addEventListener('beforeunload', () => {
    document.body.classList.add('hidden');
});