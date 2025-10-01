function nbYear(p0, percent, aug, p) {
    let counter = 0, total = p0;
    
    while(total < p) {
       total = Math.floor(total + total * percent/100 + aug)
       counter++

    }

    return counter
}




console.log(nbYear(1500, 5, 100, 5000))