import { handleRecommendationData, handleExtras, handlePotTypes, handleSoilTypes, handleSelectSoilType } from './modules/eventHandlers.js';

document.addEventListener('DOMContentLoaded', () => {
  handleRecommendationData();

  const checkboxesExtras = document.querySelectorAll('input[name="extras"]');
  const infoExtras = document.querySelector('.info-extras');
  handleExtras(checkboxesExtras, infoExtras);

  const inputPot = document.querySelectorAll('input[name="potType"]');
  const infoPot = document.querySelector('.info-pot');
  handlePotTypes(inputPot, infoPot);

  const inputSoil = document.querySelectorAll('input[name="soilType"]');
  const infoSoil = document.querySelector('.info-soil');
  handleSoilTypes(inputSoil, infoSoil);

  const selectSoilType = document.getElementById('plantSelect');
  const infoName = document.querySelector('.info-name');
  const infoNamee = document.querySelector('.info-namee');
  handleSelectSoilType(selectSoilType, infoName, infoNamee);
});
