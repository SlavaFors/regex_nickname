import Validator from '../validator';

test.each([
  ['G5', false],
  ['A5_p-', false],
  ['09Roje', false],
  ['Alex9', false],
  ['Андрей', false],
  ['Mister0000_best', false],
  ['Mister00-0_best-', false],
  ['_Mister00-0_best', false],
  ['z', true],
  ['zM', true],
  ['zM9_w', true],
  ['Mac_abi', true],
  ['Mister000_best', true],
  ['Mister00-0_best', true],
])(
  ('Testing Validator class, method validateUsername(str)'),
  (param, expected) => {
    const validStr = new Validator(param);
    const received = validStr.validateUsername();
    console.log('expected: ', expected);
    console.log('received: ', received);
    expect(expected).toBe(received);
  },
);
