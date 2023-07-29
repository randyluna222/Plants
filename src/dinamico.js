export function generarRadioButtons(containerId, opciones) {
  const radioButtonsContainer = document.getElementById(containerId);

  if (!Array.isArray(opciones)) {
    return;
  }

  opciones.forEach(opcion => {
    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = containerId + '_opcionRadio';
    radioInput.id = opcion.id;
    radioInput.required = true;

    const label = document.createElement('label');
    label.htmlFor = opcion.id;
    label.textContent = opcion.label;

    radioButtonsContainer.appendChild(radioInput);
    radioButtonsContainer.appendChild(label);
    radioButtonsContainer.appendChild(document.createElement('br'));
  });
}

export function generarCheckboxes(checkboxesContainerr, opcionesCheckbox) {
  const checkboxesContainer = document.getElementById(checkboxesContainerr);

  if (!Array.isArray(opcionesCheckbox)) {
    return;
  }
  opcionesCheckbox.forEach(opcion => {
    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.name = checkboxesContainerr + '_opcionCheckbox';
    checkboxInput.id = opcion.id;

    const label = document.createElement('label');
    label.htmlFor = opcion.id;
    label.textContent = opcion.label;

    checkboxesContainer.appendChild(checkboxInput);
    checkboxesContainer.appendChild(label);
    checkboxesContainer.appendChild(document.createElement('br'));
  });
}

const opcionesGrupo1 = [
  { id: 'Inside with some indirect light', label: 'Inside with some indirect light' },
  { id: 'Inside with a lot of indirect light', label: 'Inside with a lot of indirect light' },
  { id: 'Outside', label: 'Outside' }
];

const opcionesGrupo2 = [
  { id: 'Yes', label: 'Yes' },
  { id: 'No', label: 'No' }
];


 const opcionesGrupo3 = [
  { id: 'Yes', label: 'Yes' },
  { id: 'No', label: 'No' }
];

 const opcionesGrupo4 = [
   { id: 'Overwater', label: 'Overwater' },
   { id: 'Underwater', label: 'Underwater' },
   { id: 'Neither / I don’t know', label: 'Neither / I don’t know' }
 ];

 const opcionesGrupo5 = [
   { id: 'I like minimalism and material colors', label: 'I like minimalism and material colors' },
   { id: ' like some decoration and simple colors', label: ' like some decoration and simple colors' },
   { id: 'I like a lot of decoration and bright colors', label: 'I like a lot of decoration and bright colors' }
 ];

 const opcionesCheckbox = [
  { id: 'Moss pole', label: 'Moss pole' },
  { id: 'Pebbles', label: 'Pebbles' },
  { id: 'Smaller plants', label: 'Smaller plants' }
];



generarRadioButtons('radioButtonsContainer1', opcionesGrupo1);
generarRadioButtons('radioButtonsContainer2', opcionesGrupo2);
generarRadioButtons('radioButtonsContainer3', opcionesGrupo3);
generarRadioButtons('radioButtonsContainer4', opcionesGrupo4);
generarRadioButtons('radioButtonsContainer5', opcionesGrupo5);
generarCheckboxes('checkboxesContainer', opcionesCheckbox);