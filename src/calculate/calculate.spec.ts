import calculate from './calculate';

const mockObjValid = {
  hr: 15,
  place: 'TALCA',
  weekDay: 'LUNES',
};

const mockObjNotValid = {
  hr: 1,
  place: 'SANTIAGO',
  weekDay: 'DOMINGO',
};

const validDay = 'LUNES';
const validHr = 14;
const validPlace = 'TALCA';
const notValidHr = 25;

const communeWithQuarantine = [
  'SANTIAGO',
  'MAIPU',
  'RANCAGUA',
  'VALPARAISO',
  'COQUIMBO',
];
const communeWithoutQuarantine = ['RENGO', 'TALCA', 'SAN FRANCISCO'];
const weekDayArray = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES'];
const weekendDayArray = ['SABADO', 'DOMINGO'];

describe('Validate parameters', () => {
  test('Parameters: place, weekDay, must be a string. age must be a number', () => {
    expect(mockObjValid.hr).toEqual(expect.any(Number));
    expect(mockObjValid.place).toEqual(expect.any(String));
    expect(mockObjValid.weekDay).toEqual(expect.any(String));
  });
  test('Parameter hr, must be a number between 0 and 23 and return true', () => {
    expect(mockObjValid.hr).toBeGreaterThanOrEqual(0);
    expect(mockObjValid.hr).toBeLessThanOrEqual(23);
    expect(
      calculate(mockObjValid.hr, mockObjValid.place, mockObjValid.weekDay),
    ).toBe(true);
  });
});

describe('Validate quarantine hr', () => {
  test('If hr is a number between 0 and 5 and return false', () => {
    expect(mockObjNotValid.hr).toBeGreaterThanOrEqual(0);
    expect(mockObjNotValid.hr).toBeLessThanOrEqual(5);
    expect(calculate(mockObjNotValid.hr, validPlace, validDay)).toBe(false);
  });
});

describe('Validate quarantine place', () => {
  test('If place are in quarantine response false', () => {
    const isQuarantinePlace = () =>
      communeWithQuarantine.includes(mockObjNotValid.place);
    expect(isQuarantinePlace()).toBe(true);
    expect(calculate(validHr, mockObjNotValid.place, validDay)).toBe(false);
  });

  test('If place are in quarantine response true', () => {
    const isQuarantinePlace = () =>
      communeWithQuarantine.includes(mockObjValid.place);
    expect(isQuarantinePlace()).toBe(false);
    expect(
      calculate(mockObjValid.hr, mockObjValid.place, mockObjValid.weekDay),
    ).toBe(true);
  });
});

describe('Validate quarantine week day', () => {
  test('If is a week day, should be response true', () => {
    const isWeekendDay = () => weekendDayArray.includes(mockObjValid.weekDay);
    expect(isWeekendDay()).toBe(false);
    expect(
      calculate(mockObjValid.hr, mockObjValid.place, mockObjValid.weekDay),
    ).toBe(true);
  });

  test('If is a weekend day, should be response false', () => {
    const isWeekendDay = () => weekendDayArray.includes(mockObjValid.weekDay);
    expect(isWeekendDay()).toBe(false);
    expect(calculate(validHr, validPlace, mockObjNotValid.weekDay)).toBe(false);
  });
});

describe('Validate function and response true or false according to implementation ', () => {
  test('Validate correct', () => {
    expect(
      calculate(mockObjValid.hr, mockObjValid.place, mockObjValid.weekDay),
    ).toBe(true);
  });

  test('Validate incorrect', () => {
    expect(
      calculate(notValidHr, mockObjNotValid.place, mockObjNotValid.weekDay),
    ).toBe(false);
  });
});
