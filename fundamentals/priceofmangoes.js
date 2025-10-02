function mango(quantity, price) {
  if (quantity < 3) {
    return quantity * price;
  }

  freeMangoes = Math.floor(quantity / 3);
  payMango = quantity - freeMangoes;
  return payMango * price;
}

console.log(mango(2, 3));
console.log(mango(9, 5));
