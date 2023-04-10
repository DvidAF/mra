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

const url = "https://api.github.com/users/DvidAF";
const url2 = "https://api.github.com/users/rebeaguero";

		fetch(url)
			.then(response => response.json())
			.then(data => {
                document.getElementById('avatar').src = data.avatar_url;
				document.getElementById('nombre1').textContent = "Nombre: " + data.name;
				document.getElementById('bio').textContent = "Bio: " + data.bio;

				fetch(`${url}/repos`)
					.then(response => response.json())
					.then(repos => {
						const reposList = document.getElementById('repos1');
						repos.forEach(repo => {
							const li = document.createElement('li');
							const a = document.createElement('a');
                            a.target= "_blank"
							a.href = repo.html_url;
							a.textContent = repo.name;
							li.appendChild(a);
							reposList.appendChild(li);
						});
					})
					.catch(error => console.log(error));
			})
			.catch(error => console.log(error));

		fetch(url2)
			.then(response => response.json())
			.then(data => {
                document.getElementById('avatar2').src = data.avatar_url;
				document.getElementById('nombre2').textContent = "Nombre: " + data.name;
				document.getElementById('bio2').textContent = "Bio: " + data.bio;

				fetch(`${url2}/repos`)
					.then(response => response.json())
					.then(repos => {
						const reposList = document.getElementById('repos2');
						repos.forEach(repo => {
							const li = document.createElement('li');
							const a = document.createElement('a');
                            a.target= "_blank"
							a.href = repo.html_url;
							a.textContent = repo.name;
							li.appendChild(a);
							reposList.appendChild(li);
						});
					})
					.catch(error => console.log(error));
			})
			.catch(error => console.log(error));