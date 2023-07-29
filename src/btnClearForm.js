export function btnBorrarFormulario() {
  const form = document.getElementById('miFormulario');

  const inputsTexto = form.querySelectorAll('input[type="text"]');
  inputsTexto.forEach(input => (input.value = ''));

  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => (checkbox.checked = false));

  const radioButtons = form.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(radio => (radio.checked = false));
}
