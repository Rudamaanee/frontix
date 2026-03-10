fetch('./datas/project.json')

.then(res=>res.json())

.then(data=>{

const list=document.getElementById('projects')

data.forEach(item=>{

const html=`

<div class="project">

<h4>${item.company}</h4>

<p>${item.project}</p>

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

<div class="timeline-item">

<strong>${item.year}</strong>

<p>${item.company}</p>

<p>${item.project}</p>

</div>

`

list.insertAdjacentHTML('beforeend',html)

})

})