document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash) {
        history.replaceState({}, document.title, window.location.pathname);
    }
});
