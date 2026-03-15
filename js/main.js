// fetch('./datas/timeline.json')
// .then(res=>res.json())
// .then(data=>{
// const list=document.getElementById('projects')
//     year.items.forEach(item=>{
//     const html=`
//         <div class="project-wrap">
//             <div class="logo ${item.class}">${item.client}</div>
//             <div class="company">${item.company}</div>
//             <p class="project">${item.project}</p>
//             <p class="period">${item.period}</p>
//             <p class="tech">${item.tech}</p>
//         </div>
//     `
//     list.insertAdjacentHTML('beforeend',html)
//     })
// }) //project

// fetch('./datas/timeline.json')
// .then(res => res.json())
// .then(data => {
//     const companies = document.getElementById('companies')
//     data.forEach(year => {
//         year.items.forEach(item => {
//             const logoClass = item.class || ''
//             const html = `
//             <swiper-slide class="logo ${logoClass}">
//                 ${item.client}
//             </swiper-slide>
//             `
//             companies.insertAdjacentHTML('beforeend', html)
//         })
//     })
// })//companies

// fetch('./datas/timeline.json')
//     .then(res => res.json())
//     .then(data => {
//         const container = document.getElementById('timeline')
//         data.forEach(yearData => {
//         let yearHtml = `
//             <swiper-slide class="timeline-year">
//             <div class="year"><span>${yearData.year}</span></div>
//             <div class="item-wrap">
//         `
//         yearData.items.forEach(item => {
//             yearHtml += `
//             <div class="timeline-item">
//                 <div class="logo ${item.class}">${item.client}</div>
//                 <p class="project">${item.project}</p>
//                 <p class="tech">${item.tech}</p>
//             </div>
//             `
//         })
//         yearHtml += `</div></swiper-slide>`
//         container.insertAdjacentHTML('beforeend', yearHtml)
//     })
// }) //timeline

fetch('./datas/timeline.json')
.then(res => res.json())
.then(data => {
    renderProjects(data)
    renderCompanies(data)
    renderTimeline(data)
})

function renderProjects(data){
    const list = document.getElementById('projects')
    data.forEach(year => {
        year.items
            .filter(item => item.major === true)
            .forEach(item => {
                const html = `
                <div class="project-wrap">
                    <div class="${item.class || ''}">${item.client}</div>
                    <div class="company">${item.company || ''}</div>
                    <p class="project">${item.project}</p>
                    <p class="period">${item.period || ''}</p>
                    <p class="tech">${item.tech || ''}</p>
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
            <swiper-slide class="${item.class || ''}">
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
            <div class="timeline-item">
                <div class="${item.class || ''}">${item.client}</div>
                <p class="project">${item.project}</p>
                <p class="tech">${item.tech}</p>
            </div>
            `
        })
        yearHtml += `</div></swiper-slide>`
        container.insertAdjacentHTML('beforeend', yearHtml)
    })
} //timeline