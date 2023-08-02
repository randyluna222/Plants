
// Builder para la ficha de planta
class PlantRecommendationBuilder {
  constructor() {
    this.name = '';
    this.soil = '';
    this.potMaterial = '';
    this.potStyle = '';
    this.potColor = '';
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

  build() {
    return {
      name: this.name,
      soil: this.soil,
      pot: `${this.potMaterial} pot${this.potStyle ? ` with ${this.potStyle} decorations` : ''}`,
      color: this.potColor,
      extras: this.extras.join(', ')
    };
  }
}

// Exportar el constructor del Builder para poder usarlo en otros módulos
export default PlantRecommendationBuilder;