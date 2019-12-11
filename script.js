let c = console.log

// c(document.title)
// c(document.charset)
// c(document.scripts)
// c(document.styleSheets)



// c(document.links)
// c(document.images)
// c(document.getSelection())
// c(document.getSelection().anchorNode.data)
// c(document.getSelection().toString())


// c(document.getElementById('title'))
// const title = document.getElementById('title')
// title.style.background = 'green'

// const title2 = document.querySelector('#title')
// c(document.querySelector('h1'))
// c(title)
// c(title2)

// const listItems = document.querySelectorAll('ul li')
// c(listItems)
// c(listItems[0])
// c(listItems[1])
// c(listItems[2])

// const secondItem = document.querySelector('ul li:nth-child(2)')
// c(secondItem)

// const list = document.getElementById('list')
// c(list)
// c(list.querySelectorAll('li'))
// c(list.querySelector('li:last-child'))



// const elementList = document.getElementsByTagName('li')
// c(elementList)

const nodeList = document.querySelectorAll('li')
c(nodeList)
// nodeList.map(el => el.style.background = 'gray')
for (let el of nodeList){
    if(el.textContent.trim().toUpperCase() === 'OBJECT'){
        el.remove()
    }
}

const nodeListToArray = [...document.querySelectorAll('li')]
nodeListToArray.map(el => el.style.background = 'gray')

const nodeListToArrayPrototype = Array.from(document.querySelectorAll('li'))
nodeListToArrayPrototype.map(el => el.style.background = 'lightgray')
// nodeListToArrayPrototype.map(el => {
//     if(el.textContent.trim().toUpperCase() === 'OBJECT'){
//         el.remove()
//     }
// })