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
      // console.log(data.hdurl);
      // var imageSection = document.createElement("section");
      // imageSection.setAttribute('id', 'APODSection');
      // var imageSectionSource = document.getElementById('APODSection')
      // imageSectionSource.appendChild(imageSection);
      // var img = document.createElement("img");
      // img.src = data.hdurl;
      // img.setAttribute('height', '800px');
      // if (img) {
      //   img.src = data.hdurl;
      // }
      // else {
      //   var loadedImage = document.createElement('img');
      //   loadedImage.src = data.hdurl;
      //   imageSection.appendChild(loadedImage);
    })
}
// img.src = data.hdurl;

// var creatureSection = document.createElement("section")
//       creatureSection.setAttribute('class', 'card_section_with_information')
//       var creatureSectionSrc = document.getElementById('card_image_section')
//       creatureSectionSrc.appendChild(creatureSection)
//
//       var img = document.createElement("img")
//       img.src = data.cards[0].imageUrl
//       var cardName = data.cards[0].name
//       // var src = document.getElementById('card_image_section')
//       creatureSection.appendChild(img)
