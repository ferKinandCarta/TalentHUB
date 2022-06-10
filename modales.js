const infoAdicional = document.querySelector(".modal-info-contenedor");
const abrirInfoAdicional = document.getElementById('infoRS');
const cerrarInfoAdicional = document.getElementById('btn-cerrar-mas');
const modalMasInformacion = document.querySelector('.modal-mas'); 


const opcionAceptada = document.querySelector(".modal-aceptado-contenedor"); 
const abrirOpcionAceptada = document.getElementById('opcionAceptada');
const cerrarModalAceptado = document.getElementById('btn-cerrar-aceptacion');
const modalPasosPosterioresAceptado = document.querySelector('.modal-aceptado');

const opcionRechazada = document.querySelector(".modal-rechazado-contenedor"); 
const abrirOpcionRechazado = document.getElementById('opcionRechazada');
const cerrarModalRechazado= document.getElementById('btn-cerrar-rechazado');
const modalPasosPosterioresRechazado = document.querySelector('.modal-rechazado');


abrirInfoAdicional.addEventListener('click', () =>{
    infoAdicional.classList.toggle('modal-active-mas'); 
}); 

cerrarInfoAdicional.addEventListener("click", ()=>{
    infoAdicional.classList.toggle("modal-active-mas"); 
});

infoAdicional.addEventListener("click" , () =>{
    cerrarInfoAdicional.click();
});

modalMasInformacion.addEventListener("click", (e)=>{
    e.stopPropagation();
});

abrirOpcionAceptada.addEventListener('click', () =>{
    opcionAceptada.classList.toggle('modal-active-aceptado'); 
}); 

cerrarModalAceptado.addEventListener("click", ()=>{
    opcionAceptada.classList.toggle("modal-active-aceptado"); 
});

opcionAceptada.addEventListener("click" , () =>{
    cerrarModalAceptado.click();
});

modalPasosPosterioresAceptado.addEventListener("click", (e)=>{
    e.stopPropagation();
});

abrirOpcionRechazado.addEventListener('click', () =>{
    opcionRechazada.classList.toggle('modal-active-rechazado'); 
}); 

cerrarModalRechazado.addEventListener("click", ()=>{
    opcionRechazada.classList.toggle("modal-active-rechazado"); 
});

opcionRechazada.addEventListener("click" , () =>{
    cerrarModalRechazado.click();
});

modalPasosPosterioresRechazado.addEventListener("click", (e)=>{
    e.stopPropagation();
});

