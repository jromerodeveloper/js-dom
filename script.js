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







const parent = document.getElementById('parent')
c(parent)