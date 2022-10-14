const persona = ['Juan','Pablo','Lucas'];

const [ , ,l] = persona;

//console.log(l); 

const returnArreglo = () => {
    return ['ABC','123'];
}

const [letras, numeros] = returnArreglo();
//console.log(numeros);
//console.log(letras);

//TAREA

const usarState = (valor) => {
    return [ valor, ()=>{console.log('Hola MUNDO')} ];
}

const arr = usarState('Goku');

//TAREA 

const [nombre,setNombre] = usarState('Goku');

console.log(nombre);
setNombre();