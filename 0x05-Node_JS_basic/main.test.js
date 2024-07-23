const displayMessage = require('./0-console');

test('displayMessage', () => {
  expect(displayMessage('Hello Holberton School!')).toHaveBeenCalledWith('Hello Holberton School!');
});
