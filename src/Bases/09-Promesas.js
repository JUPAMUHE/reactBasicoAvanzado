import {getHeroeByOwner,getHeroeById} from './Bases/08-import-find-filter'

/* const promesa = new Promise( (resolve, reject) =>  {
    setTimeout(() => {
        const id = getHeroeById(5);
        const owner = getHeroeByOwner('DC');
        resolve(id);
    }, 2000);
});

promesa.then( (id) => {
    console.log('Heroe: ',id);
}).catch((error) => console.warn(error)); */

const getHereoByIdAsync = (id) => {

    return new Promise( (resolve, reject) =>  {

        setTimeout(() => {
            const heroe = getHeroeById(id);
            !heroe ? reject('No se encontro este Heroe') : resolve(heroe);
        }, 1);

    })
}

getHereoByIdAsync(5).then (

    hereo => console.log('Heroe:' ,hereo)

).catch(console.warn);