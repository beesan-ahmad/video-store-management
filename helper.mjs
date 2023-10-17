import readlineSync from 'readline-sync';

export const validationFunction = (vaule, expectedType, variableName) => {
    if (typeof vaule === expectedType && vaule  && (expectedType === 'number'?(vaule >= 0?true:false):true)) {
        return true;
    } else {
        console.log(`pleace enter valid ${variableName} with type :${expectedType} `);
        return false;
    }
}

export const getInput = (input) => {
    return readlineSync.question(input);
  }