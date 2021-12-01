jest.mock('fs');
const fs = require('fs');
const readInput = require('./read-input');

test('readInput throws error if no file exists', () => {
  fs.readFile.mockImplementation((path, cb) => cb('This is an error'));
  const mycb = jest.fn();
  expect(() => readInput(1, mycb)).toThrow(Error);
  expect(mycb).not.toHaveBeenCalled();
  expect(fs.readFile.mock.calls[0][0]).toBe('./src/day1/input.txt');
});

test('readInput calls callback with file data if successful', () => {
  const buffer = {
    toString: jest.fn().mockReturnValue('file contents'),
  };
  fs.readFile.mockImplementation((path, cb) => cb(null, buffer));
  const mycb = jest.fn();
  readInput(1, mycb);
  expect(fs.readFile.mock.calls[0][0]).toBe('./src/day1/input.txt');
  expect(mycb.mock.calls[0][0]).toBe('file contents');
});
