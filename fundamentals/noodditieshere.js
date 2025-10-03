function noOdds(values) {
    let solution = [];
    for(let i = 0; i < values.length; i++) {
        if(values[i] % 2 == 0) {
            solution.push(values[i]);
        }
    }

    return solution;
}