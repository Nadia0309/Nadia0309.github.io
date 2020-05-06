window.addEventListener('load',function(){
let mybutton = document.querySelector('#myButton');
  console.log(mybutton);   
    
mybutton.addEventListener('click',function(){
    let num1 = parseInt(document.querySelector('#firstNumber').value); //celoe chislo,a ne stroka
    let num2 = parseInt(document.querySelector('#secondNumber').value);
    let operator = document.querySelector('select').value;
    const resultDiv = document.querySelector("#result");
    //console.log( num1 + operator + num2);
    let result;
    if(operator == "+"){
        console.log(addition(num1,num2));
        addition(num1,num2);
       
        } else if( operator == "-"){
                 substraction(num1,num2);
        } else if (operator == "*"){
                   multi(num1,num2);
                console.log(multi(num1,num2));
        }else{
                divi(num1,num2);  
            
        }
    
    function addition(n1,n2){
        
        return result = n1 + n2;
        
    }
    function substraction(n1,n2){
        
        return result = n1 - n2; //return - end of a function 
    }
    function multi (n1,n2){
       return result = n1 * n2;
        
    }
    function divi(n1,n2){
         return result =n1 / n2;
        
    }
    console.log (result)
    resultDiv.innerHTML = result;
    
})
document.querySelector                          
})