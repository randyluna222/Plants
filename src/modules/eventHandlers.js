import {renderPreview} from './customizacion.js'
import Publisher from './publisher.js';

export function handleRecommendationData() {
  const recommendationData = JSON.parse(localStorage.getItem('recommendationData'));
  if (recommendationData) {
    renderPreview(recommendationData);
  }
}

export function handleExtras(checkboxes, infoExtras) {
  const publisher = new Publisher();

  function updateInfoExtras(data) {
    const selectedExtras = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value)
      .join(', ');

    infoExtras.textContent = `Extras: ${data} - ${selectedExtras}`;
  }

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selectedExtras = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value)
        .join(', ');

      publisher.publish(selectedExtras);
    });
  });

  publisher.subscribe(updateInfoExtras);
}

export function handlePotTypes(inputPot, infoPot) {
  const publisher = new Publisher();

  function updateInfoPot(data) {
    const selectedPotTypes = Array.from(inputPot)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value)
      .join(', ');

    infoPot.textContent = `Pot: ${data} - ${selectedPotTypes}`;
  }

  inputPot.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selectedPotTypes = Array.from(inputPot)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value)
        .join(', ');

      publisher.publish(selectedPotTypes);
    });
  });

  publisher.subscribe(updateInfoPot);
}

export function handleSoilTypes(inputSoil, infoSoil) {
  const publisher = new Publisher();

  function updateInfoSoil(data) {
    const selectedSoilTypes = Array.from(inputSoil)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value)
      .join(', ');

    infoSoil.textContent = `Soil: ${data} - ${selectedSoilTypes}`;
  }

  inputSoil.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selectedSoilTypes = Array.from(inputSoil)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value)
        .join(', ');

      publisher.publish(selectedSoilTypes);
    });
  });

  publisher.subscribe(updateInfoSoil);
}

export function handleSelectSoilType(selectSoilType, infoName, infoNamee) {
  const publisher = new Publisher();

  function updateInfoSelect(data) {
    infoName.textContent = `Name: ${data}`;
    infoNamee.textContent = `${data}`;
  }

  selectSoilType.addEventListener('change', () => {
    const selectedSoilType = selectSoilType.value;
    publisher.publish(selectedSoilType);
  });

  publisher.subscribe(updateInfoSelect);
}