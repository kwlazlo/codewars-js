function roundToNext5(n) {
    if(n < 0) {
        x = n % 5
        
    }

    x = n % 5
    
    if(x === 0) {
        return n;
    }

    
    return n + Math.abs(x - 5);
}