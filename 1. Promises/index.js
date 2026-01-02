function waitFor3(resolve) {
    setTimeout(resolve,3000);
}

function setTimeoutPromisified() {
    return new Promise(waitFor3);
}

function main() {
    console.log
}

setTimeoutPromisified().then(main);  // Promise Based Approach


// -------------------- CREATING A PROMISE CLASS MYSELF ---------------------------------


