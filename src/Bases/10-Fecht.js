const apiKey = '0avSNWWUfLj5twcRTOOiF44zUXUUzmp7';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then((response) => response.json())
    .then(({ data }) => {

        const { url } = data.images.fixed_width_still;

        const image = document.createElement('img');
        image.src = url;

        document.body.appendChild(image);

    })
