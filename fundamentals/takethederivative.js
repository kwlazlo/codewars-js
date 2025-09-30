function derive(coefficient, exponent) {
    let temp = coefficient * exponent
    return temp+"x^"+(exponent-1);
}