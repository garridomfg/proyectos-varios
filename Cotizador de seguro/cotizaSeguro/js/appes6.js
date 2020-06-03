
class Seguro{
    constructor(marca, anio, tipo){
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;
    }
    cotizarSeguro(){
        let cantidad;
        const base = 2000;
   
        switch (this.marca) {
            case "1":
                cantidad = base * 1.15;
                break;
            case "2":
               cantidad = base * 1.05;
                break;
            case "3":
               cantidad = base * 1.35;
                break;
        };
   
           const diferencia = new Date().getFullYear() - this.anio;
           cantidad -= ((diferencia * 3) * cantidad) / 100;
   
           if(this.tipo === "basico"){
               cantidad *= 1.30;
           }else{
               cantidad *= 1.50;
           };
   
           return cantidad;
   };
};


class Interfaz{
    mostrarError(mensaje, tipo){
        const div = document.createElement("div");

        if (tipo === "error"){
            div.classList.add("mensaje", "error")
        }else{
            div.classList.add(("mensaje", "correcto"))
        };
        div.innerHTML = `${mensaje}`;
        formulario.insertBefore(div, document.querySelector(".form-group"));

        setTimeout(function(){
            document.querySelector(".mensaje").remove();
        }, 3000);
    };
    mostrarResultado(seguro, total){
        const resultado = document.getElementById("resultado");
        let marca;
    
        switch (seguro.marca) {
            case "1":
                marca = "Americano"
                break;
            case "2":
                marca = "Asiatico"
                break;
            case "3":
                marca = "Europeo"
                break;
        };
        const div = document.createElement("div");
        div.innerHTML = `
            Tu resumen:
            Marca : ${marca}
            Año : ${seguro.anio}
            Tipo : ${seguro.tipo}
            Total : ${total}
        `;
        const spinner = document.querySelector("#cargando img");
        spinner.getElementsByClassName.display = "block";
        
        setTimeout(function(){
            spinner.style.display = "none";
        }, 3000);
        resultado.appendChild(div);
    };
};



const formulario = document.getElementById("cotizar-seguro");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    const marca = document.getElementById("marca");
    const marcaSeleccionada = marca.option[marca.selectedIndex].value;
    const anio = document.getElementById("anio");
    const anioSeleccionado = anio.option[anio.selectedIndex].value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    const interfaz = new Interfaz();

    if (marcaSeleccionada === "" || anioSeleccionado === "" || tipo === ""){
        interfaz.mostrarError("Faltan datos", "error");
    }else{
        const resultados = document.querySelector("#resultado div");
        if(resultados != null){
            resultados.remove();
        };

        const seguro = new Seguro(marcaSeleccionada,anioSeleccionado,tipo);
        const cantidad = seguro.cotizarSeguro(seguro);

        interfaz.mostrarResultado(seguro, cantidad);
    };
});




const max = new Date().getFullYear();
min = max - 20;

const selectAnios = document.getElementById("anio");
for (let i = max; i >= min; i--){
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);  
};
