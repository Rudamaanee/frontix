/* =========================
// ✔ 관리자 인증
========================= */
const ADMIN_PASSWORD = "frontix666"

if (sessionStorage.getItem('isAdmin') !== 'true') {
    const input = prompt('관리자 비밀번호 입력')
    
    if (input === ADMIN_PASSWORD) {
        sessionStorage.setItem('isAdmin', 'true')
    } else {
        alert('접근 권한 없음')
        location.href = '/frontix/'
    }
}

/* =========================

========================= */

