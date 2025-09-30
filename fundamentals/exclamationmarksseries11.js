function replace(s) {
    const vowels = "aeiouAEIOU"
    let solution = ""
    for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) {
            solution += "!"
        } else {
            solution += s[i]
        }
    }
    return solution
}