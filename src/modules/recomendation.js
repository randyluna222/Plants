import { PlantRecommendationBuilder } from "./plantRecommendationBuilder.js"
import { getPlantImageName, getExtraImageName } from "../utils/getPlantsImage.js";


function getPlantRecommendation() {
  const form = document.getElementById("formContainer");
  const placement = form.querySelector('.radio-option:checked');
  const sunlight = form.querySelector('.radio-option:checked');
  const pets = form.querySelector('.radio-option:checked');
  const watering = form.querySelector('.radio-option:checked');
  const style = form.querySelector('.radio-option:checked');
  const extras = Array.from(form.querySelectorAll('.checkbox-option:checked'))
  .map((input) => input.value);
  
    if (![placement, sunlight, pets, watering, style].every(Boolean)) {
      alert("Please complete the form before generating a recommendation.");
      return null;
    }
  
    const plantRecommendationBuilder = new PlantRecommendationBuilder();
    const placementValue = placement.value;
    const sunlightValue = sunlight.value;
  
    switch (placementValue) {
      case "inside-indirect":
        plantRecommendationBuilder.withName("Low Light Plants");
        break;
      case "inside-lot-indirect":
        plantRecommendationBuilder.withName("Medium Light Plants");
        break;
      case "outside":
        plantRecommendationBuilder.withName("Outdoor Plants");
        break;
    }
  
    let plantName = plantRecommendationBuilder.name;
  
    switch (plantName) {
      case "Low Light Plants":
        if (watering.value === "overwater") {
          plantName = "Toxic Plant (Low Light)";
        } else {
          plantName = "Non-Toxic Plant (Low Light)";
        }
        break;
      case "Medium Light Plants":
        if (watering.value === "overwater") {
          plantName = "Toxic Plant (Medium Light)";
        } else {
          plantName = "Non-Toxic Plant (Medium Light)";
        }
        break;
      case "Outdoor Plants":
        if (pets.value === "no") {
          plantName = "Toxic Plant (Outdoor)";
        } else {
          plantName = "Non-Toxic Plant (Outdoor)";
        }
        break;
    }
  
    switch (sunlightValue) {
      case "yes": 
        plantRecommendationBuilder.withSoil("Composted Soil");
        sunlightValue = "Composted Soil";
        break;
      case "no":
        plantRecommendationBuilder.withSoil("Fertilized Soil");
        break;
    }
  
    switch (pets.value) {
      case "yes":
        plantRecommendationBuilder.withPotMaterial("Non-Toxic Plant");
        break;
      case "no":
        plantRecommendationBuilder.withPotMaterial("Toxic Plant");
        break;
    }
  
    switch (watering.value) {
      case "overwater":
        if (plantName.includes("Toxic")) {
          plantName += " (Low Light)";
        } else {
          plantName += " (Medium Light)";
        }
        plantRecommendationBuilder
          .withPotMaterial("Clay")
          .withSoil("Drainage Soil")
          .withPlantImage(getPlantImageName(plantName));
        break;
      case "underwater":
      case "neither":
        plantRecommendationBuilder.withPotMaterial("Ceramic");
        break;
    }
  
    switch (style.value) {
      case "minimalism":
        plantRecommendationBuilder.withPotStyle("Simple");
        break;
      case "decoration":
        plantRecommendationBuilder.withPotStyle("simple").withPotStyle("decorated");
        break;
      case "bright-colors":
        plantRecommendationBuilder.withPotStyle("Painted").withPotStyle("decorated");
        break;
    }
  
    plantRecommendationBuilder
      .withPotColor("clay")
      .withExtras(extras.map((extra) => getExtraImageName(extra)));
  
    const plantResult = plantRecommendationBuilder.build();
    return plantResult;
  }
  
  export { getPlantRecommendation };