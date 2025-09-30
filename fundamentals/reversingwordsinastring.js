function reverse(string) {
    var arr = string.split(" ");
    let solution = "";
    for(let i = arr.length - 1; i >= 0; i--) {
        solution += arr[i]
        if(i != 0) {
            solution += " "
        }
    }

    return solution
}


// smart
// function reverse(string) {
//     return string.split(" ").reverse().join(" ");
// }
