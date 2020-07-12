// IMPORT MODULES under test here:
import { compareNumbers } from '../compareNumbers.js';

const test = QUnit.test;

test('guess vs correctNumber match', function(assert) {
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
    assert.equal(expected, result);
});

test('guess to high', function(assert) {
    //Arrange
    // Set up your arguments and expectations
    const guess = 11;
    const correctNumber = 4;
    const expected = 1;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    assert.equal(expected, result);
});

test('guess to low', function(assert) {
    //Arrange
    // Set up your arguments and expectations
    const guess = 2;
    const correctNumber = 8;
    const expected = -1;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    assert.equal(expected, result);
});


