'use strict'

/*Cuando hago Mouseenter en h2 ADD isVisible a Wrapper-img
Cuando hago MouseLeave en h2 REMOVE isVisible*/

const names = document.querySelectorAll('.Main-h')
const images = document.querySelectorAll('.Wrapper-img')

console.log(images)
console.log(names)

names.forEach(function( eachName , i){
    names[i].addEventListener(`mouseenter` , function(e){
        images[i].classList.add('isVisible')
        
    })
    names[i].addEventListener(`mouseleave` , function(e){
        images[i].classList.remove('isVisible')
        
    })
})