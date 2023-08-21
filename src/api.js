export async function fetchInventory(productType, itemId) {
  const response = await fetch(`https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/inventory/${productType}/${itemId}`);
  const data = await response.json();
  return data;
}

