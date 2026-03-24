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
swipe autoHeight
========================= */
