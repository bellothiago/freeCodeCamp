const inventory = [];

function findProductIndex(productName) {
  const searchName = productName.toLowerCase();
  return inventory.findIndex(product => product.name == searchName);
}

function addProduct(product) {
  const productName = product.name.toLowerCase();
  const productIndex = findProductIndex(productName);

  if (productIndex !== -1) {
    inventory[productIndex].quantity += product.quantity;
    console.log(`${productName} quantity updated`)
  } else {
    inventory.push({
      name: productName,
      quantity: product.quantity
    });
    console.log(`${productName} added to inventory`)
  }
}

function removeProduct(productName, quantity) {
  const searchName = productName.toLowerCase();
  const productIndex = findProductIndex(searchName);

  if (productIndex !== -1) {
    if (inventory[productIndex].quantity >= quantity) {
      inventory[productIndex].quantity -= quantity;
      console.log(`Remaining ${searchName} pieces: ${inventory[productIndex].quantity}`);
      if (inventory[productIndex].quantity === 0) {
        inventory.splice(productIndex, 1);
      }
    } else {
      console.log(`Not enough ${searchName} available, remaining pieces: ${inventory[productIndex].quantity}`)
    }
  } else {
    console.log(`${searchName} not found`);
  }
}