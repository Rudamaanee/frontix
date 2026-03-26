fetch('./datas/timeline.json')
.then(res => res.json())
.then(data => {
    renderProjects(data)
    renderCompanies(data)
    renderTimeline(data)
})

function renderProjects(data){
    const list = document.getElementById('project')
    data.forEach(year => {
        year.items
            .filter(item => item.major === true)
            .forEach(item => {
                const html = `
                <div class="project-wrap">
                    <div class="${item.logo || ''}">${item.client}</div>
                    <div class="company">${item.company || ''}</div>
                    <p class="project">${item.project}</p>
                    <p class="period">${item.period || ''}</p>
                    <p class="meta">${item.role || ''}</p>
                </div>
                `
                list.insertAdjacentHTML('beforeend', html)
            })
    })
}//projects

function renderCompanies(data){
    const companies = document.getElementById('companies')
    const companySet = new Set()
    data.forEach(year => {
        year.items.forEach(item => {
            if(companySet.has(item.client)) return
            companySet.add(item.client)
            const html = `
            <swiper-slide class="${item.logo || ''}">
                ${item.client}
            </swiper-slide>
            `
            companies.insertAdjacentHTML('beforeend', html)
        })
    })
} //companies

function renderTimeline(data){
    const container = document.getElementById('timeline')
    data.forEach(yearData => {
        let yearHtml = `
        <swiper-slide class="timeline-year">
            <div class="year"><span>${yearData.year}</span></div>
            <div class="item-wrap">
        `
        yearData.items.forEach(item => {
            yearHtml += `
            <div class="timeline-item"
                data-client="${item.client}"
                data-logo="${item.logo}"
                data-project="${item.project || ''}"
                data-period="${item.period || ''}"
                data-contribution="${item.contribution || ''}"
                data-tech="${item.tech || ''}"
                data-role="${item.role || ''}"
            >
                <div class="${item.logo || ''}">${item.client}</div>
                <p class="project">${item.project}</p>
                <p class="tech">${item.tech}</p>
            </div>
            `
        })
        yearHtml += `</div></swiper-slide>`
        container.insertAdjacentHTML('beforeend', yearHtml)
    })
    bindModalEvent() // 👉 반드시 실행
} //timeline

function bindModalEvent(){
    const modal = document.getElementById('modal')
    const closeBtn = document.querySelector('.modal .close')
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('click', () => {
            // 공통 처리 함수
            const toggleField = (id, value) => {
                const el = document.getElementById(id)
                const section = el.closest('.modal-section')
                if(value && value.trim() !== '' && value !== 'undefined'){
                    el.innerText = value
                    if(section) section.style.display = 'block'
                } else {
                    if(section) section.style.display = 'none'
                }
            }
            
            // ✔ p 태그에 class + 텍스트 같이 적용
            const clientEl = document.getElementById('modal-client')

            clientEl.className = item.dataset.logo || '' // class 추가
            clientEl.innerText = item.dataset.client || '' // 텍스트

            document.getElementById('modal-project').innerText =
                item.dataset.project || ''
            // period (값 없으면 숨김)
            const periodEl = document.getElementById('modal-period')
            if(item.dataset.period && item.dataset.period.trim() !== ''){
                periodEl.innerText = item.dataset.period
                periodEl.style.display = 'block'
            } else {
                periodEl.style.display = 'none'
            }
            // 나머지 필드
            toggleField('modal-contribution', item.dataset.contribution)
            toggleField('modal-tech', item.dataset.tech)
            toggleField('modal-role', item.dataset.role)
            modal.style.display = 'block'
        })
    })
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
    modal.addEventListener('click', (e) => {
        if(e.target === modal){
            modal.style.display = 'none'
        }
    })
} //modal