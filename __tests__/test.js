const { updateNumber, resetNumbers } = require('../test-script.js');

// Mock the DOM environment using JSDOM
const { JSDOM } = require('jsdom');
const { document } = new JSDOM('').window;

// Mock the getElementById function
global.document.getElementById = jest.fn(() => document.createElement('div'));

test('updateNumber updates the displayed number for Team 1', () => {
    updateNumber(1);
    expect(document.getElementById('number1').innerText).not.toBe('?');
});

test('updateNumber updates the displayed number for Team 2', () => {
    updateNumber(2);
    expect(document.getElementById('number2').innerText).not.toBe('?');
});

test('resetNumbers resets the displayed number for Team 1', () => {
    resetNumbers();
    expect(document.getElementById('number1').innerText).toBe('?');
});

test('resetNumbers resets the displayed number for Team 2', () => {
    resetNumbers();
    expect(document.getElementById('number2').innerText).toBe('?');
});
