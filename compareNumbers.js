export function compareNumbers(guess, correctNumber) {
    const number = Number(guess);
    
    if (number === correctNumber) {
        return 0;
    
    } else if (number < correctNumber) {
        return -1;
    
    } else if (number > correctNumber) {
        return 1;
    }
    
}
