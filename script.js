// #region ---- Navegación Sidebar ----

const menuBtn = document.getElementById('menuBtn');
const menuList = document.getElementById('menuList');

menuBtn.addEventListener('click', () => {
    const isExpanded = menuList.classList.toggle('active');
    // Actualiza el estado de accesibilidad
    menuBtn.setAttribute('aria-expanded', isExpanded);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuList.classList.contains('active')) {
        menuList.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.focus();
    }
});

// #endregion