
const checker = document.querySelector(".checker");
const prices = document.querySelectorAll(".price");

const annally = [199.99,249.99,399.99]
const monthly = [19.99,24.99,39.99]


function checkedfn(){
    for(let i = 0; i < prices.length; i++){
        prices[i].textContent = monthly[i]
       }  
}
function unchecedfn(){
    for(let i = 0; i < prices.length; i++){
        prices[i].textContent = annally[i]
       }     
}
checker.addEventListener('change', (e) =>{

    if (checker.checked) {
       checkedfn()
    } 
    else{
        unchecedfn()
          
    }
 
    
   
})
document.addEventListener("keydown", (e) =>{
    if(e.key == "Enter"){
        checker.checked = !checker.checked;
        if (checker.checked) {
            checkedfn()
        } 
        else{
            unchecedfn()     
        }
     
      
 }
})