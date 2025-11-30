document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // Abrir/cerrar menú móvil
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Submenus en móvil
    document.querySelectorAll('.dropdown > a').forEach(link => {
        link.addEventListener('click', e => {
            if (window.innerWidth <= 768) {
                e.preventDefault(); // evita navegación
                const parent = link.parentElement;
                parent.classList.toggle('active');

                const submenu = link.nextElementSibling;

                if (parent.classList.contains('active')) {
                    submenu.style.maxHeight = submenu.scrollHeight + "px"; // despliegue suave
                } else {
                    submenu.style.maxHeight = 0; // colapsar
                }
            }
        });
    });
});