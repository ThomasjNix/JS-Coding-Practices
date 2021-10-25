const getFizzBuzz = (arrSize) => {
    // Declare arrays
    const fizzNums = [];
    const buzzNums = [];
    const fizzBuzzNums = [];

    // Call fizzbuzz func for each
    for (let i = 1; i <= arrSize; i++) {
        calcFizzBuzz(i, fizzNums, buzzNums, fizzBuzzNums);
    }

    // Log results
    console.log('(Fizz) Numbers divisible by 3:\n' + fizzNums);
    console.log('(Buzz) Numbers divisible by 5:\n' + buzzNums);
    console.log('(FizzBuzz) Numbers divisible by 3 and 5:\n' + fizzBuzzNums);
}

// Do FizzBuzz logic for each number passed, assign to provided arrays
const calcFizzBuzz = (num, fizzNums, buzzNums, fizzBuzzNums) => {
    let returnStr = '';
    if (num % 3 === 0) {
        returnStr += 'Fizz';
        fizzNums.push(num);
        // Push to fizzbuzz arr if also divisible by 5
        if (num % 5 === 0) {
            fizzBuzzNums.push(num);
        }
    }
    if (num % 5 === 0) {
        returnStr += 'Buzz';
        buzzNums.push(num);
    }
    console.log(`${num}: ${returnStr ? returnStr : 'Not divisible by 3 or 5 evenly.'}`);
}

getFizzBuzz(100);