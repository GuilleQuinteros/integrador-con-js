const galeria = [
    {
        titulo: 'Corrintes Capital',
        descripcion: 'Hermoso bosque rodeado de misterio.',
        imagen: 'img/ctes1.jpg',
        categoria: 'arquitectura'
    },
    {
        titulo: 'Corrientes Capital',
        descripcion: 'Vista panorámica de una ciudad moderna.',
        imagen: 'img/ctes2.jpg',
        categoria: 'arquitectura'
    },
    {
        titulo: 'Itati',
        descripcion: 'Vista panorámica de una ciudad moderna.',
        imagen: 'img/itati1.jpg',
        categoria: 'arquitectura'
    },
    {
        titulo: 'Itati',
        descripcion: 'Vista panorámica de una ciudad moderna.',
        imagen: 'img/itati2.jpg',
        categoria: 'arquitectura'
    },
    {
        titulo: 'Paso de la Patria',
        descripcion: 'Vista panorámica de una ciudad moderna.',
        imagen: 'img/jpg1.jpg',
        categoria: 'naturaleza'
    },
    {
        titulo: 'Paso de la Patria',
        descripcion: 'Vista panorámica de una ciudad moderna.',
        imagen: 'img/jpg2.jpg',
        categoria: 'naturaleza'
    },
    {
        titulo: 'Paso de la Patria',
        descripcion: 'Vista panorámica de una ciudad moderna.',
        imagen: 'img/jpg3.jpg',
        categoria: 'naturaleza'
    },
    {
        titulo: 'Paso de la Patria',
        descripcion: 'Vista panorámica de una ciudad moderna.',
        imagen: 'img/jpg4.jpg',
        categoria: 'naturaleza'
    },
    
];


document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
    
    // Filtrar galería por categoría al hacer clic en los botones de filtro
    document.getElementById('todos').addEventListener('click', () => filtrarGaleria('todos'));
    document.getElementById('naturaleza').addEventListener('click', () => filtrarGaleria('naturaleza'));
    document.getElementById('arquitectura').addEventListener('click', () => filtrarGaleria('arquitectura'));
});

function crearGaleria() {
    const galeriaContainer = document.getElementById('galeria');
    galeriaContainer.innerHTML = '';

    galeria.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('col-lg-4', 'col-md-6', 'mb-4');
        card.innerHTML = `
            <div class="card">
                <img src="${item.imagen}" class="card-img-top" alt="${item.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${item.titulo}</h5>
                    <p class="card-text">${item.descripcion}</p>
                </div>
            </div>
        `;

        galeriaContainer.appendChild(card);
    });
}

function filtrarGaleria(categoria) {
    const galeriaContainer = document.getElementById('galeria');
    
    galeriaContainer.innerHTML = '';

    if (categoria === 'todos') {
        crearGaleria();
    } else {
        const galeriaFiltrada = galeria.filter(item => item.categoria === categoria);
        galeriaFiltrada.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('col-lg-4', 'col-md-6', 'mb-4');
            card.innerHTML = `
                <div class="card">
                    <img src="${item.imagen}" class="card-img-top" alt="${item.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${item.titulo}</h5>
                        <p class="card-text">${item.descripcion}</p>
                    </div>
                </div>
            `;

            galeriaContainer.appendChild(card);
        });
    }
}
