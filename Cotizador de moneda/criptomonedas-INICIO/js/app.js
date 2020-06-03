const cotizador = new API("bd13e6951266ef45280c2a1e7d474d2d301fca06b6f1df332897a738a1701a2d");
const ui = new Interfaz();


const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();

    const monedaSelect = document.querySelector("#moneda");
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    
    const criptoMonedaSelect = document.querySelector("#criptomoneda");
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
    
    if (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        ui.mostrarMensaje("Ambos campos son obligatorios", "alert bg-danger text-center");
    }else{
        cotizador.obtenerValores(monedaSeleccionada,criptoMonedaSeleccionada)
        .then(data =>{
            ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
        });
    };
});
