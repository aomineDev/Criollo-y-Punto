function validarFormularioContactanos() {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const errores = [];
    const emailRegex = /^[\w.-]+@[\w-]+\.[a-z]{2,}$/i;
        const soloLetrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

    if (nombre === "") {
        errores.push("El nombre es obligatorio.");
    } else if (!soloLetrasRegex.test(nombre)) { // Nueva validación
        errores.push("El nombre solo debe contener letras, espacios, guiones o apóstrofes.");
    }
    if (email === "") {
        errores.push("El email es obligatorio");
    } else {
        if (!emailRegex.test(email)) {
            errores.push("El formato no es valido");
        }
    }
    if (mensaje === "") {
        errores.push("El mensaje es obligatorio.");
    } else if (mensaje.length > 50) {
        errores.push("El mensaje no deben exceder los 50 caracteres.");
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