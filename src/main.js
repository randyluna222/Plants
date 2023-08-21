import { btnBorrarFormulario } from './btnClearForm.js'
import { getPlantRecommendation } from './modules/recomendation.js'
import { renderRecommendation } from './modules/renderBuilder.js'
import { generarRadioButtons, generarCheckboxes } from './modules/dinamico.js'

generarRadioButtons()
generarCheckboxes()

document
  .getElementById('formContainer')
  .addEventListener('submit', function (event) {
    event.preventDefault()
    const plant = getPlantRecommendation()
    if (plant) {
      sessionStorage.setItem('information', JSON.stringify(plant))
      renderRecommendation(plant)
    }
  })

document.getElementById('btnBorrar').addEventListener('click', function () {
  btnBorrarFormulario()
})
