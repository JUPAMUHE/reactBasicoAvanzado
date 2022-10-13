const persona = {
    nombre : 'Tony',
    apellidos : 'Stark',
    edad : 45,
    direccion : {
        ciudad : 'Monteria',
        diagonal : '16',
        calle : '7-60',
    }
};

console.dir({persona});

const persona2 = {...persona};
persona2.nombre = 'Juan'
console.dir({persona2});