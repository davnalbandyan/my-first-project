"use strict";

window.addEventListener("load",()=>{
const tabHeaders=document.querySelectorAll(".tabheader__item");
const tabContents=document.querySelectorAll(".tabcontent");
const tabsParent=document.querySelector(".tabheader__items");

function hide(){
    tabContents.forEach(tabcontenct=>{
        tabcontenct.classList.add("hide");
        tabcontenct.classList.remove("show","fade")
    });
    tabHeaders.forEach(tabheader=>tabheader.classList.remove("tabheader__item_active"))
}

function show(i=2){
tabContents[i].classList.add("show","fade");
tabContents[i].classList.remove("hide");
tabHeaders[i].classList.add("tabheader__item_active")

}


hide();
show();



tabsParent.addEventListener("click",(e)=>{
   if(e.target && e.target.matches(".tabheader__item")){
    tabHeaders.forEach((item,index)=>{
        if(e.target===item){
            hide();
            show(index);
        }
    })
   }
})
})




