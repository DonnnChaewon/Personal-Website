document.querySelectorAll('.language-switcher a').forEach(link => {
    link.addEventListener('click', event => {
        window.location.href = link.href;
    });
});