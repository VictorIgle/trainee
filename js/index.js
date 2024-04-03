'use strict'

/*Cuando hago Mouseenter en h2 ADD isVisible a Wrapper-img
Cuando hago MouseLeave en h2 REMOVE isVisible*/

const names = document.querySelectorAll('.Main-h')
const images = document.querySelectorAll('.Main-img')

names.forEach(( eachName , i)=>{
    names[i].addEventListener(`mouseenter` , (e)=>
        images[i].classList.add('isVisible')
        
    )
    names[i].addEventListener(`mouseleave` , (e)=>
        images[i].classList.remove('isVisible')
        
    )
})