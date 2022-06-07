// Fetch API

const apiKey = '2dwhHKI56ba5Zqfa6JiQMx7wyKxuF4gU';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then( res => {
//     res.json().then( data => {
//         console.log(data);
//     });
// } )
// .catch( console.warn )

peticion
    .then(res => res.json() )
    .then( ({data}) => {
        const { url } = data.images.original;

        console.log(url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch( console.warn);