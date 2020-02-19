

window.onload = function() {

    var burger_button = document.getElementById('burger');
    var menu = [];
    menu = document.getElementsByClassName('menu_links');
    console.log(menu);


    function toogle(){
        var name = burger_button.className;
        console.log(name);
        if(name == "burger_icon" || name == "burger_icon click2"){
            burger_button.className = "burger_icon click";
            for(i = 0; i < menu.length; i++){
                menu[i].classList.add('vis');
            }
            return;
        }if(name == "burger_icon click"){
            burger_button.className = "burger_icon click2";
            for(i = 0; i < menu.length; i++){
                menu[i].classList.remove('vis');
            }
        }
    }



    burger_button.addEventListener("click", toogle);




}