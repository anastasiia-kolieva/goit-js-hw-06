// TASK 1
// Получить массив имен всех пользователей (поле name).

const getUserNames = users => {
  // твой код
  const names=users.map(function(user){
      return user.name;
  })
};
// Проверить работает ли код!!!!

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]