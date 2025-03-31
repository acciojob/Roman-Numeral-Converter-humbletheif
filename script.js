function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };
    
    let roman = "";
    for (let key in obj) {
        while (num >= obj[key][1]) {
            roman += obj[key][0];
            num -= obj[key][1];
        }
    }
    return roman;
}

// You can test your code by running the function below
console.log(convertToRoman(36)); // Output: XXXVI

// do not edit below this line
module.exports = convertToRoman;
