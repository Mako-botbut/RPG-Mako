class Personaje {
    constructor(nombre, salud, mana, fuerza) {
        this.nombre = nombre;
        this.salud = salud;
        this.mana = mana;
        this.fuerza = fuerza;
        this.nivel = 1;
        this.experiencia = 0;

        //! Posibles agregados
        /* 
            this.ilvl = 0;
        */
    }

    experienciaGanada(exp) {
        this.experiencia += exp;
        if (this.experiencia >= 100) {
            this.lvlup();
        }
        //! El jugador necesitara mas experiencia una vez ya haya subido de nivel, es decir, de 100 pasara a necesitar 125, ya no 100 y asi con los demas niveles
    }


    lvlup() {
        this.nivel++;
        this.experiencia = 0;
        this.salud += 10;
        this.mana += 5;
        this.fuerza += 2;
        registrarAccion('Has subido de nivel!!');
    }

    // Método para actualizar la tarjeta de presentación
    actualizarTarjeta() {
        const saludElem = document.getElementById(`${this.nombre}-salud`);
        const manaElem = document.getElementById(`${this.nombre}-mana`);
        const nivelElem = document.getElementById(`${this.nombre}-nivel`);
        const expElem = document.getElementById(`${this.nombre}-exp`);
        
        // Actualizar los valores en la tarjeta de presentación
        if (saludElem) saludElem.textContent = this.salud;
        if (manaElem) manaElem.textContent = this.mana;
        if (nivelElem) nivelElem.textContent = this.nivel;
        if (expElem) expElem.textContent = this.experiencia;
    }

}

function registrarAccion(texto) {
    let log = document.getElementById("log");
    let entrada = document.createElement("p");
    entrada.textContent = texto;
    log.appendChild(entrada);
}

//* Clases

class Mago extends Personaje {
    constructor(nombre) {
        super(nombre, 75, 240, 15);
    }

    Fireball() {
        if (this.mana >= 25) {
            this.mana -= 25;
            registrarAccion('FIREBAAAALL!!');
            this.experienciaGanada(25);
        } else {
            registrarAccion('No tienes suficiente mana');
        }
        this.actualizarTarjeta();
    }

    Meditar() {
        this.mana += 35;
        registrarAccion('Has recuperado mana');
        this.experienciaGanada(25);
        this.actualizarTarjeta();
    }

    Frostnova() {
        if (this.mana >= 65) {
            this.mana -= 65;
            registrarAccion('FIRE AND FROST, THIS IS END NOW!! FROSTNOVA!');
            this.experienciaGanada(25);
        } else {
            registrarAccion('No tienes suficiente mana');
        }
        this.actualizarTarjeta();
    }
}

class Guerrero extends Personaje {
    constructor(nombre) {
        super(nombre, 125, 75, 60);
    }

    AtaqueCortante() {
        if (this.mana >= 15) {
            this.mana -= 15;
            registrarAccion('SLAASH!!');
            this.experienciaGanada(25);
        } else {
            registrarAccion('No tienes suficiente mana');
        }
        this.actualizarTarjeta();
    }

    DefensaImpenetrable() {
        if (this.mana >= 20) {
            this.mana -= 20;
            this.salud += 10;
            registrarAccion('Aumento de defensa!!');
            this.experienciaGanada(25);
        } else {
            registrarAccion('No tienes suficiente mana');
        }
        this.actualizarTarjeta();
    }

    GritodeBatalla() {
        if (this.mana >= 10) {
            this.mana -= 10;
            this.salud += 5;
            this.mana += 5;
            registrarAccion('AHHHHHH!!');
            this.experienciaGanada(25);
        } else {
            registrarAccion('No tienes suficiente mana');
        }
        this.actualizarTarjeta();
    }
}

class Sanador extends Personaje {
    constructor(nombre) {
        super(nombre, 65, 190, 20);
    }

    Curacion() {
        if (this.mana >= 25) {
            this.mana -= 25;
            this.salud += 20;
            registrarAccion('Curando!!');
            this.experienciaGanada(25);
        } else {
            registrarAccion('No tienes suficiente mana');
        }
        this.actualizarTarjeta();
    }

    CuracionAliada(aliado) {
        if (this.mana >= 25) {
            this.mana -= 25;
            aliado.salud += 20;
            registrarAccion('Curando!!');
            this.experienciaGanada(25);
        } else {
            registrarAccion('No tienes suficiente mana');
        }
        this.actualizarTarjeta();
    }

    DefensaBendita() {
        if (this.mana >= 10) {
            this.mana -= 10;
            this.salud += 15;
            registrarAccion('Bendicion!!');
            this.experienciaGanada(25);
        } else {
            registrarAccion('No tienes suficiente mana');
        }
        this.actualizarTarjeta();
    }

    Resucitar() {
        if (this.mana >= 70) {
            this.mana -= 70;
            aliado.salud += 60; //! Apuntar a la vida del aliado derrotado this.salud == personaje(nombre) ++, algo asi
            registrarAccion('RISE UUUUP!!');
            this.experienciaGanada(25);
        } else {
            registrarAccion('No tienes suficiente mana');
        }
        this.actualizarTarjeta();
    }
}

class Cazador extends Personaje {
    constructor(nombre) {
        super(nombre, 95, 135, 45);
    }

    DisparoCertero() {
        if (this.mana >= 20) {
            this.mana -= 20;
            registrarAccion('PUNTERIA!!');
            this.experienciaGanada(25);
        } else {
            registrarAccion('No tienes suficiente mana');
        }
        this.actualizarTarjeta();
    }

    LluviadeFlechas() {
        if (this.mana >= 15) {
            this.mana -= 15;
            registrarAccion('LLUVIAA!!');
            this.experienciaGanada(25);
        } else {
            registrarAccion('No tienes suficiente mana');
        }
        this.actualizarTarjeta();
    }

    DisparoVenenoso() {
        if (this.mana >= 17) {
            this.mana -= 17;
            registrarAccion('SERPIENTEEEE!!');
            this.experienciaGanada(25);
        } else {
            registrarAccion('No tienes suficiente mana');
        }
        this.actualizarTarjeta();
    }
}

/* Ejemplo
const mago = new Mago("Merlín");
mago.Frostnova();
console.log(mago);


const guerrero = new Guerrero("Conan");
guerrero.AtaqueCortante();
console.log(guerrero);

const sanador = new Sanador("Ángel");
const cazador = new Cazador("Robin");

sanador.CuracionAliada(cazador);

console.log(sanador);
console.log(cazador);*/