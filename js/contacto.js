const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const capcha = document.getElementById("capcha")

form.addEventListener("submit", e=>{ 
    e.preventDefault()
    verificacion();
    
})
function verificacion(){
    if((nombre.value == '')||(correo.value == '')||(capcha.value == '')){
        alert("Introduzca los datos")
        
    }else{
        if(capcha.value == 'smwm'){
            alert('Gracias '+ nombre.value + ' el mensaje ha sido enviado correctamente');
            alert('intentaremos responder en la brevedad posible');
            limpiar();
        }else{
            alert('Capcha no coincide');
        }
    }
}
function limpiar(){
        form.reset();
}