// practice = 1.

setTimeout(() => {
    console.log('Delayed for 3 second.');
  }, 3500)

  // practice = 2.
  // prompt

document.getElementById("prompt").addEventListener("click", () => {
    const input = prompt("Enter a number");
    const number = Number(input);
    if (number > 0) {
      alert(`Your Number is : ${number + 200}`);
    } else {
      alert("Please Enter a Number");
    }
  });
  
 // practice = 3.

  // confirm
  
  document.getElementById("confirm").addEventListener("click", () => {
    const isWant = confirm("Are You Sure?");
    if (isWant) {
      document.getElementById("output").innerText = document.location.href;
    } else {
      document.getElementById("output").innerText = "Dure Giya Mor";
    }
  });
  
  // ----------------------------------------
  
  document.getElementById('submit').addEventListener('click',()=>{
    const productNameInput = document.getElementById('product__name')
    const productPriceInput = document.getElementById('product__price')
    const productName = productNameInput.value
    const productPrice = productPriceInput.value
  })

   // practice = 4.

   //what is cookies??

  //  Cookies are some files stored in the cache memory of your internet browser. When you visit different websites, these cookies are saved on your computer. Basically, the websites you visit are stored on your computer.


   // practice = 5.

   // What Is Local Storage?

  //Local storage maintains data across all instances of a site, whether they're in different tabs or windows. It is also permanent, so the data won't disappear when you close your browser.

  
    //What Is Session Storage?

    //A browsing session approximates your use of a website. If you visit a site, browse around for a bit, then turn off your computer, you can think of that time as a single session. Your browser configuration may change this in subtle ways, but a session aims to represent the chunk of time you interact with a site.

    //Session storage is unique to each browser tab. If you open a new tab and navigate to the same site, you'll start a new session with its own storage. However, if you use a "duplicate tab" feature in your browser, that may reuse the same session. You can't rely too much on the specific details of a "session". Instead, focus on the core concept: session storage is temporary.