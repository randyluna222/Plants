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

const potImageName = {
  "minimalism": "painted-ceramic-pot-decorated",
  "decoration": "painted-clay-pot-decorated",
  "bright-colors": "simple-ceramic-pot-decorated",
};

function getPlantImageName(plantName) {
  return plantImageNames[plantName] || "";
}

function getPotImageName(style) {
  return potImageName[style] || "";
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



