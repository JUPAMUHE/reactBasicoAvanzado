const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const nombre = 'Juan';

const saludar2 =  (nombre)=>{
    return `Hola, ${nombre}`;
}

//const saludar3 =  (nombre)=> `Hola, ${nombre}`;

//----------------------------------------------------------------}
const getUsuarioActivo =  (nombre) => ({
    uid : '4235235',
    username : nombre,
});

const userActivo = getUsuarioActivo('Juan Pablo');

const userActivo2 = {...userActivo};
userActivo2.username='Lucas Mateo';
console.log(userActivo);
console.log(userActivo2);