// find idValue
function findId(element){
    let x=document.getElementById(element).innerText
    
    let y=parseInt(x)
    return y
   

}
// set value 
function setId(element,value){
    let x=document.getElementById(element)
    
    x.innerText=value

}
// remove class list 
function removeClass(element){
    let x=document.getElementById(element)
    x.classList.remove('hidden')
}
// add class list 
function addClassList(element){
    let x=document.getElementById(element)
    x.classList.add('hidden')
}
function removeClass2(element){
    let x=document.getElementById(element)
    x.classList.remove('disabled')
}

