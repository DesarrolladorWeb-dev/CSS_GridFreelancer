
document.addEventListener('DOMContentLoaded', () => {
    cargarPortafolio();
});

function cargarPortafolio() {
    fetch('datos.json')
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            let html = '';

            datos.portafolio.forEach(portafolio => {
                // Crear el template
                html += `
                    <div class = "elemento">
                        <img src="img/${portafolio.id}.jpg" />
                        <div class="conteneido" />
                        <h3> ${portafolio.nombre} </h3>
                        <p> ${portafolio.desc} </p>
                        </div>
                    </div>
                `
            });
            // Despues crear l el template, intectar al html
            document.querySelector('#listado').innerHTML = html;
        })
}