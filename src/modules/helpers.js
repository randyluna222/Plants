export function calculatePriceBreakdown(items) {
  const priceBreakdownList = document.getElementById('priceBreakdownList');
  const totalPrice = document.getElementById('totalPrice');

  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
    priceBreakdownList.appendChild(listItem);
  });

  const total = items.reduce((sum, item) => sum + item.price, 0);
  totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}

export function applyAccordionBehavior() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
      accordionItems.forEach(accordion => {
        if (accordion !== item) {
          accordion.classList.remove('active');
          accordion.querySelector('.accordion-content').style.maxHeight = null;
        }
      });

      item.classList.toggle('active');
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });
  });
}
