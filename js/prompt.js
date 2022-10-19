console.log('content added');
// alert('kmn aco')
const showAlert = () =>{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        alert('Low number')
    }
}

const Asak = () => {
    const decision = confirm('are you coming picnic')
    console.log(decision);
    if(decision == true){
        alert('500 tk bikash kor')
    }
    else{
        console.log('DGM!!');
    }
}

const userInfo = () =>{
   const name = prompt('Tell us your name')
   console.log(name);
   if(!!name){
    console.log('welcome here', name);
   }
}