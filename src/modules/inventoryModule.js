export function checkInventory(orderItems, alertElement) {
  let hasOutOfStock = false;

  for (const item of orderItems) {
    if (item.stock === 0) {
      hasOutOfStock = true;
      break;
    }
  }

  if (hasOutOfStock) {
    alertElement.innerText = "One of the items in your order is out of stock. Please check the inventory alerts.";
  } else {
    for (const item of orderItems) {
      if (item.stock < 10) {
        alertElement.innerText = "One of the items in your order has limited stock. Order soon!";
        break;
      }
    }
  }

  if (!hasOutOfStock) {
    alertElement.innerText = "In Stock";
  }
}

export function updateButtonStatus(orderItems, buttonElement) {
  for (const item of orderItems) {
    if (item.stock === 0) {
      buttonElement.disabled = true;
      return;
    }
  }
  buttonElement.disabled = false;
}



