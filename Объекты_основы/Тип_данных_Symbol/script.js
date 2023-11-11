let id = Symbol("userId");

let user = {
  name: "Edgar",
  [id]: 123455,
  /* определяет правила преобразования объекта в строку */
  [Symbol.toPrimitive]: function () {
    return this.name + " - Hi";
  },
};

alert(user);

for (key in user) {
  console.log(key);
}
