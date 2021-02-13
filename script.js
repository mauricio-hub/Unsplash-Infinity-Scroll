const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

const count = 10;
const apiKey = "Euz8G7EpRZlZPrJrAew6XGYVtas8FHYP6Q9StZiD8Rw"
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


//funcion para crear elementos html para los link y las fotos y pasandolas al dom

function displayPhotos(){
	//
	photosArray.forEach((photo) =>{
		//creamos el elemento a
		const item = document.createElement('a');
		item.setAttribute('href',photo.links.html);  
		item.setAttribute('target','_blank');
		//creando la etiqueta img
		const img = document.createElement('img');
		img.setAttribute('src',photo.urls.regular);
		img.setAttribute('alt',photo.alt_description);
		img.setAttribute('title',photo.alt_description);
		


		//pasando img dentro de la etiqueta a
		item.appendChild(img)
		//pasando la etiqueta a y img dentro del contenedor
		imageContainer.appendChild(item);
	});
}


//obteniendo fotos y llenando el array do fotos
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
	//console.log(photosArray)
	
	displayPhotos()
  } catch (error) {
    console.log(error)
  }
}

//scroll
window.addEventListener('scroll',()=>{
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight-1000)
		
	{
		getPhotos();
	}
})

getPhotos();