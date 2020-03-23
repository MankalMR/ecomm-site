export const addToCart = (items, newItem) => {
  let isExistingItem = false;
  let newItemsList = items.map(item => {
    const itemQty = item.quantity;
    // add new property to the item
    const itemMod = {
      ...item,
      quantity: itemQty || 1
    };
    if (itemMod.id === newItem.id) {
      itemMod.quantity += 1;
      isExistingItem = true;
    }
    return itemMod;
  });

  if (!isExistingItem) {
    let newItemModified = {
      ...newItem,
      quantity: 1
    };
    newItemsList.push(newItemModified);
  }

  return newItemsList;
};

export const removeFromCart = (items, itemToRemove) => {
    return items.filter(cartItem => cartItem.id !== itemToRemove.id)
}
