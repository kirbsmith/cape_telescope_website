document.querySelector('#searchAPOD').addEventListener('click', findAPODDate);

function findAPODDate(){
  let date = document.querySelector('#dateSearch').value;
  date = date.split('/').reverse().join('/');
  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      var imageUrl = data.hdurl;
      var descriptionSource = data.explanation;
      var parentSection = document.getElementById('APODSection');
      var currentParagraph = document.createElement('p');
      parentSection.appendChild(currentParagraph);
      var currentDescription = parentSection.querySelector('p');
      var currentImage = parentSection.querySelector('img');

      if (currentImage){
        currentImage.src = imageUrl;
        currentImage.setAttribute('height', '600px');
      } else {
        var loadedImage = document.createElement('img');
        loadedImage.src = imageUrl;
        loadedImage.setAttribute('height', '600px');
        parentSection.appendChild(loadedImage);
      }

      function renewText() {
        var originalText = currentParagraph;
        var newText = descriptionSource;
        document.querySelector('p').textContent = newText;
      }

      renewText();
    })
}
