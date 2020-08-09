"use strict";

import users from "./users.js";

// TASK 1
// Получить массив имен всех пользователей (поле name).

const getUserNames = (users) => {
  return users.name;
};

const userNames = users.map(getUserNames);

console.log(userNames);
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// TASK 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  return users.filter((users) => users.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
