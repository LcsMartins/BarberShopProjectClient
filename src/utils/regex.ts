const regExpTypes = [
  { type: "name", regExp: /([[a-zA-Z]*\s)*[a-zA-Z]$/ },
  { type: "contactNumber", regExp: /^[\d]{9,10}$/ },
];

const passwordTypes = {
  upperCase: /[A-Z]/,
  lowerCase: /[a-z]/,
  number: /\d/,
  specialCharacter: /[-.'!@#$%&*?_+-\/=?^`{|}~]/,
  len: /.{10}/,
};

const emailTypes = {
  beforeAt: /.{3,15}/,
  At: /[@]/,
  afterAt: /[a-zA-Z0-9]{3,10}\.[a-zA-Z0-9]{3,10}/,
};

export const checkValues = (type: string, value: string) => {
  if (type === `password`) {
    if (!passwordTypes.upperCase.test(value))
      return `É necessário no mínimo uma letra maiúscula`;
    if (!passwordTypes.lowerCase.test(value))
      return `É necessário no mínimo uma letra minúscula`;
    if (!passwordTypes.number.test(value))
      return `É necessário no mínimo um número`;
    if (!passwordTypes.specialCharacter.test(value))
      return `É necessário no mínimo um character especial`;
    if (!passwordTypes.len.test(value))
      return `É necessário no mínimo 10 caracteres `;
    else return ``;
  }

  if (type === `email`) {
    if (!emailTypes.beforeAt.test(value))
      return `É necessário ter entre 3 e 15 caracteres antes do @`;

    if (!emailTypes.At.test(value)) return `É necessário ter @`;

    if (!emailTypes.afterAt.test(value))
      return `É necessário ter entre 4 e 15 caracteres depois do @, incluindo .`;
    else return ``;
  }

  const regExpType = regExpTypes.find((item) => item.type === type);
  const ok = regExpType?.regExp.test(value);
  let match = `not ok`;
  if (ok === true) {
    match = ``;
  }
  return match;
};
