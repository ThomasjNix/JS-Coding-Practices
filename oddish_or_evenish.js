/**
 * Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
 */

const oddishOrEvenish = (num) => {
    if (typeof num === 'number') {
        let digitSum = 0;
        for (const digit of num.toString()) {
            digitSum += parseInt(digit);
        }
        console.log(digitSum % 2 === 0 ? `${num} is evenish` : `${num} is oddish`);
    } else {
        console.log(`${num} is not even a number, what do you want me to do with that?`);
    }
}

// Examples
oddishOrEvenish(121); // 1+2+1 = 4, evenish
oddishOrEvenish(54321); // 5+4+3+2+1 = 15, oddish

// Invalid input
oddishOrEvenish(null);
oddishOrEvenish('Invald input');