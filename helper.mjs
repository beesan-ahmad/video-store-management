import readlineSync from 'readline-sync';

export const validationFunction = (value, expectedType, variableName) => {
    if (typeof value === expectedType && value  && (expectedType === 'number'?(value >= 0?true:false):true)) {
        return true;
    } else {
        console.log(`pleace enter valid ${variableName} with type :${expectedType} `);
        return false;
    }
}

export const getInput = (input) => {
    return readlineSync.question(input);
  }