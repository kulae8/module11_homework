//Задание 1
const array = [2, 6, 5, 4, 1, 5, 0, null, 'A', undefined];
let countZero = 0;
let areEven = 0;
let areOdd = 0;

function getCountSymbol () {
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) {
    areOdd++;
  }
  else if (array[i] % 2 === 0) {
    areEven++;
  }
}

for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      areEven--; countZero++;
    }
}

for (let i = 0; i < array.length; i++) {
    if (array[i] == null) {
        areEven--;
    }
}

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == 'undefined') {
        areEven++, areOdd--;
    }
}
console.log('Количество четных - ' + areEven);
console.log('Количество не четных - ' + areOdd);
console.log('Количество нулей - ' + countZero);
}

getCountSymbol()

