//https://sv443.net/jokeapi/v2/
document.getElementById('getJoke').addEventListener('click', getJokeFetch);

function getJokeFetch() {
    const jokeRequest = fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit') // Promise with a Response type object in it
        .then(response => response.json()) // Promise with a javascript object of some kind
        .then(data => {
            if (data.type == 'single') {
                appendLine(data.joke);
            } else if (data.type == 'twopart') {
                appendLine(data.setup + ' - ' + data.delivery);
            }
        }).catch(err => {
            clearJoke();
            appendLine('Error fetching joke: ' + err);
        });
    console.log("HEY HEY HEY!!!")
}

function clearJoke() {
    while (document.getElementById('joke').firstChild) {
        document.getElementById('joke').removeChild(this.lastChild);
    }
}

function appendLine(text) {
    const line = document.createElement('div');
    line.innerText = text;
    document.getElementById('joke').appendChild(line);
}