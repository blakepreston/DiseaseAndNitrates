function menuChange(){
    if(document.getElementById('menu').src.match("menu.png")){
        document.getElementById('menu').src = "cancel.png";
        document.getElementById('menuSlide').style.left = "0px";
        document.getElementById('menuSlide').style.transitionDuration = ".6s";
    }else if(document.getElementById('menu').src.match("cancel.png")){
        document.getElementById('menu').src = "menu.png";
        document.getElementById('menuSlide').style.left = "100vw";
        document.getElementById('menuSlide').style.transitionDuration = ".6s";
    }else{
        document.getElementById('menu').src = "menu.png";
    }
}