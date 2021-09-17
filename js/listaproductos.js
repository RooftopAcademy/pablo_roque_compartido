const caja = document.querySelectorAll('.caja');
console.log(caja);


caja.forEach(element => {
    element.addEventListener('click',function(){
        element.classList.toggle('tarjeta');
    });
});

