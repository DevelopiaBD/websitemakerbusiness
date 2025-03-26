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
});

const abb = document.querySelector(".aboutOurTrust");



const pointDivAll = document.querySelectorAll(".pointDiv");
pointDivAll.forEach((ponits, i)=>{
    ponits.setAttribute("data-ride", i);

})



window.addEventListener("scroll", ()=>{

    console.log(abb.scrollHeight);
    const a = window.scrollY;
    const b = abb.scrollHeight;

    if(a===b){alert("Yes")}

    console.log(a-b === window.screen.availHeight);
    
    
    pointDivAll.forEach((points, i)=>{

        const ab = points.getAttribute("data-ride");

            if((a-b) < window.screen.availHeight - 100){

            }
     
    })
    
    console.log(window.screen.height < 300);
    console.log(window.scrollY)
    console.log("avaivlae Avaivalbe Height "+ window.screen.availHeight)
    console.log("avaivlae Height "+ window.scrollY)
    console.log(a-b);
        // document.querySelector("body").style.backgroundColor="red"
    
})
   
    