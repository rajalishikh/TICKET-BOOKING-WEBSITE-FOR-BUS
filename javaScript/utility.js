// find idValue
function findId(element){
    let x=document.getElementById(element).innerText
    
    let y=parseInt(x)
    return y
   

}
// set value 
function setId(element,value){
    let x=document.getElementById(element)
    console.log("set value",x)
    x.innerText=value

}