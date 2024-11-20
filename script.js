const navItems = document.querySelector(".nav-items");
console.log(navItems)


// open close menu in small screen
function openmenu(){
    navItems.style.right = "0%";
}

function closemenu(){
    navItems.style.right = "-70%";
}


// dark mode handle

const modeBtn = document.querySelector("#check");
let container = document.querySelector(".container");
let nav = document.querySelector("nav");
let logospan = document.querySelectorAll(".span-logo");
let herosection = document.querySelector(".hero-section");
let darktext = document.querySelectorAll(".dark-txt");
let contactSection = document.querySelector("#contact-page");
let projectSection = document.querySelector(".project-section");
let skillSection = document.querySelector(".skill-section");
let contactinput = document.querySelectorAll(".input");
let navItem = document.querySelector(".nav-items");
let button = document.querySelectorAll(".button");

let darkmode = true;
modeBtn.addEventListener("click" , (event)=>{
    if(darkmode == true){
             container.style.backgroundColor = "#f0f8ff";
             container.style.color = "black";
             nav.classList.add("active");
             logospan.forEach((e)=>{
                e.classList.add("active");
             })

             herosection.classList.add("active");

             darktext.forEach((event)=>{
                event.classList.add("active");
                event.style.fontWeight = "800";
             })

             skillSection.classList.add("active")
             projectSection.classList.add("active")
             contactSection.classList.add("active")

             contactinput.forEach((event)=>{
                event.classList.add("active")
             })


             button.forEach((btn)=>{
               btn.classList.add("active");
             })

             navItem.classList.add("active");
             darkmode = false;
    }
    else{
        container.style.backgroundColor = "black";
        container.style.color = "white";
        nav.classList.remove("active");
        logospan.forEach((e)=>{
            e.classList.remove("active");
         })
         herosection.classList.remove("active");
         
         darktext.forEach((event)=>{
            event.classList.remove("active");
         })

         skillSection.classList.remove("active")
         projectSection.classList.remove("active")
         contactSection.classList.remove("active")

         contactinput.forEach((event)=>{
            event.classList.remove("active")
         })

         button.forEach((btn)=>{
            btn.classList.remove("active");
          })


          navItem.classList.remove("active");
        darkmode = true;
    }
})