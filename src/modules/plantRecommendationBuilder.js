class PlantRecommendationBuilder {
  constructor() {
    this.name = '';
    this.soil = '';
    this.potMaterial = '';
    this.potStyle = '';
    this.potColor = '';
    this.plantImage = '';
    this.extras = [];
  }

  withName(name) {
    this.name = name;
    return this;
  }

  withSoil(soil) {
    this.soil = soil;
    return this;
  }

  withPotMaterial(material) {
    this.potMaterial = material;
    return this;
  }

  withPotStyle(style) {
    this.potStyle = style;
    return this;
  }

  withPotColor(color) {
    this.potColor = color;
    return this;
  }

  withExtras(extras) {
    this.extras = extras;
    return this;
  }

  withPlantImage(plantImage) {
    this.plantImage = plantImage;
    return this;
  }

  build() {
    return {
      name: this.name,
      soil: this.soil,
      material: this.potMaterial, 
      style: this.potStyle,
      withPotColor: this.potColor,
      plantImage: this.plantImage,
      extras: this.extras
    };
  }
}

export  {PlantRecommendationBuilder};