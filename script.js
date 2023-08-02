let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let string = " ";
let arr = Array.from(buttons); 
arr.forEach(button=>{
 button.addEventListener("click", (el)=>{
  
    if(el.target.innerText === '='){
        string = eval(string);
     
    }else if(el.target.innerText == "AC"){
        string = "";
       
    }else if(el.target.innerText == "DEL"){
        string = string.substring(0, string.length-1);
      
    }else{
        string+=el.target.innerText;
        
    }
    input.value = string;
 })
});