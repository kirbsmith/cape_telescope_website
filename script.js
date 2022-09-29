document.querySelector('#searchAPOD').addEventListener('click', findAPODDate);

function findAPODDate(){
  let date = document.querySelector('#dateSearch').value;
  date = date.split('/').reverse().join('/');
  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      var imageUrl = data.hdurl;
      var parentSection = document.getElementById('APODSection');
      var currentImage = parentSection.querySelector('img');

      if (currentImage) {
        currentImage.src = imageUrl;
        currentImage.setAttribute('height', '800px');
      } else {
        var loadedImage = document.createElement('img');
        loadedImage.src = imageUrl;
        loadedImage.setAttribute('height', '800px');
        parentSection.appendChild(loadedImage);
      }
    })
}
