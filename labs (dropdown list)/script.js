 
 /* функция setPlusIcon - устанавливает для элементов li значок[+] , в случае  если этот элемент имеет вложенный список

  - регистрирует  ф-ю aClick  в качестве обработчика события onclick для всех ссылок  */


function setPlusIcon() {
  var allLis  = document.getElementsByTagName("li");

  for(var  i = 0; i < allLis.length; i++){

    var li = allLis[i];
    var allUls  = li.getElementsByTagName("ul");

    if(allUls.length > 0 ){

      if(allUls[0].className == "expandable")
        li.style.listStyleImage = 
        "url('arrow.png')";
       }
  }
  ////////////////////////////
  var allA  = document.getElementsByTagName("a");

  for(var i=0; i<allA.length; i++){
    allA[i].addEventListener("click", aClick, false);
     }
  }

window.onload = setPlusIcon;
/*
ф-я aСlick()  , обрабатывает щелчок по ссылке
 1. Получить объект - ссылку, по которой был сделан клик
 2  Найти родит. LI
 3 Найдите вложенный список
 4 Если вложенных списков нет -  то ПЕРЕХОД по ссылке
 5 Назначить вложенному списку нужные свойства поменять иконку
 6 запретить переход по ссылке
*/  

function aClick(e){
    
    e = e || event;
    var objA = e.target || e.srcElement;
    var li = objA.parentNode;
    var uls = li.getElementsByTagName("ul");
    if(uls.length == 0) return true;

    if(uls[0].style.display == "block"){
      uls[0].style.display = "";
      li.style.listStyleImage = 
        "url('arrow.png')";

    }else{
        uls[0].style.display = "block";
        li.style.listStyleImage = 
        "url('res-up.png')";
    }
   
   try{
       e.preventDefault();
   }catch(x){
        e.returnValue = false;  //  для старых браузеров
   }  
   

}