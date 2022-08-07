let hambuger=document.querySelector(".ham");
let mobilenav=document.querySelector(".links");
console.log(hambuger)
console.log(mobilenav);
hambuger.addEventListener("click", (e)=>{
    mobilenav.classList.toggle("show")
})