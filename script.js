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

// const nodeList = document.querySelectorAll('li')
// c(nodeList)
// // nodeList.map(el => el.style.background = 'gray')
// for (let el of nodeList){
//     if(el.textContent.trim().toUpperCase() === 'OBJECT'){
//         el.remove()
//     }
// }

// const nodeListToArray = [...document.querySelectorAll('li')]
// nodeListToArray.map(el => el.style.background = 'gray')

// const nodeListToArrayPrototype = Array.from(document.querySelectorAll('li'))
// nodeListToArrayPrototype.map(el => el.style.background = 'lightgray')
// // nodeListToArrayPrototype.map(el => {
// //     if(el.textContent.trim().toUpperCase() === 'OBJECT'){
// //         el.remove()
// //     }
// // })




// const title = document.getElementById('title')
// c(title.getAttribute('id'))
// c(title.getAttribute('class'))
// c(title.getAttribute('value'))

// const title2 = document.getElementById('title2')
// if(title2){
//     title2.style.background = 'yellow'
// }
// c('Hola mundo')

// const parrafo = document.querySelector('p')
// // parrafo.setAttribute('id','parrafo')
// parrafo.id = 'parrafo'
// c(parrafo)
// c(parrafo.classList)
// parrafo.classList.add('contenido','mainParrafo')
// parrafo.classList.remove('contenido','mainParrafo')
// parrafo.classList.toggle('contenido')
// c(parrafo.id)

// const campo = document.querySelector('input')
// c(campo.value)




// const title = document.querySelector('h1')
// c(title.textContent)
// c(title.innerHTML)
// c(title.outerHTML)
// // title.textContent = 'Hola mundo <em>cruel</em>'
// title.innerHTML = `Hola mundo <em>cruel</em>`



// const usuario = document.createElement('p')
// // usuario.textContent = 'Bienvenidos Usuarios'
// usuario.innerHTML = `<em>usuarios</em>`
// usuario.classList.add('users')
// usuario.id = 'usuario'

// // document.body.appendChild(usuario)

// const containerBienvenida = document.getElementById('contenedor-bienvenida')
// if(containerBienvenida && containerBienvenida.querySelector('span')){
//     containerBienvenida.querySelector('span').appendChild(usuario)
// }




// // document.querySelector('h1').onclick
// const title = document.getElementById('title')
// // title.addEventListener('click', () => {
//     //alert('hola mundo')
// // })
// // const holaMundo = () => alert('Hola mundillo')
// // title.addEventListener('click',holaMundo)
// // document.getElementById('saludar').addEventListener('click',holaMundo)

// // const holaMundo = text => alert(text)
// // title.addEventListener('click',()=>{
// //     holaMundo('El DOM')
// // })
// // document.getElementById('saludar').addEventListener('click',()=>{
// //     holaMundo('Bienvenidos amigos!')
// // })
// const holaMundo = e => c(e.target.textContent) 
// // title.addEventListener('click',e => {
// //     holaMundo(e)
// // })
// // document.getElementById('saludar').addEventListener('click', e => {
// //     holaMundo(e)
// // })

// // title.addEventListener('dblclick', e => {
// //     holaMundo(e)
// // })

// // title.addEventListener('mouseenter', e => {
// //     holaMundo(e)
// // })

// // title.addEventListener('mouseleave', e => {
// //     holaMundo(e)
// // })

// // const createMenu = e => {
// //     const menu = document.createElement('div')
// //     const prevMenu = document.getElementById('context-menu')
// //     menu.id = 'context-menu'
// //     menu.textContent = 'Soy un menu contextual'

// //     if(prevMenu)
// //         document.body.removeChild(prevMenu)
// //         document.body.appendChild(menu)

// //     menu.style.padding = '1em'
// //     menu.style.background = '#eee'
// //     menu.style.position = 'fixed'
// //     menu.style.top = `${e.pageY}px`
// //     menu.style.left = `${e.pageX}px`
// // }
// // document.addEventListener('contextmenu', e => {
// //     // holaMundo(e)
// //     // c(e)
// //     // c(e.pageX, e.pageY)
// //     createMenu(e)
// //     e.preventDefault()
// // })

// // title.addEventListener('mousedown', e => {
// //     c('estoy arrastrando un elemento')
// // })

// // title.addEventListener('mouseup', e => {
// //     c('estoy arrastrando un elemento')
// // })

// title.addEventListener('mousemove', e => {
//     c('estoy arrastrando un elemento')
// })





const input = document.getElementById('input')

// input.addEventListener('keyup', e => {
//     c(e.key)
//     c(e.ctrlKey)
//     c(e.altKey)
// })

// addEventListener('keydown', e => {
//     if(e.key === 'a' && e.ctrlKey === true){
//         e.preventDefault()
//         alert('CTR A')
//     }
// })

// let x = 0, y = 0
// addEventListener('keydown', e => {
//     const ball = document.getElementById('ball')
//     const move = direction => {
//         switch (direction) {
//             case 'up':
//                 y--
//             break;
//             case 'down':
//                 y++
//             break
//             case 'left':
//                 x--
//             break
//             case 'right':
//                 x++
//             break
//             default:
//                 break;
//         }
//         ball.style.transform = `translate(${x*20}px,${y*20}px)`
//     }

//     switch (e.key) {
//         case 'ArrowUp':
//             move('up')
//         break;
//         case 'ArrowDown':
//             move('down')
//         break;
//         case 'ArrowLeft':
//             move('left')
//         break;
//         case 'ArrowRight':
//             move('right')
//         break;
//         default:
//             break;
//     }
// })






// const form = document.getElementById('form')
// form.addEventListener('submit', () => {
//     c('Ha enviado el formulario')
// })

// const rememberPassword = document.getElementById('remember-password')
// rememberPassword.addEventListener('change', e => {
//     // c(e)
//     if(e.target.checked){
//         c('El usuario quiere recordar su contraseña')
//     } else {
//         c('El usuario NO quiere recordar su contraseña')
//     }
// })

// const name = document.getElementById('name')
// name.addEventListener('blur', e => {
//     c(e)
// })
// name.addEventListener('focus', e => {
//     c(e)
// })

// form.addEventListener('reset', e => {
//     c(e)
// })





// addEventListener('DOMContentLoaded', () => {
//     // Espera que cargue lo basico del DOM 
//     const form =  document.getElementById('form')
//     form.addEventListener('submit', () => {
//         alert('Se ejecuta el DOMContentLoaded')
//     })  
// })

// addEventListener('load', () => {
//     // Espera hasta que termine de cargar TODO el contenido de página
//     const form =  document.getElementById('form')
//     form.addEventListener('submit', () => {
//         alert('Se ejecuta el LOAD')
//     })  
// })

// addEventListener('scroll', e => {
//     c(scrollX, scrollY)
// })

// addEventListener('resize', e => {
//     c(e.target.innerWidth, innerHeight)
//     c(outerWidth, e.target.outerHeight)
// })






// const video = document.getElementById('video'),
//       play = document.getElementById('play'),
//       pause = document.getElementById('pause')

// play.addEventListener('click', () => {
//     video.play()
// })
// pause.addEventListener('click', () => {
//     video.pause()
// //   play.click()
// })





// document.querySelectorAll('div').forEach(el => {
//     el.addEventListener('click', e => {
//         // c('click')
//         c(`Hiciste click en el div ${e.target.id}`)
//         e.stopPropagation()
//     })
// })

// const gallery = document.getElementById('gallery')
// gallery.addEventListener('click', e => {
//     const t = e.target,
//           images = Array.from(gallery.querySelectorAll('img')),
//           i = images.indexOf(t)
//     c(`Hiciste click en la imagen ${i + 1}`)
// })







// const parent = document.getElementById('parent'),
//       grandson = document.getElementById('grandson-2')
// // c(parent)
// // c(parent.children)
// // c(parent.querySelectorAll('div'))
// // c(parent.childNodes)
// // c(parent.firstChild)
// // c(parent.firstElementChild)
// // c(parent.lastChild)
// // c(parent.lastElementChild)
// // c(parent.hasChildNodes())
// // c(grandson.previousSibling)
// // c(grandson.previousElementSibling)
// // c(grandson.nextElementSibling)
// // c(grandson.nextSibling)
// c(grandson.parentElement)
// c(grandson.parentNode)
// c(grandson.parentElement.parentElement)





// const parent = document.getElementById('parent')
// const newElement = document.createElement('h2')
// newElement.textContent = 'Soy un nuevo elemento'
// parent.appendChild(newElement)

// const childs = Array.from(parent.children)
// const childWithChilds = childs.filter( child => child.children.length > 0)[0]
// // c(childs.filter( child => child.hasChildNodes() ))
// c(childWithChilds)

// const childs2 = Array.from(parent.querySelectorAll('div'))
// const grandson3 = childs2.filter(child => child.textContent.trim() === 'Nieto 3')[0]
// c(childs2)
// c(grandson3)
// parent.insertBefore(newElement,grandson3)

// const parent = document.getElementById('parent'),
//       childs = Array.from(parent.children),
//       childParent = childs.filter( child => child.children.length > 0)[0],
//       grandSons = Array.from(childParent.children),
//       grandson3 = grandSons.filter(child => child.textContent.trim() === 'Nieto 3')[0]
//       newElement = document.createElement('h2')

// newElement.textContent = 'Este es un nuevo elemento'
// childParent.insertBefore(newElement,grandson3)






// const post = document.getElementById('post'),
//       postParagrahps = post.querySelectorAll('p'),
//       ad = document.createElement('div')

// ad.id = 'publicidad',
// ad.textContent = 'Publicidad'

// const getMiddleChild = element => {
//             const childs = element.children,
//                   l = childs.length,
//                   i = Math.floor(l / 2)
//             return childs[i]
//       }
// // c(getMiddleChild(post))

// const middleChild = getMiddleChild(post)
// post.insertBefore(ad,middleChild)





const parent = document.getElementById('parent'),
      ad = document.createElement('div')

ad.id = 'publicidad'
ad.textContent = 'publicidad'
// // parent.insertAdjacentElement('beforebegin',ad)
// // parent.insertAdjacentElement('afterend',ad)
// // parent.insertAdjacentElement('afterbegin',ad)
// parent.insertAdjacentElement('beforeend',ad)

// parent.insertAdjacentHTML('beforebegin',`<h2>Esto es HTML</h2>`)
// parent.insertAdjacentText('afterend','Esto es TEXTO')


// parent.replaceChild(ad, parent.children[0])


// parent.before(ad)
// parent.after(ad)
// parent.prepend(ad)
// parent.append(ad) 
// parent.children[0].replaceWith(ad)


// parent.children[0].remove()
// const cloneElement = parent.querySelector('h2').cloneNode(true)
// parent.before(cloneElement)





// const teachers = ['Jose', 'Francisco', 'Juan', 'Pedro', 'Gabriel', 'Jesus'],
//       teacherList = document.createElement('ul'),
//       teacherListContainer = document.getElementById('teacher-list'),
//       teacherListFragment = document.createDocumentFragment()

// teacherListContainer.appendChild(teacherList)
// for ( let teacher of teachers ) {
//     const li = document.createElement('li')
//     teacherListFragment.appendChild(li)
//     li.textContent = teacher
// }

// teacherList.appendChild(teacherListFragment)





// const template = document.getElementById('template'),
//       myNewTemplate = template.content.cloneNode(true),
//       content = document.getElementById('content')
      
// myNewTemplate.querySelector('h2').textContent = 'Prueba'
// myNewTemplate.querySelector('p').textContent = 'Este es un texto de prueba'
// content.appendChild(myNewTemplate)





// const title = document.querySelector('h1'),
//       description = document.querySelector('p')

// title.style.backgroundColor = 'yellow'
// description.style.textTransform = 'uppercase'


// const mediumBp = matchMedia('(min-width: 640px)')

// const changeColor = () => {
//     if(mediumBp.matches){
//         document.body.style.background = 'green'
//     }else{
//         document.body.style.background = 'orange'
//     }
// }
// addEventListener('DOMContentLoaded',changeColor)
// addEventListener('resize',changeColor)


// c(getComputedStyle(title).fontSize)
// c(getComputedStyle(description).fontSize)
// c(getComputedStyle(document.body).display)


// c(title.getBoundingClientRect())
// c(title.getBoundingClientRect().width)
// c(title.getBoundingClientRect().top)
// c(title.getBoundingClientRect().y)
// c(title.getBoundingClientRect().left)
// c(title.getBoundingClientRect().x)
// // img.naturalWidth
// // img.naturalHeight






// console.error()
// navigator.geolocation
// location.pathname
// history.go
// screen.availHeight

// alert('este es un alert')
// let userResponse = confirm('¿Estas seguro?')
// if(userResponse){
//     alert('El usuario esta seguro')
// } else {
//     alert('El usuario NO esta seguro')
// }
// let userAge = prompt('¿Cuál es tu edad?')
// alert(`La edad del usuario es ${userAge}`)
// window.open('https:lujo-studio.com', 'lujo', 'width=200,height=400')
// window.close()








// Probar responsive de una web
// const form = document.getElementById('form')
// if(form){
//     form.addEventListener('submit', () => {
//         let width = form.querySelector('#width'),
//             height = form.querySelector('#height'),
//             url = form.querySelector('#url')

//         if(width && height && url){
//             width = width.value
//             height = height.value
//             url = url.value
//         }

//         window.open(url,url,`innerWidth=${width},innerHeight=${height}`)
//     })
// }







// c(location.href)
// // location.href = 'https:lujo-studio.com'
// c(location.host)
// // const links = document.links
// // for(let link of links){
// //     if(link.href.includes(location.host)){
// //         link.style.background = 'yellow'
// //     }
// //     // if(!link.href.includes(location.host)){
// //     //     link.style.background = 'yellow'
// //     // }
// //     c(link)
// // }
// c(location.hostname)
// c(location.port)
// c(location.protocol)
// c(location.origin)
// c(location.hash)
// c(location.pathname)
// if(location.pathname.includes('cursos')){
//     documento.body.classList.add('cursos-page')
// }
// location.reload()
// location.assign('https://lujo-studio.com')
// location.replace('https://lujo-studio.com')








// c(history)
// c(history.length)
// history.forward()
// history.back()
// history.go(-2)
// c(navigator)





// setTimeout(() => {
//     alert('Hola mundo')
// },3000)

// let contador = 0
// const saludarMuchasVeces = setInterval(() => {
//     contador++
//     if(contador > 1) {
//         c(`Hola ${contador} veces`)
//     } else {
//         c('Hola 1 vez')
//     }

//     if(contador === 10){
//         clearInterval(saludarMuchasVeces)
//         alert('Suficientes saludos por hoy')
//     }
// }, 2000)

// c(new Date().toLocaleDateString())
// setInterval( () => {
//     const clock = document.getElementById('clock')
//     if(clock){
//         clock.textContent = new Date().toLocaleTimeString()
//     }
    
// },1000)








const now = new Date(),
      aniversario = new Date(2020,4,22,20,30,12),
      fecha = new Date('May 21 2020 18:20:12 GMT-0500')
c(now)
c(aniversario)
c(fecha)

c(new Date().getFullYear())
c(new Date().getMinutes())
c(new Date().getSeconds()) 
c(new Date().getDate())
c(new Date().getDay())
c(new Date().getMonth())

c(new Date().getTime())
const birthday = new Date(1992,9,7),
      actual = new Date(2019,12,22)
c(now - birthday)
const getSeconds = ms => Math.round(ms / 1000)
const getMinutes = ms => getSeconds(ms) / 60
const getHours = ms => getMinutes(ms) / 60
const getDays = ms => getHours(ms) / 24
const getMonths = ms => getDays(ms) / 30
const getYears = ms => getMonths(ms) / 12
const getYears2 = ms => Math.round(getDays(ms) / 365)
c(getMinutes(now - birthday))
c(getYears(now - birthday))
c(getYears2(now - birthday))

c(new Date().getTimezoneOffset()) //diferencia entre la zona horario internacional y la zona horaria actual