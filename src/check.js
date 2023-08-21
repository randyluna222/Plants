import { renderPreview } from './modules/checkCustomizacion.js'
import {
  handleExtras,
  handlePotTypes,
  handleSoilTypes,
} from './modules/eventHandlers.js'
import {
  checkInventory,
  updateButtonStatus,
} from './modules/inventoryModule.js'
import {
  calculatePriceBreakdown,
  applyAccordionBehavior,
} from './modules/helpers.js'
import { fetchInventory } from './api.js'

const accordionHeaders = document.querySelectorAll('.accordion-header')

accordionHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    const item = header.parentElement
    item.classList.toggle('active')
    const content = item.querySelector('.accordion-content')
    content.style.display = content.style.display === 'block' ? 'none' : 'block'
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const plantData = {
    name: '',
    soil: '',
    plantStyle: 'decoration',
    material: '',
    extras: ['Fertilizer', 'Watering Can'],
  }

  const plantPreviewContainer = document.getElementById('plantPreview')
  renderPreview(plantData, plantPreviewContainer)

  handleExtras(
    document.querySelectorAll('input[name="extras"]'),
    document.querySelector('.info-extras')
  )
  handlePotTypes(
    document.querySelectorAll('input[name="potType"]'),
    document.querySelector('.info-pot')
  )
  handleSoilTypes(
    document.querySelectorAll('input[name="soilType"]'),
    document.querySelector('.info-soil')
  )
})

const orderItems = [
  { name: 'Aglaonema Silver Bay', type: 'plant', itemId: 'aglaonema' },
  { name: 'Aloe Vera', type: 'plant', itemId: 'aloe' },
]

const inventoryAlert = document.getElementById('inventoryAlert')
const orderButton = document.getElementById('orderButton')

checkInventory(orderItems, inventoryAlert)
updateButtonStatus(orderItems, orderButton)

const items = [
  { name: 'Aglaonema Silver Bay', price: 12.99 },
  { name: 'Aloe Vera', price: 5.25 },
  { name: 'Boston Fern', price: 10.25 },
  { name: 'Cactus', price: 8.25 },
  { name: 'Monstera Deliciosa', price: 18.0 },
  { name: 'Peace Lily', price: 8.75 },
  { name: 'Sansevieria', price: 5.75 },
  { name: 'Clay pot simpl', price: 3.0 },
  { name: 'Clay pot decorated', price: 4.0 },
  { name: 'Clay pot painted', price: 4.0 },
  { name: 'Clay pot painted and decorated', price: 5.0 },
  { name: 'Ceramic pot simple', price: 5.0 },
  { name: 'Ceramic pot decorated', price: 6.0 },
  { name: 'Ceramic pot painted', price: 6.0 },
  { name: 'Ceramic pot painted and decorated', price: 7.0 },
  { name: 'Soil composted', price: 3.25 },
  { name: 'Soil fertilized', price: 5.0 },
  { name: 'Soil easy drainage', price: 5.5 },
  { name: 'Moss Pole', price: 2.25 },
  { name: 'Pebbles', price: 2.0 },
  { name: 'Mini plants', price: 3.75 },
]

calculatePriceBreakdown(items)
applyAccordionBehavior()

const inventoryAlertsContent = document.getElementById('inventoryAlertsContent')

async function showInventoryAlerts() {
  for (const item of orderItems) {
    if (
      item.type !== 'pot' &&
      item.type !== 'soil' &&
      item.type !== 'mini plants' &&
      item.type !== 'moss pole' &&
      item.type !== 'pebbles'
    ) {
      try {
        const inventory = await fetchInventory(item.name)
        if (inventory.stock < 10) {
          const alertText = `${item.name}: Only ${inventory.stock} items left in stock!`
          createAlert('low', alertText)
        }
        if (inventory.stock === 0) {
          const alertText = `${item.name} is out of stock. Please select a different ${item.type}.`
          createAlert('out', alertText)
        }
      } catch (error) {
        console.error('Error fetching inventory:', error)
      }
    }
  }
}

function createAlert(type, text) {
  const alertElement = document.createElement('p')
  alertElement.classList.add('inventory-alert', type)
  alertElement.textContent = text
  inventoryAlertsContent.appendChild(alertElement)
}

showInventoryAlerts()
