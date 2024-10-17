
const add = (numbers) => {
    if (numbers === '') {
        return 0;
    }
    let delimiter = ',';
    if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n');
        delimiter = numbers.substring(2, delimiterEndIndex);
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const numArray = numbers.split(new RegExp(`[${delimiter}\n]`));
    const negatives = [];

    const sum = numArray.reduce((total, num) => {
        const parsedNum = parseInt(num, 10);
        if (parsedNum < 0) {
            negatives.push(parsedNum);
        }
        return total + parsedNum;
    }, 0);

    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return sum;
}

module.exports = { add };