const btnMenu = document.querySelector("#menu") as HTMLElement;
const menuContent = document.querySelector(".menu-content") as HTMLElement;

btnMenu.addEventListener('click',function(): void{
    menuContent.classList.toggle('menu-active');
});
