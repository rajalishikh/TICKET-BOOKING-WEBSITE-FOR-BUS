let sits= document.getElementsByClassName('button1')
let  count=0;
let sit_buy_count=0
let array_clicked=[]




for(let sit of sits){
    // set the background color 
    

   sit.addEventListener('click',function(e){
   
      this.disabled=true;
      
  
  
       let x=e.target.innerText
       array_clicked.push(x)
       console.log("array",array_clicked)
      //  find number input
      let number_input=document.getElementById('Number_section')

      number_input.addEventListener('keyup',function(event){
        let x=event.key
        console.log(x)
        if (!isNaN(x) && x.trim() !== "" ) {
          removeClass2('222')
      }

      })
      
     // limitation
       if(array_clicked.length <= 4){
        
        let FindClass=e.target;
        FindClass.classList.add('bg-lime-500','text-slate-50')
        // End the background color 
        // how much seat here 
        count=count+1;
    
        let find_total_sit=findId('total_sit_40')
        
        let at_least_sit=find_total_sit-count;
        
        setId('total_sit_40',at_least_sit)
        count=''
        // how much seat here end 
    
        // how much sit you buy
        sit_buy_count=sit_buy_count+1
        setId('buying_total_sit',sit_buy_count)
        // crete sit name price and class
    
        let find_container=document.getElementById('total_name_Price')
        let find_container1=document.createElement('p')
        find_container1.innerText=x
        find_container.appendChild(find_container1)
        // element 2
        let find_container2=document.createElement('p')
        find_container2.innerText='Economoy'
        find_container.appendChild(find_container2)
        // element 3
        let find_container3=document.createElement('p')
        find_container3.innerText='550'
        find_container.appendChild(find_container3)
        // set the total price 
    
        let find_the_total_price=findId('total_price_adding')
        let find_value=find_container3.innerText
        let the_total_price=parseInt(find_value)
       
        let adding_total_price=find_the_total_price+the_total_price
        // set total price 
        setId('total_price_adding',adding_total_price)
        setId('grand_total',adding_total_price)
        if(array_clicked.length == 4){
            removeClass('Applying_button')
        }
        
      }


      else{
        return alert("Your limit is over")
      }

  
     
   })
  
}

// discount part 
function Applying_discount(){
  let find_cupon_applying=document.getElementById('input_of_cupon')
  console.log(find_cupon_applying)
  if(find_cupon_applying.value === 'NEW15'){
    let find_grand_total=findId('grand_total')
    let value=find_grand_total *(15/100)
    let value_after_discount=find_grand_total-value
    setId('grand_total',value_after_discount)
    addClassList('cupon_div')

  }else if(find_cupon_applying.value === 'Couple 20'){
    let find_grand_total=findId('grand_total')
    let value=find_grand_total *(20/100)
    let value_after_discount=find_grand_total-value
    setId('grand_total',value_after_discount)
    addClassList('cupon_div')


  }else{
    alert('Please provide valid coupon code')
  }
  

}

function click_next(){
  addClassList('main_part')
  removeClass("sub_cart")


}





