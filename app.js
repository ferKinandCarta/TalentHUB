const boton = document.getElementById ("verEjemplo"); 
boton.addEventListener('click', () => {
    Swal.fire({
        imageUrl: './images/empezarProyecto.png',
        imageHeight: 600,
        imageAlt: 'Imagen que bosqueja lo anteriormente explicado'
      }); 
})



const procesoOffer = document.getElementById('estadíoOffer')
procesoOffer.addEventListener ('click' , () =>{
  Swal.fire({
    imageUrl: './images/procesoAprobacionOffer.png',
    imageHeight: 300,
    imageAlt: 'Imagen que bosqueja lo anteriormente explicado'
  }); 
})

