fetch('./datas/project.json')
.then(res=>res.json())
.then(data=>{
const list=document.getElementById('projects')
    data.forEach(item=>{
    const html=`
        <div class="project-wrap">
            <h4>${item.company}</h4>
            <p>${item.project}</p>
            <p>${item.period}</p>
            <p>${item.tech}</p>
        </div>
    `
    list.insertAdjacentHTML('beforeend',html)
    })
}) //project

fetch('./datas/timeline.json')
    .then(res => res.json())
    .then(data => {
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
                <div class="logo ${item.class}">${item.client}</div>
                <p class="project">${item.project}</p>
                <p class="tech">${item.tech}</p>
            </div>
            `
        })
        yearHtml += `</div></swiper-slide>`
        container.insertAdjacentHTML('beforeend', yearHtml)
    })
}) //timeline

