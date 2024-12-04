let sits= document.getElementsByClassName('button1')
let  count=0;
let sit_buy_count=0
for(let sit of sits){
    // set the background color 
   sit.addEventListener('click',function(e){
    let FindClass=e.target;
    FindClass.classList.add('bg-lime-500','text-slate-50')
    // End the background color 
    // how much seat here 
    count=count+1;
    
    console.log(count)
    let find_total_sit=findId('total_sit_40')
    
    let at_least_sit=find_total_sit-count;
    console.log(at_least_sit)
   
    
    setId('total_sit_40',at_least_sit)
    count=''
    // how much seat here end 

    // how much sit you buy
    sit_buy_count=sit_buy_count+1
    setId('buying_total_sit',sit_buy_count)
    
    
    
   })
}

