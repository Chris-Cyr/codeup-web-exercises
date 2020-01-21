// function wait(num1) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         if (num1 === 1000)
//             console.log('You\'ll see this after 1 second');
//         else
//             console.log('You\'ll see this after ' + (num1 / 1000) + ' seconds')
//     }, num1);
// });
// }
//
// const request = wait(5000);
// console.log(request); // pending promise


function wait2 () {
    return fetch('https://api.github.com/repos/Chris-Cyr/codeup-web-exercises/commits/master', {headers: { Authorization: 'token c23b037c1c920d8187477845db810a22dae4db4f'}});
}

wait2().then((data) => {
    console.log(data);
})



console.log(fetch('https://api.github.com/repos/Chris-Cyr/codeup-web-exercises/commits/master', {headers: { Authorization: 'token c23b037c1c920d8187477845db810a22dae4db4f'}}));






