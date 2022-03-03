var menuIcon = document.querySelector('.menu');
var sideBar = document.querySelector('.sidebar');
var container = document.querySelector('.container');
var smallSiderBar = document.querySelector('.sidebar');

let addBtn = document.getElementById('add');
var array=[];

menuIcon.onclick = function(){
    sideBar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
    smallSiderBar.classList.toggle('appare');
}

