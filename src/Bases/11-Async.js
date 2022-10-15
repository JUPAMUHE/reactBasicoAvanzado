
const getImagen = async () => {

    try {
        const apiKey = '0avSNWWUfLj5twcRTOOiF44zUXUUzmp7';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.fixed_width_still;
        
        const image = document.createElement('img');
        image.src = url;
        document.body.appendChild(image);
    } catch (error) {
        console.warn('No Encontrado',error);
    }
    
}

getImagen();


