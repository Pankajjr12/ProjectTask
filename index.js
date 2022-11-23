const one=document.getElementById("page-one")
const two=document.getElementById('page-second')
const three=document.getElementById('page-three')
const four=document.getElementById('page-four')
const divOne=document.getElementsByClassName("div-one")
const divSecond=document.getElementsByClassName("div-second")

function myClicks()
{
one.addEventListener('click',()=>{
    if (divOne.style.visibility === 'visible') {
    divOne.style.visibility = 'visible' 
    divSecond.style.visibility = 'hidden' 
    divThree.style.visibility = 'hidden' 
    divFour.style.visibility = 'hidden' 
    }
    else{
        divSecond.style.visibility = 'hidden' 
        divThree.style.visibility = 'hidden' 
        divFour.style.visibility = 'hidden'  
    }
})
}
two.addEventListener('click',()=>{
    if (divSecond.style.visibility === 'visible') {
    divSecond.style.visibility = 'visible' 
    divOne.style.visibility = 'hidden' 
    divThree.style.visibility = 'hidden' 
    divFour.style.visibility = 'hidden' 
    }
    else{
        divOne.style.visibility = 'hidden' 
        divThree.style.visibility = 'hidden' 
        divFour.style.visibility = 'hidden'  
    }
})

three.addEventListener('click',()=>{
    if (divThree.style.visibility === 'hidden') {
    divThree.style.visibility = 'visible' 
    divSecond.style.visibility = 'hidden' 
    divOne.style.visibility = 'hidden' 
    divFour.style.visibility = 'hidden' 
    }
    else{
        divSecond.style.visibility = 'hidden' 
        divOne.style.visibility = 'hidden' 
        divFour.style.visibility = 'hidden'  
    }
})

four.addEventListener('click',()=>{
    if (divFour.style.visibility === 'hidden') {
    divFour.style.visibility = 'visible' 
    divSecond.style.visibility = 'hidden' 
    divThree.style.visibility = 'hidden' 
    divOne.style.visibility = 'hidden' 
    }
    else{
        divSecond.style.visibility = 'hidden' 
        divThree.style.visibility = 'hidden' 
        divOne.style.visibility = 'hidden'  
    }
})
