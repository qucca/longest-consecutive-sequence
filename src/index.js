module.exports = function longestConsecutiveLength(array) {
    let count = 1;
    let result = 1;
    let nums = new Set(array);
    if (array.length > 1) {
        for (let value of nums) {
            if (nums.has(value + 1)) {
                let curValue = value;
                count = 1
                while (nums.has(curValue + 1)) {
                    count += 1;
                    curValue += 1;
                }
                if (count >= result) {
                    result = count;
                }
            }
        }
    }
    else return array.length;
    return result;
}
