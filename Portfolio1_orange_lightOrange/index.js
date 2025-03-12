const toggle = document.querySelector(".toggle");
const navlinks = document.querySelector(".navlinks");
const links = document.querySelectorAll(".links");

toggle.addEventListener("click", ()=>{
    navlinks.classList.toggle("active");

    if(toggle.className==="toggle active"){
        toggle.classList.remove("active");
    }else{
        toggle.classList.add("active");
    }
    
});





links.forEach(link=>{
    link.addEventListener("click", ()=>{
        navlinks.classList.remove("active");
        toggle.classList.remove("active");

    })
})


// const cardiv = document.querySelector(".cardiv");
// let text = document.querySelector(".text").innerHTML;

// console.log(text.length);
// console.log(text.trim().substring(0, 4));
