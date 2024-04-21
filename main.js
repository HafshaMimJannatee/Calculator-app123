let outputScreen=document.querySelector("#output-screen")

function display(num){
  outputScreen.value+=num;
}

function clr(){
  outputScreen.value='';
}

function del() {
  outputScreen.value=outputScreen.value.slice(0,-1);
}

function calculate() {
  if (outputScreen.value!=0) {
    try {
      outputScreen.value=eval(outputScreen.value)
    }catch(err){
      alert('Invalid Number')
    }
  }
}

