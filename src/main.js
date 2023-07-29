import { generarRadioButtons, generarCheckboxes } from './dinamico.js';
import { btnBorrarFormulario } from './btnClearForm.js';


document.getElementById('btnBorrar').addEventListener('click', function() {
  btnBorrarFormulario();
});


generarRadioButtons();
generarCheckboxes();



