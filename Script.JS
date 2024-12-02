document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggleSidebar");

    toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
});
// Adiciona a classe 'loaded' ao corpo ao carregar a página
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Transição suave ao mudar de página
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", event => {
        const href = link.getAttribute("href");

        if (href && href.startsWith("http") === false) { // Evita links externos
            event.preventDefault();
            document.body.classList.remove("loaded");
            setTimeout(() => {
                window.location.href = href;
            }, 1000); // Tempo suficiente para a animação
        }
    });
});
// Adiciona a classe 'loaded' ao corpo ao carregar a página
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Transição suave ao mudar de página
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", event => {
        const href = link.getAttribute("href");

        if (href && href.startsWith("http") === false) { // Evita links externos
            event.preventDefault();
            document.body.classList.remove("loaded");
            setTimeout(() => {
                window.location.href = href;
            }, 600); // Tempo da animação reduzido
        }
    });
});
