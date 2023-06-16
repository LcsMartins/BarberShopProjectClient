export const regExpTypes = [
    {type: 'name', regExp: /^[a-zA-Z]+$/ },
    {type: 'contactNumber', regExp: /^[0-9]*$/ },
    {type: 'email', regExp: /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/,}

]

//ver como permitir 1 espaço entre palavras regex name
export const checkValues = (type: string, value: string) => {
    console.log(type, value);
    const regExpType = regExpTypes.find((item) => item.type === type);
    const match = regExpType?.regExp.test(value);
    return match;
  };
  
