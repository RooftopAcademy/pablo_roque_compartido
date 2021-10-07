const caja = document.querySelectorAll('.caja');

caja.forEach(element => {
    element.addEventListener('click',function(){
        element.classList.toggle('tarjeta');
    });
});



