function mostrarPersonajes() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = `<h1>Juego RPG</h1>
        <div class="personajes"></div>
        <h2>Registro de Acciones</h2>
        <div id="log"></div>`;

    const personajesDiv = contenedor.querySelector(".personajes");

    // Creando instancias de personajes
    const personajes = [
        new Mago("wizcat"),
        new Guerrero("Catwallace"),
        new Sanador("priestcat"),
        new Cazador("huntcat")
    ];

    personajes.forEach(personaje => {
        let cartaPresentacion = document.createElement("div");
        cartaPresentacion.classList.add("personaje");

        // Definir la imagen según el tipo de personaje
        let imagenSrc = `img/${personaje.nombre.toLowerCase()}.jpg`;

        // Agregar los botones según las habilidades del personaje
        let botonesHTML = "";
        if (personaje instanceof Mago) {
            botonesHTML = `
                <button onclick="personajes[0].Fireball()">Fireball</button>
                <button onclick="personajes[0].Meditar()">Meditar</button>
                <button onclick="personajes[0].Frostnova()">Frostnova</button>
            `;
        } else if (personaje instanceof Guerrero) {
            botonesHTML = `
                <button onclick="personajes[1].AtaqueCortante()">Ataque Cortante</button>
                <button onclick="personajes[1].DefensaImpenetrable()">Defensa</button>
                <button onclick="personajes[1].GritodeBatalla()">Grito de Batalla</button>
            `;
        } else if (personaje instanceof Sanador) {
            botonesHTML = `
                <button onclick="personajes[2].Curacion()">Curación</button>
                <button onclick="personajes[2].DefensaBendita()">Defensa Bendita</button>
            `;
        } else if (personaje instanceof Cazador) {
            botonesHTML = `
                <button onclick="personajes[3].DisparoCertero()">Disparo Certero</button>
                <button onclick="personajes[3].LluviadeFlechas()">Lluvia de Flechas</button>
                <button onclick="personajes[3].DisparoVenenoso()">Disparo Venenoso</button>
            `;
        }

        cartaPresentacion.innerHTML = `
            <h2>${personaje.nombre}</h2>
            <img src="${imagenSrc}" width="200">
            <p>Salud: <span id="${personaje.nombre}-salud">${personaje.salud}</span></p>
            <p>Mana: <span id="${personaje.nombre}-mana">${personaje.mana}</span></p>
            <p>Fuerza: ${personaje.fuerza}</p>
            <p>Nivel: <span id="${personaje.nombre}-nivel">${personaje.nivel}</span></p>
            <p>Experiencia: <span id="${personaje.nombre}-exp">${personaje.experiencia}</span></p>
            <div class="acciones">
                ${botonesHTML}
            </div>
        `;

        personajesDiv.appendChild(cartaPresentacion);
    });

    // Hacer que los personajes sean accesibles globalmente
    window.personajes = personajes;
}
