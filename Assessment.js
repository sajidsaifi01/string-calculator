
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
    return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = { add };