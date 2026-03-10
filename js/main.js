fetch('./datas/project.json')
    .then(res=>res.json())
    .then(data=>{
        const list=document.getElementById('projects')
        data.forEach(item=>{
            const html=`
                <div class="c-card">
                <span class="c-badge">${item.company}</span>
                <h4>${item.project}</h4>
                <p>${item.period}</p>
                <p>${item.tech}</p>
                </div>

            `
            list.insertAdjacentHTML('beforeend',html)
        })
})



fetch('./datas/history.json')
    .then(res=>res.json())
    .then(data=>{
        const list=document.getElementById('history')
        data.forEach(item=>{
            const html=`
                <div class="c-card">

                <span class="c-badge">${item.year}</span>

                <h4>${item.company}</h4>

                <p>${item.project}</p>

                </div>
            `
            list.insertAdjacentHTML('beforeend',html)
        })
})