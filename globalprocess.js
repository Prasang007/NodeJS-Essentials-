// console.log(process.argv);
// ----------------------------- break-------------
// const [,,firstName,lastName] = process.argv;
// console.log(`My name is ${firstName} ${lastName}`);

// // node .\globalprocess.js prasang gupta
// // we want to focus on process global variable 
// ----------------------------- break-------------

const grab = flag => {
    let index = process.argv.indexOf(flag) + 1; 
    return process.argv[index];
}

const greetings = grab('--greeting');
const user = grab('--user');
console.log(`${greetings} ${user}`);

// node .\globalprocess.js --user prasang --greeting Yellow!
// ----------------------------- break-------------
