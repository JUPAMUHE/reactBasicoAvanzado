//Desestructuracion o Asignacion Desesturante


const persona = {
    nombre : 'Juan',
    edad : 45,
    clave : 'TonyStark',
}

//const {edad,clave,nombre} = persona;

//console.log(edad);
//console.log(clave);
//console.log(nombre);

const returnPersona = ({edad,nombre,clave,rango = 'Soldado'}) => { 

   // console.log(clave,nombre,rango);
   return {
        nombreClave : clave,
        anios : edad,
        direccion : {
            diagonal : 16,
            calle : '7-60'
        }
   }
}

const {nombreClave,anios,direccion:{diagonal,calle}} = returnPersona(persona);


console.log(nombreClave);
console.log(anios);
console.log(diagonal,calle);