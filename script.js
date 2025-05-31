const text1=document.getElementById("first");const text2=document.getElementById("second");const text3=document.getElementById("third");const text4=document.getElementById("fourth");
setInterval(()=>{
    [text1,text2,text3,text4].forEach(ele=>{
        ele.style.width="0";ele.style.animation="none";
    });
    void text1.offsetWidth;
    text1.style.animation = "type 3.5s steps(40, end) 0s forwards, blink-caret 0.75s linear 0s infinite, stopblinking 0.1s forwards 2.8s";
    text2.style.animation = "type2 3s steps(40, end) 3s forwards, blink-caret 0.75s linear 3s infinite, stopblinking 0.1s forwards 5.75s";
    text3.style.animation = "type 3.5s steps(40, end) 6s forwards, blink-caret 0.75s linear 6s infinite, stopblinking 0.1s forwards 9.2s";
    text4.style.animation = "type 3.5s steps(40, end) 9.2s forwards, blink-caret 0.75s linear 9.2s infinite, stopblinking 0.1s forwards 12s";  
},13000);
const ele=document.getElementById("About");
ele.addEventListener("mouseenter",()=>{
    ele.classList.add("hover");
});
ele.addEventListener("mouseleave",()=>{
    ele.classList.remove("hover");
});
ele.addEventListener("touchstart",()=>{
    ele.classList.add("hover");
});
ele.addEventListener("touchend",()=>{
    ele.classList.remove("hover");
});
const hamburger=document.getElementById("hamburger_menu");
const navmenu=document.getElementById("navigation_menu");
hamburger.addEventListener("click",()=>{
    navmenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});