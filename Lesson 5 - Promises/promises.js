const promise1 = fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit');
const promise2 = fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit');
const promise3 = fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit');
const promise4 = fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit');
const promise5 = fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit');

Promise.all([promise1, promise2, promise3, promise4, promise5])
    .then(resultArray => {
        resultArray.forEach(response => {
            response.json().then(jokeObj => {
                console.log(jokeObj.joke || jokeObj.setup + ' - ' + jokeObj.delivery);
            });
        })
    });


Promise.race([promise1, promise2, promise3, promise4, promise5])
    .then(response => {
        response.json().then(jokeObj => {
            console.log(jokeObj.joke || jokeObj.setup + ' - ' + jokeObj.delivery);
        });
    });