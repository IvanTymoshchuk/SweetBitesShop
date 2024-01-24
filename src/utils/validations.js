export function validationEmail(email){
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (emailRegex.test(email)) return {validation: true, message: ''}
  return {validation: false, message: 'Некоректна email адреса'}
}

export function validationPassword(password){
  let errorsList = [];
  let validation = true;

  let passwordValidDefinition =
    [
      {
        minLength    : 8,
        ErrorMessage : "Пароль повинен бути довшим за 8 символів",
      },
      {
        maxLength    : 50,
        ErrorMessage : "Пароль не повинен перевищувати 50 символів",
      },
      {
        regex        : /.*\d/,
        ErrorMessage : "Пароль повинен містити мінімум 1 цифру",
      },
      {
        regex        : /.*[a-zA-Z]/,
        ErrorMessage : "Пароль повинен містити мінімум 1 латинську букву",
      },
      {
        regex        : /.*[!@#$%^&*() =+_-]/,
        ErrorMessage : "Пароль повинен містити мінімум 1 спеціальний символ !@#$%^&*()=+_- або пробіл",
      },
    ];

  for (let i = 0; i < passwordValidDefinition.length; i++)
  {
    let validator = passwordValidDefinition[i];
    let valid = true;

    if (validator.hasOwnProperty("regex"))
    {
      if (password.search(validator.regex) < 0) valid = false;
    }

    if (validator.hasOwnProperty("minLength"))
    {
      if (password.length < validator.minLength) valid = false;
    }

    if (validator.hasOwnProperty("maxLength"))
    {
      if (password.length > validator.maxLength) valid = false;
    }

    if (!valid) errorsList.push(validator.ErrorMessage);
    if (!valid) validation = false;
  }
  return {validation: validation, message: errorsList}
}

export function validationString(str, type){
  const strRegex = /[ЬьЇїІіЄєА-яa-zA-Z]/;
  if (strRegex.test(str)) return {validation: true, message: ''}

  return {validation: false, message: type === 'name' ? 'Ім\'я має містити лише букви' : 'Фамілія має містити лише букви'}
}

export function validationPhone(phone){
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (phoneRegex.test(phone)) return {validation: true, message: ''}

  return {validation: false, message: 'Вкажіть корректний номер телефона'}
}
