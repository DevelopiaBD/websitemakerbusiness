const toggle = document.querySelector(".toggle");
const navlinks = document.querySelector(".navlinks");
const links = document.querySelectorAll(".links");
const imageSampleCover = document.querySelectorAll(".imageSampleCover");

console.log(imageSampleCover);



toggle.addEventListener("click", ()=>{
    navlinks.classList.toggle("active");

    if(toggle.className==="toggle active"){
        toggle.classList.remove("active");
    }else{
        toggle.classList.add("active");
    }
    
});


// function changeColor() {
//     // Set a new color for --vioL variable
//     setTimeout(() => {
//         document.documentElement.style.setProperty('--vioL', '#1c7c54');
//     }, 1000); 
// }

// changeColor()


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

const imagesAllDiv = document.querySelector(".imagesAllDiv")

document.addEventListener("DOMContentLoaded", ()=>{
    imageSampleCover.forEach((image, i)=>{        
        image.setAttribute("data-ride", i);
        // imagesAllDiv.style.transform=`translateX(${i* -100}%)`
    })
})