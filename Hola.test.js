// Hola.test.js
const fs = require('fs');
const path = './Hola.js';

test('El programa debe decir Hola Mundo', () => {
  const output = console.log = jest.fn();
  require(path);
  expect(output).toHaveBeenCalledWith("Hola Mundo!");
});
