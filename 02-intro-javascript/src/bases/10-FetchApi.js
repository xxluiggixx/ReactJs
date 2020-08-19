//Fetch API
//Doc: https://developer.mozilla.org/es/docs/Web/API/Fetch_API
//API key: rYbWT0gq9xLf215mqK82CPkvI1wbaell

const apiKey = 'rYbWT0gq9xLf215mqK82CPkvI1wbaell';
const urlApi = 'https://api.giphy.com/v1/gifs/random?api_key='

const peticion = fetch(`${urlApi}${apiKey}`);
peticion
    .then(resp => resp.json())
    .then(({data})=>{
        const { url }=data.images.original;
        const img = document.createElement('img');
        img.src= url;
        document.body.append(img);
    })
    .catch(console.error)