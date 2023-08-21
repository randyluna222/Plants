const realPlantNames = {
  "Low Light Plants": "Sansevieria",
  "Medium Light Plants": "Aglaonema",
  "Outdoor Plants": "Aloe-Vera",
  "Non-Toxic Plant (Low Light)": "Boston-Fern",
  "Toxic Plant (Low Light)": "Peace-Lily",
  "Non-Toxic Plant (Medium Light)": "Monstera",
  "Toxic Plant (Medium Light)": "Peace-Lily",
  "Non-Toxic Plant (Outdoor)": "Cactus",
  "Toxic Plant (Outdoor)": "Aloe-Vera",
};

const getRealPlantName = (genericName) => realPlantNames[genericName];

export { getRealPlantName };