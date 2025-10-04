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
        display.value = "";
        lastInputisOperator=false;
    }

}