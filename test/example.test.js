// IMPORT MODULES under test here:
import { compareNumbers } from '../compareNumbers.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your arguments and expectations
    const guess = 11;
    const correctNumber = 11;
    const expected = 0;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, guess);
});
