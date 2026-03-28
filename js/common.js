/* =========================
Header 
========================= */
const headerHeight = 70
const links = document.querySelectorAll('.nav a')
const sections = document.querySelectorAll('section')

// ✔ 클릭 이동
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()

        const target = document.querySelector(link.getAttribute('href'))

        window.scrollTo({
            top: target.offsetTop - headerHeight,
            behavior: 'smooth'
        })
    })
})

// ✔ active 처리
window.addEventListener('scroll', () => {
    let current = ''

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 50

        if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id')
        }
    })

    links.forEach(link => {
        link.classList.remove('active')

        if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active')
        }
    })
})

/* =========================
스크롤 시 버튼 노출
========================= */
const topBtn = document.getElementById('topBtn')

// 스크롤 시 버튼 노출
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topBtn.classList.add('show')
    } else {
        topBtn.classList.remove('show')
    }
    })

    // 클릭 시 최상단 이동
    topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

// ========================
// ✔ 관리자 로그인
// ========================
function adminLogin() {
    const pw = prompt('관리자 비밀번호 입력')

    if (pw === 'frontix777') {
        window.location.href = './pages/admin.html'
        } else {
            alert('접근 권한 없음')
    }
}

// ========================
// ✔ 이벤트 위임 (모든 클릭 처리)
// ========================
document.addEventListener('click', (e) => {

  // 관리자 버튼
    if (e.target.closest('#adminLink')) {
        e.preventDefault()
        adminLogin()
        return
    }

    // 메뉴 이동
    const navLink = e.target.closest('.nav a')
    if (navLink && navLink.getAttribute('href').startsWith('#')) {
        e.preventDefault()

        const target = document.querySelector(navLink.getAttribute('href'))

        if (target) {
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
        })
        }
    }

})

/* =========================

========================= */
