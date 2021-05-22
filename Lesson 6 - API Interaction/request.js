window.addEventListener("load", clearResults);
document.getElementById("clear").addEventListener("click", clearResults);
document.getElementById("callsyncdpromises").addEventListener("click", callNetSyncdPromises);
document.getElementById("callasync").addEventListener("click", callNetAsync);

const jokeCall = "https://v2.jokeapi.dev/joke/Any?type=single";
const ipCall1 = "https://freegeoip.app/json/71.227.160.222";
const ipCall2 = "https://freegeoip.app/json/61.27.60.123";

const status = {
    notStarted: "Not started",
    pending: "Pending",
    error: "Error"
};

const headerRow = document.getElementById("results").getElementsByTagName("th")[0];
const resultsRow = document.getElementById("responses");
const timingRow = document.getElementById("timings");

const joke1ResultCell = resultsRow.getElementsByTagName("td")[0];
const joke1TimingCell = timingRow.getElementsByTagName("td")[0];

const joke2ResultCell = resultsRow.getElementsByTagName("td")[1];
const joke2TimingCell = timingRow.getElementsByTagName("td")[1];

const ip1ResultCell = resultsRow.getElementsByTagName("td")[2];
const ip1TimingCell = timingRow.getElementsByTagName("td")[2];

const ip2ResultCell = resultsRow.getElementsByTagName("td")[3];
const ip2TimingCell = timingRow.getElementsByTagName("td")[3];

function clearResults() {
    for(cell of resultsRow.getElementsByTagName("td")) {
        cell.innerHTML = status.notStarted;
    }
    for(cell of timingRow.getElementsByTagName("td")) {
        cell.innerHTML = "";
    };
}


function callNetSyncdPromises() {
    const startTime = Date.now();
    joke1ResultCell.innerHTML = status.pending;
    fetch(jokeCall).then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            joke1ResultCell.innerHTML = status.error;
        }
    }).then((results) => {
        if(results && results.joke) {
            joke1ResultCell.innerHTML = results.joke;
        }
        joke1TimingCell.innerHTML = Date.now() - startTime;
        joke2ResultCell.innerHTML = status.pending;
        return fetch(jokeCall); 
    }).then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            joke2ResultCell.innerHTML = status.error;
        }
    }).then((results) => {
        if(results && results.joke) {
            joke2ResultCell.innerHTML = results.joke;
        }
        joke2TimingCell.innerHTML = Date.now() - startTime;
        ip1ResultCell.innerHTML = status.pending;
        return fetch(ipCall1); 
    }).then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            ip1ResultCell.innerHTML = status.error;
        }
    }).then((results) => {
        if(results && results.region_name && results.city) {
            ip1ResultCell.innerHTML = results.city + ", " + results.region_name;
        }
        ip1TimingCell.innerHTML = Date.now() - startTime;
        ip2ResultCell.innerHTML = status.pending;
        return fetch(ipCall2); 
    }).then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            ip2ResultCell.innerHTML = status.error;
        }
    }).then((results) => {
        if(results && results.region_name && results.city) {
            ip2ResultCell.innerHTML = results.city + ", " + results.region_name;
        }
        ip2TimingCell.innerHTML = Date.now() - startTime;
    }).catch((reason) => {
        console.error(reason);
    });
}

function callNetAsync() {
    ip1ResultCell.innerHTML = ip2ResultCell.innerHTML = joke1ResultCell.innerHTML = joke2ResultCell.innerHTML = status.pending;
    const startTime = Date.now();

    const callCollection = [];
    callCollection.push(fetch(jokeCall));
    callCollection.push(fetch(jokeCall));
    callCollection.push(fetch(ipCall1));
    callCollection.push(fetch(ipCall2));

    Promise.all(callCollection).then((results) => {
        for (let i = 0; i < 4; i++) {
            if(results[i].ok) {
                results[i].json().then((response) => {
                    if(i < 2) {
                        if(response && response.joke) {
                            resultsRow.getElementsByTagName("td")[i].innerHTML = response.joke;
                        }
                    } else {
                        if(response && response.region_name && response.city) {
                            resultsRow.getElementsByTagName("td")[i].innerHTML = response.city + ", " + response.region_name;
                        }
                    }
                });
            } else {
                resultsRow.getElementsByTagName("td")[i] = status.error;
            }
        }
    }).catch((reason) => {
        console.error(reason);
    }).finally(() => {
        ip1TimingCell.innerHTML = ip2TimingCell.innerHTML = joke1TimingCell.innerHTML = joke2TimingCell.innerHTML = (Date.now() - startTime);
    });
}