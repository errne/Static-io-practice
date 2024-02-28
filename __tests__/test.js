const { updateNumber, resetNumbers } = require('../test-script.js');

// Mock the DOM environment using JSDOM
const { JSDOM } = require('jsdom');
//const { document } = new JSDOM('').window;
const dom = new JSDOM(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Page</title>
    </head>
    <body>
      <div id="number1">?</div>
      <div id="number2">?</div>
    </body>
  </html>
`);
global.document = dom.window.document;

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
    onst number1Text = document.getElementById('number1').innerText;
    console.log('Number 1 text:', number1Text);
    expect(document.getElementById('number1').innerText).toBe('?');
});

test('resetNumbers resets the displayed number for Team 2', () => {
    resetNumbers();
    expect(document.getElementById('number2').innerText).toBe('?');
});
