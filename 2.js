//Задание 2
const x = prompt('Введите число не менее 2 и не более 1000');

function toPrimeNumber() {
  for (let i = 0; i <= x; i++)
  if (x < 2) {
    console.log('Введите число более 2');
  }
  else if (x > 1000) {
    console.log('Введите число не более 1000');
  }
  else if (x % 1 !== 0) {
    console.log('Число не простое');
  }
  else if (x % 1 == 0) {
    console.log('Число простое');
  }
  return x;
}

toPrimeNumber();