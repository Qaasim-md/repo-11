function validatesInput(input) {
    if (input === null || input === undefined) {
        return "Input is null or undefined";
    } else if (typeof input !== "string"){
        return "Input is not a string";
    }else if ( input.trim() === "") {
        return "Input is empty";
    }
    return "Input is valid";
};

function processData (value) {
    try{
        if (typeof value !== "number") {
            throw new Error("Input is not a number");
        }
        if (value < 0) {
            throw new RangeError("Input is negative");
        }
        if (isNaN(value)) {
            throw new TypeError("Input is not a valid number");
        }
        return Math.sqrt(value);
    } catch (error) {
        return error.message;
}
};

const stringHelpers = {
    capitalizeFirstLetter: function (str) {
        if (typeof str !== "string" || str.length === 0)  return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    reverseString: function (str) {
        return str.split("").reverse().join("");
    },
    countWords: function (str) {
        return str.trim().split(/\s+/).length;
    }
};

const arrayHelpers = {
    getMax: function (arr) {
        return Math.max(...arr);
    },
    getMin: function (arr) {
        return Math.min(...arr);
    },
    getAverage: function (arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
};

console.log(validatesInput(null));
console.log(processData("3"));
console.log(stringHelpers.capitalizeFirstLetter("hello"));
console.log(arrayHelpers.getMax([1, 2, 3, 4, 5]));
console.log(arrayHelpers.getMin([1, 2, 3, 4, 5]));
console.log(arrayHelpers.getAverage([1, 2, 3, 4, 5]));
