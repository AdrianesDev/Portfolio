const $btnMenu = document.getElementById('btn-menu')
const $nav = document.getElementById('nav')
const $backgroundMenu = document.getElementById('back_menu')
const $close = document.getElementById('close')

$btnMenu.addEventListener('click',()=>{
  // console.log("hola")
  $nav.style.right = '0px'
  $backgroundMenu.style.display = 'block'
  $close.style.display = 'block'
  $close.style.right = '69px'
  $close.style.top = '37px'

})

$backgroundMenu.addEventListener('click',()=>{
  $nav.style.right = '-500px'
  $backgroundMenu.style.display = 'none'
})

$close.addEventListener('click',()=>{
  $nav.style.right = '-500px'
  $backgroundMenu.style.display = 'none'
  $close.style.display = 'none'
})