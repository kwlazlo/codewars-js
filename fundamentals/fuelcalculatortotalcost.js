function fuelPrice(litres, pricePerLitre) {
  let discount = 0;

  if (litres >= 10) {
    discount = 0.25;
  } else if (litres >= 8) {
    discount = 0.2;
  } else if (litres >= 6) {
    discount = 0.15;
  } else if (litres >= 4) {
    discount = 0.1;
  } else if (litres >= 2) {
    discount = 0.05;
  }
  let total = litres * (pricePerLitre - discount);
  return Number(total.toFixed(2));
}

console.log(fuelPrice(5, 1.23));
