"use strict";

window.addEventListener("load",()=>{
const tabHeaders=document.querySelectorAll(".tabheader__item");
const tabContents=document.querySelectorAll(".tabcontent");
const tabsParent=document.querySelectorAll(".tabheader__items");

function hide(){
    tabConntents.forEach(tabcontenct=>{
        tabcontenct.classList.add("hide");
        tabcontenct.classList.remove("show","fade")
    });
    tabHeaders.forEach(tabheader=>tabheader.classList.remove("tabheader__item_active"))
}

function show(i=0){
tabContents[i].classList.add("show","fade");
tabContents[i].classList.remove("hide");
tabHeaders[i].classList.add("tabheader__item_active")

}


hide();
show();


})