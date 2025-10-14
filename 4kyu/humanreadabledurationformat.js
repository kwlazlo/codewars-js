function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const units = [
    { name: "year", seconds: 365 * 24 * 60 * 60 },
    { name: "day", seconds: 24 * 60 * 60 },
    { name: "hour", seconds: 60 * 60 },
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 },
  ];

  const parts = [];

  for (const unit of units) {
    const amount = Math.floor(seconds / unit.seconds);
    if (amount > 0) {
      parts.push(`${amount} ${unit.name}${amount > 1 ? "s" : ""}`);
      seconds -= amount * unit.seconds;
    }
  }

  if (parts.length === 1) {
    return parts[0];
  } else {
    const last = parts.pop();
    return parts.join(", ") + " and " + last;
  }
}

console.log(formatDuration(7000));
