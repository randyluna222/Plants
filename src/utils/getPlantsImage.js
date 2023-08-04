const plantImageNames = {
  "Low Light Plants": "plant-sansevieria",
  "Medium Light Plants": "plant-aglaonema",
  "Outdoor Plants": "plant-aloe",
  "Non-Toxic Plant (Low Light)": "plant-fern",
  "Toxic Plant (Low Light)": "plant-peace-lily",
  "Non-Toxic Plant (Medium Light)": "plant-monstera",
  "Toxic Plant (Medium Light)": "plant-peace-lily",
  "Non-Toxic Plant (Outdoor)": "plant-cactus",
  "Toxic Plant (Outdoor)": "plant-aloe",
};

function getPlantImageName(plantName) {
  return plantImageNames[plantName] || "";
}

function getPotImageName(material, style) {
  let potName = `simple-${material}-pot`;

  if (style === "decorated") {
    potName += "-decorated";
  } else if (style === "bright-colors") {
    potName = `painted-${material}-pot-decorated`;
  }

  return potName;
}

const extraImageNames = {
  "moss-pole": "moss-pole",
  "pebbles": "pebbles",
  "mini-plants": "mini-plants",
};

function getExtraImageName(extras) {
  return extraImageNames[extras] || "";
}

export { getPlantImageName, getPotImageName, getExtraImageName };



