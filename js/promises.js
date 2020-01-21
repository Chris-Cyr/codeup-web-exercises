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

//
// function wait2 () {
//     return fetch('https://api.github.com/repos/Chris-Cyr/codeup-web-exercises/commits/master', {headers: { Authorization: 'token c23b037c1c920d8187477845db810a22dae4db4f'}});
// }
//
// wait2().then((data) => {
//     console.log(data);
// })



// fetch('https://api.github.com/users')
//     .then(resp => {
//         console.log(resp);
//         return resp.json();
//     })
//     .then(payload => {
//     console.log(payload)
//     return payload;
//     })
//     .then(users => users.map(user => user.login))
//     .then(usernames => console.log(usernames))


const lastCommit = (username) => {
    let url = `https://api.github.com/users/${username}/events/public`;
    fetch(url, {headers: {'Authorization': `token ${gitHubKey}`}})
        .then(resp => resp.json())
        .then(data => data.find(event => event.type === "PushEvent"))
    .then(event => event.created_at)
    .then(date => console.log(date));

}
lastCommit("chris-cyr")