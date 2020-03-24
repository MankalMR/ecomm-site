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
  const existingItem = items.find(item => item.id === itemToRemove.id);

  if (existingItem.quantity === 1) {
    return items.filter(cartItem => cartItem.id !== itemToRemove.id);
  }

  return items.map(cartItem =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearFromCart = (items, itemToClear) => {
  return items.filter(cartItem => cartItem.id !== itemToClear.id);
};
