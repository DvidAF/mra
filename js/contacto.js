const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const capcha = document.getElementById("capcha")

form.addEventListener("submit", e=>{ 
    e.preventDefault()
    verificacion();
    
})
function verificacion(){
    if((nombre.value == '')||(correo.value == '')||(capcha.value == '')){
        swal('ERROR','Introduzca los datos','error')
        
    }else{
        if(capcha.value == 'smwm'){

            swal('Excelente!','Gracias '+ nombre.value + ' el mensaje ha sido enviado correctamente','success')
            .then(() => {
            swal('intentaremos responder en la brevedad posible');
            });
            limpiar();
        }else{
            swal('ERROR','Capcha no coincide','error');
        }
    }
}
function limpiar(){
        form.reset();
}