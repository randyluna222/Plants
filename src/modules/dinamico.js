export function generarRadioButtons(containerId, opciones) {
  const radioButtonsContainer = document.getElementById(containerId);

  if (!Array.isArray(opciones)) {
    return;
  }

  opciones.forEach(opcion => {
    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = containerId + '_opcionRadio';
    radioInput.id = opcion.name;
    radioInput.value = opcion.value;
    radioInput.required = true;

    radioInput.classList.add('radio-option');

    const label = document.createElement('label');
    label.htmlFor = opcion.name;
    label.textContent = opcion.label;

    radioButtonsContainer.appendChild(radioInput);
    radioButtonsContainer.appendChild(label);
    radioButtonsContainer.appendChild(document.createElement('br'));
  });
}
  
  export function generarCheckboxes(checkboxesContainerId, opcionesCheckbox) {
    const checkboxesContainer = document.getElementById(checkboxesContainerId);
  
    if (!Array.isArray(opcionesCheckbox)) {
      return;
    }
  
    opcionesCheckbox.forEach(opcion => {
      const checkboxInput = document.createElement('input');
      checkboxInput.type = 'checkbox';
      checkboxInput.name = checkboxesContainerId + '_opcionCheckbox';
      checkboxInput.id = opcion.name;
      checkboxInput.value = opcion.value;
  
      checkboxInput.classList.add('checkbox-option');
  
      const label = document.createElement('label');
      label.htmlFor = opcion.name;
      label.textContent = opcion.label;
  
      checkboxesContainer.appendChild(checkboxInput);
      checkboxesContainer.appendChild(label);
      checkboxesContainer.appendChild(document.createElement('br'));
    });
  }
  
  const opcionesGrupo1 = [
    { class: "radio-option" , name: 'placement', label: 'Inside with some indirect light', value: 'inside-indirect' },
    { class: "radio-option", name: 'placement', label: 'Inside with a lot of indirect light', value: 'inside-lot-indirect' },
    { class: "radio-option", name: 'placement', label: 'Outside', value: 'outside' }
  ];
  
  const opcionesGrupo2 = [
    { class: "radio-option2",name: 'sunlight', value: 'yes', label: 'Yes' },
    { class: "radio-option",name: 'sunlight', value: 'no', label: 'No' }
  ];
  
  const opcionesGrupo3 = [
    { class: "radio-option",name: 'pets', value: 'yes', label: 'Yes' },
    { class: "radio-option",name: 'pets', value: 'no', label: 'No' }
  ];
  
  const opcionesGrupo4 = [
    { class: "radio-option",name: 'watering', value: 'overwater', label: 'Overwater' },
    { class: "radio-option",name: 'watering', value: 'underwater', label: 'Underwater' },
    { class: "radio-option",name: 'watering', value: 'neither', label: 'Neither / I don’t know'}
  ];
  
  const opcionesGrupo5 = [
    { class: "radio-option",name: "style", value: "minimalism", label: 'I like minimalism and material colors' },
    { class: "radio-option",name: "style", value: "decoration", label: 'like some decoration and simple colors' },
    { class: "radio-option",name: "style", value: "bright-colors", label: 'I like a lot of decoration and bright colors'}
  ];
  
  const opcionesCheckbox = [
    { name: 'extras', value: 'moss-pole',  label: 'Moss pole' },
    { name: 'extras', value: 'pebbles', label: 'Pebbles' },
    { name: 'extras', value: 'mini-plants', label: 'Smaller plants' }
  ];
  
  generarRadioButtons('radioButtonsContainer1', opcionesGrupo1);
  generarRadioButtons('radioButtonsContainer2', opcionesGrupo2);
  generarRadioButtons('radioButtonsContainer3', opcionesGrupo3);
  generarRadioButtons('radioButtonsContainer4', opcionesGrupo4);
  generarRadioButtons('radioButtonsContainer5', opcionesGrupo5);
  generarCheckboxes('checkboxesContainer', opcionesCheckbox);
