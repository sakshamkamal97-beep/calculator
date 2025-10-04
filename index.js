const display=document.getElementById("display");
const expression=document.getElementById("expression");

let currExp="";
let lastInputisOperator=false;

document.addEventListener("keydown",(event)=>{
    const key = event.key;
    if(!isNaN(key) || key === "."){
        appendnumber(key);
    }else if(['+','-','*','/','%'].includes(key)){
        appendOperator(key);
    }else if(key==="="){
        calculate();
    }else if(key === "Backspace" || kay === "DEL"){
        deletelast();
    }else if(key==="AC"){
        clearDisplay();
    }
});

function appendnumber(key){
    //if last input was operator clear the main display
    if(lastInputisOperator){
        display.innerHTML = "";
        lastInputisOperator=false;
    }

    currExp+=key;
    display.innerHTML += key;
}

function appendOperator(key){
    if(display.innerHTML === '' || currExp === '') return

    expressionDisplay += currExp +' '+ `${key}`;
    currExp+=key;
    display.innerHTML='';
    
}

function deletelast(){
    n = currExp.lenght;
    currExp=currExp.substring(0,n-1);
    display.innerHTML=display.innerHTML.slice(0,-1);
}

function clearDisplay(){
    display.innerHTML='';
    currExp='';
    expressiondisplay.innerHTML='';
    lastInputisOperator=false;
}