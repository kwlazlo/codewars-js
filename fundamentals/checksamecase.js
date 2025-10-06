function sameCase(a, b) {
  if (
    a.toLowerCase() === a.toUpperCase() ||
    b.toLowerCase() === b.toUpperCase()
  )
    return -1;
  return (a === a.toUpperCase() && b === b.toUpperCase()) ||
    (a === a.toLowerCase() && b === b.toLowerCase())
    ? 1
    : 0;
}
