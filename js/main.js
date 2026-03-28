/* =========================
swipe autoHeight
========================= */
document.addEventListener('DOMContentLoaded', () => {
    const swiperEl = document.querySelector('#timeline')

    // ✔ margin 포함 전체 높이
    function getOuterFullHeight(el) {
        if (!el) return 0

        const rect = el.getBoundingClientRect()
        const style = window.getComputedStyle(el)

        const marginTop = parseFloat(style.marginTop) || 0
        const marginBottom = parseFloat(style.marginBottom) || 0

        return rect.height + marginTop + marginBottom
    }

    // ✔ slide 기준 높이 (.year + .item-wrap)
    function getSlideHeight(slide) {
        const year = slide.querySelector('.year')
        const wrap = slide.querySelector('.item-wrap')

        return getOuterFullHeight(year) + getOuterFullHeight(wrap)
    }

    function updateHeight() {
        const swiper = swiperEl.swiper
        if (!swiper) return

        requestAnimationFrame(() => {
            const slides = swiper.slides
            const i = swiper.activeIndex

            // 🔥 초기화
            swiperEl.style.height = 'auto'

            let max = 0

            // 🔥 active 기준 ±2 (총 5개)
            for (let offset = -2; offset <= 2; offset++) {
                const slide = slides[i + offset]
                if (!slide) continue

                const h = getSlideHeight(slide)

                if (h > max) {
                    max = h
                }
            }

            if (max > 0) {
                swiperEl.style.height = max + 20 + 'px'
            }
        })
    }

    // ✔ swiper 준비 대기
    const wait = setInterval(() => {
        if (swiperEl.swiper) {
            clearInterval(wait)

            const swiper = swiperEl.swiper

            updateHeight()

            swiper.on('slideChange', updateHeight)
            swiper.on('transitionEnd', updateHeight)
        }
    }, 100)

    // ✔ 리사이즈 / 로드 대응
    window.addEventListener('load', updateHeight)
    window.addEventListener('resize', updateHeight)
}) //autoHeight

/* =========================
EmailJS
========================= */
emailjs.init("l7tC6WstqwN_a1V7_");

const form = document.getElementById('contact-form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    // honeypot
    if (form.company.value) return

    emailjs.sendForm(
        'service_7e15eot',
        'template_o35122b',
        form
    ).then(() => {
        alert('메일 전송 완료')
    form.reset()
    }, () => {
        alert('전송 실패')
    })
}) //EmailJS

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
EmailJS
========================= */
emailjs.init("l7tC6WstqwN_a1V7_");

const form = document.getElementById('contact-form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    // honeypot
    if (form.company.value) return

    emailjs.sendForm(
        'service_7e15eot',
        'template_o35122b',
        form
    ).then(() => {
        alert('메일 전송 완료')
    form.reset()
    }, () => {
        alert('전송 실패')
    })
}) //EmailJS

/* =========================

========================= */
