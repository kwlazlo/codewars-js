function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
        if (enteredCode !== correctCode) {
            return false
        }

        const cd = new Date(currentDate);
        const ed = new Date(expirationDate);

        return cd <= ed;

}