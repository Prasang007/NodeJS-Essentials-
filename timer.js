const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;
console.log(`Setting a delay of ${waitTime/1000} seconds`)

const incTime =() => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime)*100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting... ${p}%`)
    // console.log(`Waiting for... ${p} `);
};
const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(`done`);    
}

const interval = setInterval(incTime, waitInterval)
setTimeout(timerFinished, waitTime);