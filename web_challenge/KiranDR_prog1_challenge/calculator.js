function getnumber(num){
 let input_var=document.getElementById('input');
 input_var.value += num;
}

//code to clearscreen
function clearscreen(){
  document.getElementById('input').value="";
  document.getElementById('answer').value="";
}

//get the mathamatical sign
function getoperand(operand){
  let dotoperator='';
  let input_var=document.getElementById('input');
  let checkdots='';
  checkdots=input_var.value;
  if(operand != '+/-'){
    input_var.value +=operand
  }else{
    if(input_var.value!=''){
      input_var.value += '-' + input_var.value;
    }
  }
}

//for clear the screen
function backspace(){
  document.getElementById('input').value="";
  document.getElementById('answer').value="";
}

function backspace(){
  let input_var=document.getElementById('input');
  let x=input_var.value;
  if(x.length>0){
    x=x.substring(0,x.length-1);
    input_var.value=x;
  }
}

function compute(){
  let input_var=document.getElementById('input');
  ans= parseFloat(+eval(input_var.value).toFixed(2));
  document.getElementById('answer').value='='+ ans;
}
 
var i=0;
 
function brackets(){ 
  let input_var=document.getElementById('input');
  if(i==0){
    input_var.value +='(';
    i=1;
  }else if (i==1){
    input_var.value +=')';
    i=0;
}
}