import {heroes} from '../data/heroes';

//Metodo para Buscar un Heroe Especifico por id
const getHeroeById = (id) =>{
    return heroes.find( (heroe) => heroe.id === id );
}

//console.log(getHeroeById(5));

const getHeroeByOwner = (owner) => {
    return heroes.filter( (heroe) => heroe.owner === owner)
}

//console.log(getHeroeByOwner('Marvel')); 
export {getHeroeByOwner,getHeroeById};