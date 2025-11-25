function catMouse(x) {
    let counter = 0;
    for(str of x) {
        if(str === ".") {
            counter += 1;
        }
    }

    return counter > 3 ? "Escaped!" : "Caught!";
}