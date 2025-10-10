function outed(meet, boss) {
  let sum = 0;
  let count = 0;

  for (let person in meet) {
    sum += meet[person];
    count++;
  }

  sum += meet[boss];

  const average = sum / count;

  return average <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}

console.log(
  outed(
    {
      tim: 0,
      jim: 2,
      randy: 0,
      sandy: 7,
      andy: 0,
      katie: 5,
      laura: 1,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 0,
    },
    "laura"
  )
);
