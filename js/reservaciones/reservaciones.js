document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formreservaciones");
    form.addEventListener("submit", validarFormularioReservaciones);

});
function validarFormularioReservaciones(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const errores = [];
    const emailRegex = /^[\w.-]+@[\w-]+\.[a-z]{2,}$/i;
    const telefonoSoloDigitos = telefono.replace(/\D/g, "");
    const soloLetrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

    if (nombre === "") {
        errores.push("El nombre es obligatorio.");
    } else if (!soloLetrasRegex.test(nombre)) { // Nueva validación
        errores.push("El nombre solo debe contener letras, espacios, guiones o apóstrofes.");
    }
    if (apellido === "") {
        errores.push("Los apellidos son obligatorios.");
    } else if (!soloLetrasRegex.test(apellido)) { // Nueva validación
        errores.push("Los apellidos solo deben contener letras, espacios, guiones o apóstrofes.");
    } if (email === "") {
        errores.push("El email es obligatorio.");
    } else if (!emailRegex.test(email)) {
        errores.push("El formato del email no es válido.");
    }
    if (telefono === "") {
        errores.push("El teléfono es obligatorio.");
    } else if (telefonoSoloDigitos.length !== 9) {
        errores.push("El teléfono debe tener exactamente 9 dígitos numéricos.");
    }
    const opcionPersonaSeleccionada = document.querySelector('input[name="cantidad-personas"]:checked');
    if (!opcionPersonaSeleccionada) {
        errores.push("Debes seleccionar la cantidad de personas.");
    }
    const opcionFechaSeleccionada = document.getElementById("fecha-evento").value;
    const hoy = new Date();
    const fechaSeleccionada = new Date(opcionFechaSeleccionada);
    hoy.setHours(0, 0, 0, 0); // Para comparar solo fechas, no horas

    if (opcionFechaSeleccionada === "") {
        errores.push("Debes seleccionar una fecha para el evento.");
    } else if (fechaSeleccionada < hoy) {
        errores.push("La fecha del evento no puede ser anterior a hoy.");
    }
    const opcionHorarioSeleccionada = document.querySelector('input[name="horario-seleccionada"]:checked');
    if (!opcionHorarioSeleccionada) {
        errores.push("Debe seleccionar el horario de la reservacion")
    }
    const errorDiv = document.getElementById("errores");
    if (errores.length > 0) {
        errorDiv.innerHTML = errores.map(err => `<p>• ${err}</p>`).join("");
        errorDiv.style.display = "block";
        return;
    } else {
        errorDiv.style.display = "none";

        const formData = new FormData();
        formData.append("nombre", nombre);
        formData.append("apellido", apellido);
        formData.append("email", email);
        formData.append("telefono", telefono);
        formData.append("_captcha", "false");


        fetch("https://formsubmit.co/calixto4211@gmail.com", {
            method: "POST",
            body: formData,

        })
            .then(response => {
                if (response.ok) {
                    document.getElementById("modalExito").style.display = "block";
                    document.getElementById("formreservaciones").reset();
                    setTimeout(() => {
                        document.getElementById("modalExito").style.display = "none";
                    }, 4000);
                } else {
                    alert("Error al enviar el formulario. Intenta nuevamente.");
                    console.error("Error en la respuesta del servidor:", response);
                }
            })
            .catch(error => {
                alert("Ocurrió un error al enviar el formulario.");
                console.error(error);
            });
    }
}
