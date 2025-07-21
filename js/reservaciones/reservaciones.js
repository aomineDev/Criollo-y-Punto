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
    const formu = document.getElementById("form");
    confirmacion.style.display = "block";
    formu.style.display = "block";

    // Mostrar los datos seleccionados
    document.getElementById("conf-local").textContent = datosReserva.local;
    document.getElementById("conf-personas").textContent = datosReserva.personas;
    document.getElementById("conf-fecha").textContent = datosReserva.fecha;
    document.getElementById("conf-hora").textContent = datosReserva.hora;
}
function validarFormularioDatos() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const errores = [];
    const emailRegex = /^[\w.-]+@[\w-]+\.[a-z]{2,}$/i;
    const telefonoSoloDigitos = telefono.replace(/\D/g, "");
    const soloLetrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

    //VALIDAD NOMBRE
    if (nombre === "") {
        errores.push("El nombre es obligatorio.");
    } else if (!soloLetrasRegex.test(nombre)) { // Nueva validación
        errores.push("El nombre solo debe contener letras, espacios, guiones o apóstrofes.");
    }
    //VALIDAD APELLIDO
    if (apellido === "") {
        errores.push("Los apellidos son obligatorios.");
    } else if (!soloLetrasRegex.test(apellido)) { // Nueva validación
        errores.push("Los apellidos solo deben contener letras, espacios, guiones o apóstrofes.");
        //VALIDAD EMAIL
    } if (email === "") {
        errores.push("El email es obligatorio.");
    } else if (!emailRegex.test(email)) {
        errores.push("El formato del email no es válido.");
    }
    //VALIDAR TELEFONO
    if (telefono === "") {
        errores.push("El teléfono es obligatorio.");
    } else if (telefonoSoloDigitos.length !== 9) {
        errores.push("El teléfono debe tener exactamente 9 dígitos numéricos.");
    }
    const errorDiv = document.getElementById("errores");
    if (errores.length > 0) {
        errorDiv.innerHTML = errores.map(err => `<p>• ${err}</p>`).join("");
        errorDiv.style.display = "block";
        return false;
    } else {
        errorDiv.style.display = "none";
        abrirModal();
        return false;
        document.getElementById("confirmacion").style.display = "none";
    }
}
function abrirModal() {
    document.getElementById("modal-confirmacion").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal-confirmacion").style.display = "none";

    // Volver al paso inicial (selección de local)
    document.getElementById("formulario").classList.remove("active");
    document.getElementById("confirmacion").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("locales").classList.add("active");
    document.getElementById("btn-confirmar").style.display = "none";

    // Limpiar datos
    datosReserva = {
        local: "",
        personas: "",
        fecha: "",
        hora: ""
    };

    // Limpiar formulario visual
    document.getElementById("personas").value = "";
    document.getElementById("fecha").value = "";
    document.querySelectorAll(".horarios button").forEach(btn => btn.classList.remove("seleccionado"));

    // Ocultar errores si había
    document.getElementById("errores").style.display = "none";

    // Limpiar campos del formulario final
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
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