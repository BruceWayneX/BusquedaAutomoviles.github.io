//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


//Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',

}

//eventos
document.addEventListener('DOMContentLoaded', ()=> {
    mostrarAutos(autos);//Muestra los autos al cargar

    //Llena las opciones de años
    llenarSelect()
})

//Event listener para los select de busqueda

//Marca
        marca.addEventListener('change', e => {
            // console.log('Cambio de opcion..')
            datosBusqueda.marca = e.target.value;

            filtrarAuto();
        })

//year
        year.addEventListener('change', e => {
            datosBusqueda.year = e.target.value;

            filtrarAuto();
        })

//Price min
        minimo.addEventListener('change', e => {
            datosBusqueda.minimo = e.target.value;

        filtrarAuto();
        })

//Price max
        maximo.addEventListener('change', e => {
            datosBusqueda.maximo = e.target.value;

        filtrarAuto();
        })

//Doors
        puertas.addEventListener('change', e => {
            datosBusqueda.puertas = e.target.value;

        filtrarAuto();
        })

//Transmition
        transmision.addEventListener('change', e => {
            datosBusqueda.transmision = e.target.value;
        
        filtrarAuto();
        })

//Color
        color.addEventListener('change', e => {
            datosBusqueda.color = e.target.value;

        //   console.log(datosBusqueda)
        filtrarAuto();
        })


//funciones
function mostrarAutos(autos){

    limpiarHtml();//Elimina el html previo
    
    autos.forEach(auto => {

        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `${marca} ${modelo} - ${year} - Precio: ${precio}$ - Puertas: ${puertas} - Color: ${color} - Transmisión:  ${transmision}`;

    //insertar en el html
    resultado.appendChild(autoHTML);
    })
};


//Limpiar Html

function limpiarHtml (){
    while (resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

//Gemera los años del select
function llenarSelect(){
    
    for ( let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent= i;
        year.appendChild(opcion); //agregar seleccion de año

    }
}


//Funcion que filtra en base a la búsqueda
function filtrarAuto() {
    // console.log("Filtrando...")
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo).filter(filtrarMaximo).filter( filtrarPuertas).filter( filtrarTransmision).filter(filtrarColor)



    if (resultado.length){
    // console.log(resultado);
    mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado (){

    limpiarHtml();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay Resultado';
    resultado.appendChild(noResultado);
}


function filtrarMarca (auto){
        const { marca } = datosBusqueda;
        if ( marca ) {
            return auto.marca === marca;
        }
        return auto;
}

function filtrarYear (auto) {
    const {year} = datosBusqueda;
    if (year) {
        return auto.year === parseInt(year);
    }
    return auto;
}

function filtrarMinimo (auto){
    const {minimo} = datosBusqueda;
    if (minimo) {
        return auto.precio >= (minimo);
    }
    return auto;

}

function filtrarMaximo (auto){
    const {maximo} = datosBusqueda;
    if (maximo) {
        return auto.precio <= (maximo);
    }
    return auto;
}

function filtrarPuertas (auto){
    const {puertas} =  datosBusqueda;
    if (puertas) {
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}

function filtrarTransmision (auto){
    const {transmision} =  datosBusqueda;
    if (transmision) {
        return auto.transmision === (transmision);
    }
    return auto;
}

function filtrarColor (auto){
    const {color} =  datosBusqueda;
    if (color) {
        return auto.color === (color);
    }
    return auto;
}






