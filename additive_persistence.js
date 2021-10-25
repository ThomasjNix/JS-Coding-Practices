const additivePersistence = (num) => {
    if (typeof num === 'number') {
        let iterations = 0;
        let newNum = num;
        while (newNum >= 10) {
            newNum = getSumOfDigits(newNum);
            iterations++;
        }
        if (iterations === 0) {
            console.log(`${num} is already a single digit number.`);
        } else {
            console.log(`It took ${iterations} iterations of additive persistence to turn ${num} into a single digit number.`);
        }
    } else {
        console.log(`${num} isn't even a number, I can't find the additive persistence of that!`);
    }
}

const getSumOfDigits = (num) => {
    let digitSum = 0;
    for (const digit of num.toString()) {
        digitSum += parseInt(digit);
    }
    return digitSum;
}

// Examples
additivePersistence(1679583); // 1+6+7+9+5+8+9 = 39, 3+9=12, 1+2=3 - 3 iterations
additivePersistence(12345); // 1+2+3+4+5 = 15, 1+5 = 6 - 2 iterations
additivePersistence(999); // 9+9+9 = 18, 1+8 = 9 - 2 iterations
additivePersistence(25); // 2+5 = 7 - 1 iteration
additivePersistence(1); // Already single digit

// Invalid example
additivePersistence(null);
additivePersistence('This is not a number');