/* =========================
// ✔ include
========================= */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-include]').forEach(el => {
        fetch(el.dataset.include)
        .then(res => res.text())
        .then(html => {
            el.innerHTML = html
        })
    })
})

/* =========================

========================= */