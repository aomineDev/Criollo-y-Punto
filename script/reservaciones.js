function validarFormularioReservaciones() {
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
    const errorDiv = document.getElementById("errores");
    if (errores.length > 0) {
        errorDiv.innerHTML = errores.map(err => `<p>• ${err}</p>`).join("");
        errorDiv.style.display = "block";
        return false;
    } else {
        errorDiv.style.display = "none";
        alert("Formulario enviado correctamente.");
        return true;
    }
}