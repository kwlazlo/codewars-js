function validateCode(code) {
  const regex = /^[123]/;
  return regex.test(code);
}
