/**
 * authFetch — wrapper de fetch() que injeta o token JWT automaticamente.
 * Preserva quaisquer headers adicionais passados pelo chamador (ex: Content-Type).
 * Se não houver token no localStorage, redireciona para a tela de login.
 */
function authFetch(url, options = {}) {
    if (localStorage.getItem('token') === null) {
        window.location.href = '/login.html';
        return;
    }
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}
