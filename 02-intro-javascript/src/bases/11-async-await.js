// aSync Await

const getImagen = async () => {
    try {
        const apiKey = '2dwhHKI56ba5Zqfa6JiQMx7wyKxuF4gU';
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await res.json();
    
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (err) {
        // manejo del error
        console.error(err);
    }
}

getImagen();