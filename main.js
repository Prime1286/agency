var menuBurger = document.querySelector('.menu-burger');
var menu = document.querySelector('.header_top_menu');
var tabList = document.querySelector('.slider_control');
var contentList = document.querySelectorAll('.slider ul ~ div');
var tabLinks = document.querySelectorAll('.slider ul > li a');
 
tabList.addEventListener('click', function(e) {
e.preventDefault();  
e.stopPropagation()
tabLinks.forEach(a => {
a.classList.remove('focused');
})
var currentItem = e.target;
currentItem.classList.add('focused');
contentList.forEach(element => {
var linkId = element.getAttribute('id');
if (currentItem.textContent.includes(linkId)) {
element.style.display = 'block';  
}
else {element.style.display = 'none';} 
}) 
})

menuBurger.addEventListener('click', function(){
menu.classList.toggle('visible');
});