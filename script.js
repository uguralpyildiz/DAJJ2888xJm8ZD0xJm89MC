






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
    speed: 0,
    effect: 'slide',
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: "auto",
    allowTouchMove:false,
    initialSlide: 1,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        clickable:true,
       
        el: '.swiper-pagination',
        renderBullet: function (index, className) {
            var slideName;
            if (index === 0) {
                slideName = 'Alien';
            } else if (index === 1) {
                slideName = 'Cumcity';
            } else if (index === 2) {
                slideName = 'Dildoman';
            } else if (index === 3) {
                slideName = 'Hell';
            } else if (index === 4) {
                slideName = 'İnside';
            } else if (index === 5) {
                slideName = 'Mummy';
            } else if (index === 6) {
                slideName = 'Nudeless';
            } else if (index === 7) {
                slideName = 'Sins';
            } else if (index === 8) {
                slideName = 'Skeleton';
            } else if (index === 9) {
                slideName = 'Samurai';
            }
            return '<span class="' + className + '">' + slideName + '</span>';
        },
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
const nav = document.querySelector("nav")
window.addEventListener("scroll", (e) =>{
    console.log(document.documentElement.scrollTop);

   
    if (document.documentElement.scrollTop < 100) {
        main.style.transform = "scale(1.00)"
        main.style.opacity = "1"
        door.style.transform = "translateX(0px)"
        main.style.zIndex = "9999"
        nav.style.visibility = "hidden";
    } 
    if (document.documentElement.scrollTop > 300 || document.documentElement.scrollTop > 100) {
        main.style.transform = "scale(1.10)"
        main.style.opacity = "1"
        door.style.transform = "translateX(300px)"
        main.style.zIndex = "9999"
        nav.style.visibility = "hidden";
    } 
    if (document.documentElement.scrollTop > 500 || document.documentElement.scrollTop > 300) {
        main.style.transform = "scale(1.30)"
        main.style.opacity = "1"
        door.style.transform = "translateX(600px)"
        main.style.zIndex = "9999"
        nav.style.visibility = "hidden";
    } 
    if (document.documentElement.scrollTop > 800 || document.documentElement.scrollTop > 500) {
        main.style.transform = "scale(1.50)"
        main.style.opacity = "0.5"
        door.style.transform = "translateX(600px)"
        main.style.zIndex = "9999"
        nav.style.visibility = "hidden";
    } 
    if (document.documentElement.scrollTop > 1000 || document.documentElement.scrollTop > 800) {
        main.style.transform = "scale(1.80)"
        main.style.zIndex = "99"
        main.style.opacity = "0"
        door.style.transform = "translateX(600px)"
        nav.style.visibility = "hidden";
    } 
    if (document.documentElement.scrollTop > 1200 || document.documentElement.scrollTop > 1000) {
        main.style.transform = "scale(1.80)"
        main.style.zIndex = "99"
        main.style.opacity = "0"
        door.style.transform = "translateX(600px)"
        nav.style.visibility = "visible";
    } 
    
    
    
    
    
})