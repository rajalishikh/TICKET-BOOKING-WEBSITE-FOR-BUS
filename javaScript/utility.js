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
function removeClass(element){
    let x=document.getElementById(element)
    x.classList.remove('hidden')
}
