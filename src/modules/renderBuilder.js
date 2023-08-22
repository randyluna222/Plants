import { getRealPlantName } from "../utils/getRealPlantsName.js";
import { getPlantImageName, getPotImageName, getExtraImageName } from "../utils/getPlantsImage.js";

function createImageElement(src, alt) {
  const imgElement = document.createElement("img");
  imgElement.src = src;
  imgElement.alt = alt;
  return imgElement;
}

function renderRecommendation(plant, container) {
  const recommendationContainer = container || document.getElementById("plantRecommendation");
  recommendationContainer.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = getRealPlantName(plant.name);

  recommendationContainer.appendChild(title);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  imageContainer.appendChild(createImageElement(`Assets/${getPlantImageName(plant.name)}.png`));

  for (const extra of plant.extras) {
    imageContainer.appendChild(createImageElement(`Assets/${getExtraImageName(extra)}.png`));
  }

  if (plant.potColor) {
    imageContainer.appendChild(createImageElement(`Assets/${getPotImageName( plant.potColor)}.png`,getPotImageName(plant.potName)));
  }

  if (plant.potMaterial){
    imageContainer.appendChild(createImageElement(`Assets/${getPotImageName(plant.potMaterial)}.png`, getPotImageName(plant.potName)))
  }

  recommendationContainer.appendChild(imageContainer);

  const information = document.createElement("div");
  information.classList.add("information");

  const plantInfo = document.createElement("p");
  plantInfo.textContent = `Name: ${getRealPlantName(plant.name)}`;
  information.appendChild(plantInfo);

  const soilInfo = document.createElement("p");
  soilInfo.textContent = `Soil: ${plant.soil}`;
  information.appendChild(soilInfo);

  const potInfo = document.createElement("p");
  potInfo.textContent = `Pot: ${getPotImageName(plant.potMaterial)}`;
  information.appendChild(potInfo);

  const colorInfo = document.createElement("p");
  colorInfo.textContent = `Color: ${getPotImageName(plant.potColor)}`;
  information.appendChild(colorInfo);

  if (plant.extras.length > 0) {
    const extrasInfo = document.createElement("p");
    extrasInfo.textContent = `Extras: ${getExtraImageName(plant.extras.join(", "))}`;
    information.appendChild(extrasInfo);
  }

  recommendationContainer.appendChild(information);

  const custom = document.createElement('button');
  custom.textContent = `Check store availability >`;
  custom.id = 'custom-button';
  information.className = 'information';
  information.appendChild(custom);

  custom.addEventListener('click', function () {
    const recommendationData = {
      plantName: (plant.name),
      soil: plant.soil,
      pot: getPotImageName(plant.plantStyle),
      color: getPotImageName(plant.material),
      extras: plant.extras
    };

    saveRecommendationData(recommendationData);
    redirectToCustomView();
  });
}

export { renderRecommendation };

export function saveRecommendationData(data) {
  const serializedData = JSON.stringify(data);
  localStorage.setItem('recommendationData', serializedData);
}

export function redirectToCustomView() {
  window.location.href = 'customizacion.html';
}