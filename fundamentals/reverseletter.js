// dumb and it doesn't work
// function reverseLetter(str) {
//     const toDelete = "0123456789!@#$?%/<>;'|{}[]^&*()_-=+"
//     solution = ""
//     for(let i = 0; i < str.length; i++) {
//         if(!toDelete.includes(str[i])) {
//             solution += str[i]
//         }
//     }
//     solution = solution.split("").reverse().join("");
//     return solution
// }

// smart
function reverseLetter(str) {
    const lettersOnly = str.replace(/[^a-zA-Z]/g, '');
    return lettersOnly.split('').reverse().join('');
}


console.log(reverseLetter("ultr53o?n"))