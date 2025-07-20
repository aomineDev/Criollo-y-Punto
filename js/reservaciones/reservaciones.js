// document.addEventListener("DOMContentLoaded", () => {

//     const form = document.getElementById("formreservaciones");
//     form.addEventListener("submit", validarFormularioReservaciones);

// });
// function validarFormularioReservaciones(event) {

//     event.preventDefault();

//     // OBTENER LOS CAMPOS DEL HTML PARA LA VALIDACION
//     const nombre = document.getElementById("nombre").value.trim();
//     const apellido = document.getElementById("apellido").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const telefono = document.getElementById("telefono").value.trim();
//     const errores = [];
//     const emailRegex = /^[\w.-]+@[\w-]+\.[a-z]{2,}$/i;
//     const telefonoSoloDigitos = telefono.replace(/\D/g, "");
//     const soloLetrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

//     //VALIDAD NOMBRE
//     if (nombre === "") {
//         errores.push("El nombre es obligatorio.");
//     } else if (!soloLetrasRegex.test(nombre)) { // Nueva validación
//         errores.push("El nombre solo debe contener letras, espacios, guiones o apóstrofes.");
//     }
//     //VALIDAD APELLIDO
//     if (apellido === "") {
//         errores.push("Los apellidos son obligatorios.");
//     } else if (!soloLetrasRegex.test(apellido)) { // Nueva validación
//         errores.push("Los apellidos solo deben contener letras, espacios, guiones o apóstrofes.");
//         //VALIDAD EMAIL
//     } if (email === "") {
//         errores.push("El email es obligatorio.");
//     } else if (!emailRegex.test(email)) {
//         errores.push("El formato del email no es válido.");
//     }
//     //VALIDAR TELEFONO
//     if (telefono === "") {
//         errores.push("El teléfono es obligatorio.");
//     } else if (telefonoSoloDigitos.length !== 9) {
//         errores.push("El teléfono debe tener exactamente 9 dígitos numéricos.");
//     }
//     //VALIDAR INPUT PERSONA
//     const opcionPersonaSeleccionada = document.querySelector('input[name="cantidad-personas"]:checked');
//     if (!opcionPersonaSeleccionada) {
//         errores.push("Debes seleccionar la cantidad de personas.");
//     }
//     //VALIDAR INPUT FECHA
//     const opcionFechaSeleccionada = document.getElementById("fecha-evento").value;
//     const hoy = new Date();
//     const fechaSeleccionada = new Date(opcionFechaSeleccionada);
//     hoy.setHours(0, 0, 0, 0); // Para comparar solo fechas, no horas
//     if (opcionFechaSeleccionada === "") {
//         errores.push("Debes seleccionar una fecha para el evento.");
//     } else if (fechaSeleccionada < hoy) {
//         errores.push("La fecha del evento no puede ser anterior a hoy.");
//     }
//     //VALIDAR HORARIO
//     const opcionHorarioSeleccionada = document.querySelector('input[name="horario-seleccionada"]:checked');
//     if (!opcionHorarioSeleccionada) {
//         errores.push("Debe seleccionar el horario de la reservacion")
//     }
//     //COMPROBAR CUANTOS ERRORES HUBO
//     const errorDiv = document.getElementById("errores");
//     if (errores.length > 0) {
//         errorDiv.innerHTML = errores.map(err => `<p>• ${err}</p>`).join("");
//         errorDiv.style.display = "block";
//         return;
//     } else {
//         errorDiv.style.display = "none";

//         const formData = new FormData();
//         formData.append("nombre", nombre);
//         formData.append("apellido", apellido);
//         formData.append("email", email);
//         formData.append("telefono", telefono);
//         formData.append("_captcha", "false");


//         fetch("https://formsubmit.co/leonardomurillo1906@gmail.com", {
//             method: "POST",
//             body: formData,

//         })
//             .then(response => {
//                 if (response.ok) {
//                     document.getElementById("modalExito").style.display = "block";
//                     //resetear el formulario despues del envio del formulario :v
//                     document.getElementById("formreservaciones").reset();
//                     //reseterar los imputs despues del envio del formulario
//                     if (opcionPersonaSeleccionada) {
//                         opcionPersonaSeleccionada.checked = false;
//                     }
//                     if (opcionFechaSeleccionada) {
//                         opcionFechaSeleccionada.value = "";
//                     }
//                     if (opcionHorarioSeleccionada) {
//                         opcionHorarioSeleccionada.checked = false;
//                     }
//                     //un timer para quitar el modal
//                     setTimeout(() => {
//                         document.getElementById("modalExito").style.display = "none";
//                     }, 4000);
//                 } else {
//                     alert("Error al enviar el formulario. Intenta nuevamente.");
//                 }
//             })
//             .catch(error => {
//                 alert("Ocurrió un error al enviar el formulario.");
//                 console.error(error);
//             });
//     }
// // }
// function mostrarFormulario(local) {
//     document.getElementById("locales").classList.remove("active");
//     document.getElementById("formulario").classList.add("active");

//     let titulo = "";
//     if (local === "surco") titulo = "La Av Palmeras-Surco";
//     else if (local === "sanisidro") titulo = "La Av Gira-San Isidro";
//     else if (local === "miraflores") titulo = "La Av las manzanas 23-Miraflores";

//     document.getElementById("titulo-local").innerText = titulo;
// }

// function volver() {
//     document.getElementById("formulario").classList.remove("active");
//     document.getElementById("locales").classList.add("active");
// }

// // Mostrar selección de locales al cargar
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("locales").classList.add("active");
// });
// Datos de la reserva seleccionada
let datosReserva = {
    local: "",
    personas: "",
    fecha: "",
    hora: ""
};

// Mostrar formulario al elegir local
function mostrarFormulario(local) {
    document.getElementById("locales").classList.remove("active");
    document.getElementById("formulario").classList.add("active");
    document.getElementById("confirmacion").style.display = "none";
    document.getElementById("btn-confirmar").style.display = "none";

    datosReserva.local = local;
    const nombreLocal = local.charAt(0).toUpperCase() + local.slice(1);
    document.getElementById("titulo-local").innerText = "Local " + nombreLocal;

    verificarFormulario();
}

// Volver a seleccionar local
function volver() {
    document.getElementById("formulario").classList.remove("active");
    document.getElementById("locales").classList.add("active");
    document.getElementById("btn-confirmar").style.display = "none";
}

// Guardar selección de hora
function seleccionarHora(hora) {
    datosReserva.hora = hora;
    verificarFormulario();
}

// Verifica si todos los campos han sido seleccionados
function verificarFormulario() {
    const { local, personas, fecha, hora } = datosReserva;
    const btnConfirmar = document.getElementById("btn-confirmar");

    if (local && personas && fecha && hora) {
        btnConfirmar.style.display = "block";
    } else {
        btnConfirmar.style.display = "none";
    }
}

// Ir a pantalla de confirmación
function irAConfirmacion() {
    document.getElementById("formulario").classList.remove("active");
    const confirmacion = document.getElementById("confirmacion");
    confirmacion.style.display = "block";

    // Mostrar los datos seleccionados
    document.getElementById("conf-local").textContent = datosReserva.local;
    document.getElementById("conf-personas").textContent = datosReserva.personas;
    document.getElementById("conf-fecha").textContent = datosReserva.fecha;
    document.getElementById("conf-hora").textContent = datosReserva.hora;
}

// Simular envío de la reserva
function enviarReserva() {
    alert("✅ Reserva enviada con éxito. Gracias por elegirnos.");
    location.reload(); // reinicia el proceso
}

// Al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("locales").classList.add("active");

    // Detectar cambios en personas y fecha
    document.getElementById("personas").addEventListener("change", () => {
        datosReserva.personas = document.getElementById("personas").value;
        verificarFormulario();
    });

    document.getElementById("fecha").addEventListener("change", () => {
        datosReserva.fecha = document.getElementById("fecha").value;
        verificarFormulario();
    });

    // Detectar selección de hora
    document.querySelectorAll(".horarios button").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".horarios button").forEach(b => b.classList.remove("seleccionado"));
            btn.classList.add("seleccionado");
            seleccionarHora(btn.textContent.trim());
        });
    });
});