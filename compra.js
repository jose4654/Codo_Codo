document.addEventListener("DOMContentLoaded", function () {
    const cantidadInput = document.getElementById("cantidad");
    const categoriaSelect = document.getElementById("categoria");
    const totalInput = document.getElementById("total");
    const resumenButton = document.getElementById("resumen");
    const borrarButton = document.getElementById("borrar");

    cantidadInput.addEventListener("input", calcularTotal);

    resumenButton.addEventListener("click", function () {
        const cantidad = parseFloat(cantidadInput.value) || 0;
        const precioPorUnidad = 200; // Precio por unidad en pesos
        let total = cantidad * precioPorUnidad;

        const categoria = categoriaSelect.value;

        // Aplicar descuentos según la categoría seleccionada
        if (categoria === "opcion1") { // Estudiante
            total *= 0.2; // Aplicar 80% de descuento (100% - 80%)
        } else if (categoria === "opcion2") { // Trainee
            total *= 0.5; // Aplicar 50% de descuento
        } else if (categoria === "opcion3") { // Junior
            total *= 0.85; // Aplicar 15% de descuento (100% - 15%)
        }

        totalInput.value = total.toFixed(2);
    });

    borrarButton.addEventListener("click", function () {
        // Restablecer los campos del formulario
        cantidadInput.value = "";
        categoriaSelect.value = "opcion1";
        totalInput.value = "";
    });

    function calcularTotal() {
        const cantidad = parseFloat(cantidadInput.value) || 0;
        const categoria = parseFloat(categoriaSelect.value) || 0;

        let total = cantidad * categoria;
        totalInput.value = total.toFixed(2);
    }
});
