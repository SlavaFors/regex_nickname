import Validator from '../validator';
/* Допустимы:
- только латинские буквы
- символы тире -,
- подчёркивания _
- цифры (0-9);
Имя не должно:
- содержать подряд более трёх цифр
- не должно начинаться и заканчиваться цифрами
- не должно начинаться и заканчиваться символами подчёркивания
- не должно начинаться и заканчиваться символами тире. */
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
