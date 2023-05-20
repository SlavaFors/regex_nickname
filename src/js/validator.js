export default class Validator {
  constructor(str) {
    this.str = str;
  }

  validateUsername() {
    const parameter1 = /^[a-z]+/i.test(this.str);
    const parameter2 = /[a-z\-_\d]*/i.test(this.str);
    const parameter3 = /[a-z]+$/i.test(this.str);

    const param1 = !/\d{4,}/.test(this.str);
    const param2 = !/[-_]+$/.test(this.str);
    const param3 = !/[0-9]+$/.test(this.str);

    return (parameter1 && parameter2 && parameter3 && param1 && param2 && param3);
  }
}

/* Допустимы:
- только латинские буквы
- символы тире -,
- подчёркивания _
- цифры (0-9);
Имя не должно:
- содержать подряд более трёх цифр
- не должно начинаться и заканчиваться цифрами
- не должно начинаться и заканчиваться символами подчёркивания
- не должно начинаться и заканчиваться символами тире.
/*validateUsername() {
        const parameter1 = /^[a-z]+[a-z\-_\d]*[a-z]+$/i.test(this.str);
        const parameter2 = !/\d{4,}/.test(this.str);
        return (parameter1 && parameter2);
} */
