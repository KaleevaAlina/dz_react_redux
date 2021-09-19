/* export const validate = inputs => {
    const errors = {};
    if (!inputs.username) {
      errors.username = 'Введите имя пользователя';
    } else if (inputs.username !== 'Юрчик') {
      errors.username = 'Имя пользователя неверно';
    }
    if (!inputs.password) {
      errors.password = 'Введите ваш пароль';
    }
    return errors;
  }; */
  export const requiredInput = (input) =>
  input ? undefined : `Требуется ввод`;

export const correctInput = input =>
  input !== 'Alina' ? 'Неправильное имя пользователя' : undefined;

  export const matchInput = (input, allInputs) =>input === allInputs.password ? undefined : 'Пароль не совпадает';