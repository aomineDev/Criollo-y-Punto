document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formContactanos");
    form.addEventListener("submit", validarFormularioContactanos);
});
function validarFormularioContactanos(event) {
    event.preventDefault(); // evita recarga

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const errores = [];
    const emailRegex = /^[\w.-]+@[\w-]+\.[a-z]{2,}$/i;
    const soloLetrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

    if (nombre === "") {
        errores.push("El nombre es obligatorio.");
    } else if (!soloLetrasRegex.test(nombre)) {
        errores.push("El nombre solo debe contener letras, espacios, guiones o apóstrofes.");
    }
    if (email === "") {
        errores.push("El email es obligatorio.");
    } else if (!emailRegex.test(email)) {
        errores.push("El formato de email no es válido.");
    }
    if (mensaje === "") {
        errores.push("El mensaje es obligatorio.");
    } else if (mensaje.length > 50) {
        errores.push("El mensaje no debe exceder los 50 caracteres.");
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
        formData.append("email", email);
        formData.append("mensaje", mensaje);
        formData.append("_captcha", "false");

        fetch("https://formsubmit.co/leonardoelbaneado@gmail.com", {
            method: "POST",
            body: formData,

        })
            .then(response => {
                if (response.ok) {
                    document.getElementById("modalExito").style.display = "block";
                    document.getElementById("formContactanos").reset();
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