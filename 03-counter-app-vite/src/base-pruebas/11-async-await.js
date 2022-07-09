export const getImagen = async() => {

    try {

        const apiKey = 'Kbjz1NThSYJI71BytStIx0Ns7RUpbO57';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        const { url } = data.images.original;

        return url;
    } catch (error) {
        console.error(error);
        return "No se encontro la imagen";
    }
}



