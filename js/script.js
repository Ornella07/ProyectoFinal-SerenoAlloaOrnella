//-- Activamos el Nav --//
let navBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navBar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

//-- Activamos el boton de login... --//
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
}

//-- Activamos la barra del buscador cuando este en el media --//
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');

}

//-- Removemos el active cuando movemos el scroll  -- \\
window.onscroll = () => {
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

//-- Cambiamos el tema de la pagina de claro a oscuro --//
let themeBtn = document.querySelector('#theme-btn');

//-- Agrego un alerta flotante cuando cambio el tema -- \\
themeBtn.addEventListener('click', alerta);
function alerta() {
    Toastify({
        text: 'Se cambio el tema',
        duration: 1000,
        newWindows: false,
        stopOnFocus: true,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: "rgb(242,179,193)",
            background: "linear-gradient(45deg, rgba(242,179,193,1) 0%, rgba(219,120,142,1) 0%, rgba(91,24,39,1) 10%, rgba(249,135,160,1) 89%, rgba(219,184,189,1) 98%, rgba(33,33,34,1) 100%)"
            
        },
    }).showToast();
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeBtn.classList.toggle('fa-moon');

    //-- Theme con localstorage  -- \\
    //-- Guardamos el modo en localstorage -- \\
    document.body.classList.contains('dark') ? localStorage.setItem('dark-mode', 'true') : localStorage.setItem('dark-mode', 'false');
});
//-- Obetenemos modo actual.  -- \\
localStorage.getItem('dark-mode') === 'true' ? document.body.classList.toggle('dark') : document.body.classList.remove('dark');

//-- Delay de las imagenes cuando cargan  -- \\
AOS.init({
    duration: 800,
    delay: 300,
});


//-- Llamada desde el archivo JSON  -- \\
const destinos = "./js/destino.json";
const contenedorDestinos = document.getElementById('contenedorDestinos');

//-- Incio del programa  -- \\
fetch(destinos)
    .then(response => response.json())
    .then(data => {
        data.forEach((destino) => {
            const div = document.createElement("div");
            div.classList.add("destino");
            div.innerHTML = `
                    <div class="box" data-aos="fade-up">
                    <div class="image">
                    <a href="/destinos/argentina/argentina.html" target="_blank">
                    <img src="${destino.imagen}" alt="${destino.titulo}" id="image">
                    </a>
                    </div>
                    <div class="content">
                    <h3 class="text">${destino.titulo}</h3>
                    <p>${destino.descripcion}</p>
                    </div>
                    </div>
                    `;
            contenedorDestinos.append(div);
        });
    });


// -- Cargamos contenedor servicios.  -- \\
const contenedorServicios = document.getElementById('contenedorServicios');
const servicio = [
    {
        id: '01',
        titulo: 'Hoteles',
        logo: '<i class="fas fa-hotel"></i>',
        descripcion: 'Aqui podras encontrar los mejores y más baratos hoteles'
    },
    {
        id: '02',
        titulo: 'Viajes Rápidos',
        logo: '<i class="fas fa-plane"></i>',
        descripcion: 'Viajes más rápidos, más placenteros, con la mayor comodidad.'
    },
    {
        id: '03',
        titulo: 'Flexibilidad',
        logo: '<i class="fa-sharp fa-solid fa-paper-plane"></i>',
        descripcion: 'Somos viajeros al igual que tú. Entendemos de posibles imprevistos.'
    },
    {
        id: '04',
        titulo: 'Seguridad',
        logo: '<i class="fa-solid fa-lock"></i>',
        descripcion: 'RocViajes es una agencia de viajes acreditada, contamos con un seguro destinado a proteger tu inversión.'
    },
    {
        id: '05',
        titulo: 'Asistencia Total',
        logo: '<i class="fa-solid fa-umbrella"></i>',
        descripcion: 'Estamos a tu disposición durante todo el viaje para brindar sugerencias, cuidar los detalles y resolver cualquier imprevisto.'
    },
    {
        id: '06',
        titulo: 'Personalización',
        logo: '<i class="fa-solid fa-wand-magic-sparkles"></i>',
        descripcion: 'Somos expertos diseñadores de viaje. Personalizamos tus vacaciones en base a tus intereses y preferencias.'
    }
];

class Servicios {
    constructor(id, titulo, logo, descripcion) {
        this.id = id;
        this.titulo = titulo;
        this.logo = logo
        this.descripcion = descripcion;
    }
}

function cargaServicios(servicios) {
    contenedorServicios.innerHTML = "";
    servicios.forEach((servicio) => {
        const div = document.createElement('div');
        div.classList.add('servicio');
        div.innerHTML = `
            <div class="box" data-aos="zoom-in">
                <span>${servicio.id}</span>
                ${servicio.logo}
                <h3>${servicio.titulo}</h3>
                <p>${servicio.descripcion}</p>
            </div>
            `
        contenedorServicios.append(div)
    });
}
cargaServicios(servicio);














