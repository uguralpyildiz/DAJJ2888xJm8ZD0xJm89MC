






const nthAll = document.querySelectorAll("#nth a");
const dotLinkEffect = document.querySelector(".dot-link-effect");

function removeAllClass_fromNth() {
    const nthAll = document.querySelectorAll("#nth a");
    for (let i = 0; i < nthAll.length; i++) {
        dotLinkEffect.classList.remove("active" + i)
    }
}

for (let i = 0; i < nthAll.length; i++) {
    nthAll[i].addEventListener("click", () => {
        removeAllClass_fromNth()
        dotLinkEffect.classList.add("active" + i)
    })
}

for (let i = 0; i < nthAll.length; i++) {
    nthAll[i].addEventListener("mouseover", () => {
        for (let i = 0; i < nthAll.length; i++) {
            nthAll[i].style.opacity = ".30"
        }
        nthAll[i].style.opacity = "1"
    })

    nthAll[i].addEventListener("mouseout", () => {
        for (let i = 0; i < nthAll.length; i++) {
            nthAll[i].style.opacity = "1"
        }
    })
}

const menuBtn = document.querySelector(".menu-btn");
const navbarLinksM = document.querySelector(".nav-links");
const navLinkContainer = document.querySelector(".nav-link-container");
const downloadBtn = document.querySelector(".download-cv");
const overlay = document.querySelector(".overlay");



document.addEventListener("click", (e) => {
    target = e.target.parentNode;

    if (target === menuBtn) {
        navbarLinksM.classList.toggle("active-nav")
        overlay.style.display = "block";

        setTimeout(() => {
            navbarLinksM.classList.toggle("anim-navs")
        }, 100);
    }

    if (target != menuBtn && target != navLinkContainer && target != downloadBtn && target != navbarLinksM) {
        setTimeout(() => {
            navbarLinksM.classList.remove("active-nav")
        }, 100);
        navbarLinksM.classList.remove("anim-navs")
        overlay.style.display = "none";
    }

    if (e.target == overlay) {
        setTimeout(() => {
            navbarLinksM.classList.remove("active-nav")
        }, 100);
        navbarLinksM.classList.remove("anim-navs")
        overlay.style.display = "none";

    }
});


var swiper2 = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",

    initialSlide: 1,
    
    navigation: {
        nextEl: ".swiper-button-nexts",
        prevEl: ".swiper-button-prevs",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
});


function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.padding = "80px 10px";
        document.getElementById("logo").style.fontSize = "35px";
    }
}
const main = document.querySelector(".scroll-function")
const door = document.querySelector(".door-container")
window.addEventListener("scroll", (e) =>{
    console.log(document.documentElement.scrollTop);

    if (document.documentElement.scrollTop > 100) {
        main.style.transform = "scale(1.10)"
        
        door.style.transform = "translateX(600px)"
        

    } if (document.documentElement.scrollTop < 100) {
        main.style.transform = "scale(1.00)"
        door.style.transform = "translateX(0px)"
        
    }

    if (document.documentElement.scrollTop > 600) {
        main.style.transform = "scale(1.50)"
        main.style.opacity = "0"
        door.style.transform = "translateX(600px)"
        
        setTimeout(() => {
            main.style.zIndex = "0"
        }, 800);
        
        
    } 
    
    if (document.documentElement.scrollTop < 600 || document.documentElement.scrollTop < 100) {
        main.style.transform = "scale(1.00)"
        main.style.top = "0"
        main.style.opacity = ""
        main.style.zIndex = "9999"
        
    }
    
    
    
})