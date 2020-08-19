
const getImagen = async () =>{
    try {
        const apiKey = 'rYbWT0gq9xLf215mqK82CPkvI1wbaell';
        const urlApi = 'https://api.giphy.com/v1/gifs/random?api_key='
        const resp = await fetch(`${urlApi}${apiKey}`);
        const {data} = await resp.json();
        const { url }= data.images.original;
            const img = document.createElement('img');
            img.src= url;
            document.body.append(img);
    } catch (error) {
        //manejo del error
        console.log(error)
    }
}

getImagen();

