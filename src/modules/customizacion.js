import {
  getPlantImageName,
  getPotImageName,
  getExtraImageName
} from '../utils/getPlantsImage.js'


function createImageElement(src, alt) {
  const imgElement = document.createElement('img');
  imgElement.src = src;
  imgElement.alt = alt;
  return imgElement;
}

function renderPreview(data, container) {
  const plantPreview = container || document.getElementById('plantPreview');
  plantPreview.innerHTML = '';

  const titlee = document.createElement('h2');
  titlee.classList.add('info-namee');
  titlee.textContent = `Preview`;
  plantPreview.appendChild(titlee);

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  imageContainer.appendChild(createImageElement(`assets/${getPlantImageName(data.plantName)}.png`));

  const plantStyle = 'decoration';
  const imageName = getPotImageName(plantStyle);
  if (imageName !== '') {
    const imagePath = `assets/${imageName}.png`;
    const imageElement = document.createElement('img');
    imageElement.src = imagePath;
    imageContainer.appendChild(imageElement);
  }

  for (const extra of data.extras) {
    imageContainer.appendChild(createImageElement(`assets/${getExtraImageName(extra)}.png`));
  }

  plantPreview.appendChild(imageContainer);

  const information = document.createElement('div');
  information.classList.add('plantPreview');

  const title = document.createElement('p');
  title.classList.add('info-name');
  title.textContent = `Name: ${data.plantName}`;
  plantPreview.appendChild(title);

  const soilInfo = document.createElement('p');
  soilInfo.textContent = `Soil: ${data.soil}`;
  soilInfo.classList.add('info-soil');
  plantPreview.appendChild(soilInfo);

  const potInfo = document.createElement('p');
  potInfo.textContent = `Pot: ${getPotImageName(data.plantStyle)}`;
  potInfo.classList.add('info-pot');
  plantPreview.appendChild(potInfo);

  const colorInfo = document.createElement('p');
  colorInfo.textContent = `Color: ${getPotImageName(data.material)}`;
  colorInfo.classList.add('info-color');
  plantPreview.appendChild(colorInfo);

  if (data.extras.length > 0) {
    const extrasInfo = document.createElement('p');
    extrasInfo.classList.add('info-extras');
    extrasInfo.textContent = `Extras: ${getExtraImageName(data.extras.join(', '))}`;
    plantPreview.appendChild(extrasInfo);
  }

  const custom = document.createElement('button');
  custom.textContent = `Check store availability >`;
  custom.id = 'custom-button';
  plantPreview.appendChild(custom);

  custom.addEventListener('click', function () {
    const recommendationData = {
      plantName: (data.name),
      soil: data.soil,
      pot: getPotImageName(data.plantStyle),
      color: getPotImageName(data.material),
      extras: data.extras
    };

    saveRecommendationDataa(recommendationData);
    redirectToCustomVieww();
  });
}

export { renderPreview };

export function saveRecommendationData(data) {
  const serializedData = JSON.stringify(data);
  localStorage.setItem('recommendationData', serializedData);
}

export function redirectToCustomView() {
  window.location.href = 'customizacion.html';
}

export function saveRecommendationDataa(data) {
  const serializedData = JSON.stringify(data);
  localStorage.setItem('recommendationData', serializedData);
}

export function redirectToCustomVieww() {
  window.location.href = 'ckeckplant.html';
}