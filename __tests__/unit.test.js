// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

describe('isPhoneNumber', () => {
  test('valid phone number should return true', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('another valid phone number should return true', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('invalid phone number should return false', () => {
    expect(functions.isPhoneNumber('abc')).toBe(false);
  });

  test('another invalid phone number should return false', () => {
    expect(functions.isPhoneNumber('*11#notaphonenumber')).toBe(false);
  });
});

describe('isEmail', () => {
  test('valid email should return true', () => {
    expect(functions.isEmail('test@example.com')).toBe(true);
  });

  test('another valid email should return true', () => {
    expect(functions.isEmail('myname2002@hotmail.com')).toBe(true);
  });

  test('invalid email should return false', () => {
    expect(functions.isEmail('invalid-email')).toBe(false);
  });

  test('another invalid email should return false', () => {
    expect(functions.isEmail('test@example')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('valid strong password should return true', () => {
    expect(functions.isStrongPassword('Password1')).toBe(true);
  });

  test('another valid strong password should return true', () => {
    expect(functions.isStrongPassword('SecurePassword1')).toBe(true);
  });

  test('invalid weak password should return false', () => {
    expect(functions.isStrongPassword('hey')).toBe(false);
  });

  test('another invalid weak password should return false', () => {
    expect(functions.isStrongPassword('1password')).toBe(false);
  });
});

describe('isDate', () => {
  test('valid date should return true', () => {
    expect(functions.isDate('12/31/2022')).toBe(true);
  });

  test('another valid date should return true', () => {
    expect(functions.isDate('01/01/2023')).toBe(true);
  });

  test('invalid date should return false', () => {
    expect(functions.isDate('2022-12-31')).toBe(false);
  });

  test('another invalid date should return false', () => {
    expect(functions.isDate('July 21st 2002')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('valid hex color should return true', () => {
    expect(functions.isHexColor('#FF0000')).toBe(true);
  });

  test('another valid hex color should return true', () => {
    expect(functions.isHexColor('#00FF00')).toBe(true);
  });

  test('invalid hex color should return false', () => {
    expect(functions.isHexColor('ZZZZZZ')).toBe(false);
  });

  test('another invalid hex color should return false', () => {
    expect(functions.isHexColor('#12345')).toBe(false);
  });
});