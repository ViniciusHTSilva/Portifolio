var menu = document.getElementById("menu");
var button = document.getElementById("me");


button.addEventListener("click", function(){

    var menu = document.getElementById("menu");

    if(menu.style.position === "fixed"){
        menu.style.left =  '-250px';
    }else{
        menu.style.position = "fixed";
    }

});









