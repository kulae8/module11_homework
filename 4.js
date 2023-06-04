//Задание 4
function userCount(a, b) {
    let i = setInterval(() => {
        console.log(a++);
        if (a > b) clearInterval(i);
    },1000)
}
userCount(3, 7);